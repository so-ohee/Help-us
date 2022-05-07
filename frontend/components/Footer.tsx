import react from 'react';
import { Box, Grid, Tab, Typography, Stack } from "@mui/material/";

const Footer = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Box sx={{height: 200, width: '100%', backgroundColor: '#FCF8F0' }}>
          <Box sx={{ my : 7, ml : 10}}>
            <Typography variant='h5' sx={{fontWeight: 'bold'}}>
              Help:us
            </Typography>
            <Typography variant='h6'>
              이메일 helpus@gmail.com
            </Typography>
            <Typography variant='h6'>
              ©Help : us. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
    </Grid>
  )
}

export default Footer;