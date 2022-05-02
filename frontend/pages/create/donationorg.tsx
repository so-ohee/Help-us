import { FC } from "react";
import { Box, Grid, Button, Typography, Stack, TextField, TextareaAutosize } from "@mui/material/";
import Image from 'next/image';
import volunteer1 from "../../public/images/volunteer1.jpg";

const DonationOrg: FC = () => {
  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Stack>
          <Box textAlign="center" sx={{ mt: 5, mb : 10}}>
              <Image 
                src= {volunteer1}
                alt="volunteer first"
                width={1200}
                height={200}
              />
          </Box>
          <Stack direction="row">
            <Typography variant="h5" textAlign="center">물품 기부</Typography>
            <Button variant="contained">
              목록으로
            </Button>
          </Stack>
          <Button variant="outlined" >
            유통기한 가이드
          </Button>
          <Box>
            <TextField fullWidth label="제목" />
            <TextField fullWidth multiline rows={5} label="내용" />
          </Box>
        </Stack>
      </Grid>
    </div>  
  );
};

export default DonationOrg;
