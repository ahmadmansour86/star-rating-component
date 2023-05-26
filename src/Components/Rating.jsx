import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Tooltip from '@mui/material/Tooltip';

const Rating = ({
  precision = 1,
  totalStars = 5, // Default stars number
  emptyIcon = StarIcon,
  filledIcon = StarIcon,
  fontSize = 'medium' || 'large'|| 'small',
  disabled = false,
  nonInteractive = false,
  defaultValue = 0, // Default rating value
  caption = false,
}) => {
  const [activeStar, setActiveStar] = useState(defaultValue);
  const [hoverActiveStar, setHoverActiveStar] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const ratingContainerRef = useRef(null);
  const disabledColor = '#eeeeee';
  
  // Default Rating calculation
  const calculateRating = (e) => {
    const { width, left } = ratingContainerRef.current.getBoundingClientRect();
    /* e.clientX -> will also have left included so we want to remove that part 
    so that we get coordinate value started from first rating item and we simply
    divided by width to get the percentage */
    let percent = (e.clientX - left) / width;
    /* Since percent is in decimal, for calculation we need to multiply this percent with
    total number of star so it will give numbers which is less than or equal total number of start */
    const numberInStars = percent * totalStars;
    //This will give number close to number with precision.
    const nearestNumber = Math.round((numberInStars + precision / 2) / precision) * precision;
    //to make sure it should never go beyond that value
    return Number(nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0));
  };

  // Handling On Click
  const handleClick = (e) => {
    if (!disabled && !nonInteractive) {
      setIsHovered(false);
      const clickedStar = calculateRating(e);
      if (clickedStar === activeStar) {
        setActiveStar(defaultValue);
      } else {
        setActiveStar(clickedStar);
      }
    }
  };
  // Handling On Mouse Move
  const handleMouseMove = (e) => {
    if (!disabled && !nonInteractive) {
        setIsHovered(true);
        setHoverActiveStar(calculateRating(e));
      }
  };
  // Handling On Mouse Leave
  const handleMouseLeave = (e) => {
    if (!disabled && !nonInteractive) {
        setHoverActiveStar(-1); // Reset to default state
        setIsHovered(false);
      }
  };

  useEffect(() => {
    setActiveStar(defaultValue);
  }, [defaultValue]);

  const EmptyIcon = emptyIcon;
  const FilledIcon = filledIcon;

  return (
    <Box
      sx={{
        display: 'inline-flex',
        position: 'relative',
        cursor: disabled || nonInteractive ? 'auto' : 'pointer',
        textAlign: 'left',
        // Add focus style
        '&:focus': {
            outline: 'none',
            border: '2px solid #489edd',
            borderRadius: '10px'
          },
      }}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ratingContainerRef}
    >
      
      {[...new Array(totalStars)].map((arr, index) => {
        const activeState = isHovered ? hoverActiveStar : activeStar;
        // We only need to render empty icon layout when active state is not set
        const showEmptyIcon = activeState === -1 || activeState < index + 1;
        // Checks if the star is clicked
        const isActiveRating = activeState !== 1;
        //Checks if we need to use a specific precision rating
        const isRatingWithPrecision = activeState % 1 !== 0;
        //Checks whether we need to show an active state of rating for the current index
        const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
        //Ensures if the above three conditions are satisfied, and if so, determines if we need to show a precision based star.
        const showRatingWithPrecision =
          isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;
        const ratingTooltip = disabled || nonInteractive ? null : `${activeState} / ${totalStars}`;

        return (
        <Tooltip title={ratingTooltip} key={index} arrow={true} placement="top">
          <Box
            position={'relative'}
            sx={{
                cursor: disabled || nonInteractive ? 'auto' : 'pointer',
            }}
            key={index}
          >
            <Box
              sx={{
                width: showRatingWithPrecision ? `${(activeState % 1) * 100}%` : '0%',
                overflow: 'hidden',
                position: 'absolute',
                color: '#e8a93c'
              }}
            >
              <FilledIcon fontSize={fontSize} />
            </Box>
            
            <Box
              sx={{
                color: showEmptyIcon ? disabled ? disabledColor : '#e1e1e1' : disabled ? '#b8b8b7' : '#e8a93c'
              }}
            >
              {showEmptyIcon ? <EmptyIcon fontSize={fontSize} /> : <FilledIcon fontSize={fontSize}/>}
            </Box>
          </Box>
        </Tooltip>
        );
      })}
            <Box
                sx={{
                    display: caption ? 'inline-flex' : 'none',
                    position: 'relative',
                    padding: '4px 0 0 10px',
                }}>
                {activeStar}/{totalStars}
            </Box>
    </Box>
  );
};

export default Rating;