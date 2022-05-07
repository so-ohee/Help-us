import { FC } from "react";
import { Box, Grid, Tab, Typography, Stack, Button, InputBase, Paper } from "@mui/material/";
import Image from 'next/image';
import volunteer1 from "../public/images/volunteer1.jpg";


const CsMain: FC = () => {
  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Stack>
          <Box textAlign="center" >
            <Image 
              src= {volunteer1}
              alt="volunteer first"
              width={1200}
              height={200}
            />
          </Box>
          <Box sx={{ fontWeight: 'bold', my: 5}}>
            <Typography variant="h4" textAlign="center">게시판</Typography>
          </Box>
        </Stack>
      </Grid>
    </div>
  );
};

export default CsMain;
