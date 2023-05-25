import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Tooltip from '@mui/material/Tooltip';

const Rating = ({
  precision = 1,
  totalStars = 5,
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

  const calculateRating = (e) => {
    const { width, left } = ratingContainerRef.current.getBoundingClientRect();
    let percent = (e.clientX - left) / width;
    const numberInStars = percent * totalStars;
    const nearestNumber = Math.round((numberInStars + precision / 2) / precision) * precision;

    return Number(nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0));
  };

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

  const handleMouseMove = (e) => {
    if (!disabled && !nonInteractive) {
        setIsHovered(true);
        setHoverActiveStar(calculateRating(e));
      }
  };

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
        const showEmptyIcon = activeState === -1 || activeState < index + 1;
        const isActiveRating = activeState !== 1;
        const isRatingWithPrecision = activeState % 1 !== 0;
        const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
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