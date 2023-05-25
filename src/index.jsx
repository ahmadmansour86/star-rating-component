import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Rating from './Components/Rating';

ReactDOM.render(
  <React.StrictMode>
    {/* Size */}
    <Typography fontSize='32px' margin= '50px 15%'>Size</Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: '50px 15%',
        background: '#effbfe',
        '> div': {
          padding: '50px'
        }
      }}
    >
      <Box>
        <Rating fontSize='large' defaultValue='3' />
        <Typography textAlign={'center'} fontSize='0.7rem' paddingTop= '50px'>
          Large
        </Typography>
      </Box>
      <Box>
      <Rating defaultValue='3' />
        <Typography textAlign={'center'} fontSize='0.7rem' paddingTop= '50px'>
          Medium
        </Typography>
      </Box>
      <Box>
        <Rating fontSize='small' defaultValue='3' />
        <Typography textAlign={'center'} fontSize='0.7rem' paddingTop= '50px'>
          Small
        </Typography>
      </Box>
    </Box>

    {/* State */}
    <Typography fontSize='32px' margin= '50px 15%'>State</Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: '50px 15%',
        background: '#fafafa',
        '> div': {
          padding: '50px'
        }
      }}
    >
      <Box>
        <Rating defaultValue='3' />
        <Typography textAlign={'center'} fontSize='0.7rem' paddingTop= '50px'>
          Inactive, hover
        </Typography>
      </Box>
      <Box>
      <Rating defaultValue='3' />
        <Typography textAlign={'center'} fontSize='0.7rem' paddingTop= '50px'>
          Focus
        </Typography>
      </Box>
      <Box>
        <Rating defaultValue='3' disabled/>
        <Typography textAlign={'center'} fontSize='0.7rem' paddingTop= '50px'>
          Disabled
        </Typography>
      </Box>
    </Box>

    {/* Rating */}
    <Typography fontSize='32px' margin= '50px 15%'>Rating</Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: '50px 15%',
        background: '#fafafa',
        '> div': {
          padding: '50px'
        }
      }}
    >
      <Box>
        <Rating precision={0.25} />
        <Typography textAlign={'center'} fontSize='0.7rem' paddingTop= '50px'>
          0 stars
        </Typography>
      </Box>
      <Box>
      <Rating defaultValue='1.5' precision={0.25} />
        <Typography textAlign={'center'} fontSize='0.7rem' paddingTop= '50px'>
            1½ stars
        </Typography>
      </Box>
      <Box>
        <Rating defaultValue='3' precision={0.25} />
        <Typography textAlign={'center'} fontSize='0.7rem' paddingTop= '50px'>
            3 stars
        </Typography>
      </Box>
      <Box>
        <Rating defaultValue='4.5' precision={0.25} />
        <Typography textAlign={'center'} fontSize='0.7rem' paddingTop= '50px'>
            4½
        </Typography>
      </Box>
    </Box>
        
  </React.StrictMode>,
  document.getElementById('root')
);