import { FC } from "react";
import { Box, Grid, Button, Typography, Stack, TextField, TextareaAutosize } from "@mui/material/";
import { styled } from "@mui/material/styles";
import Image from 'next/image';
import { CKEditor } from 'ckeditor4-react';
import volunteer1 from "../../public/images/volunteer1.jpg";

const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const Talent: FC = () => {
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
          <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <CustomButton variant="contained" href="/share">
              목록으로
            </CustomButton>
          </Box>
          <Box sx={{ fontWeight: 'bold', my: 5}}>
            <Typography variant="h4" textAlign="center">재능 기부</Typography>
          </Box>
          <Box sx={{ my : 3}}>
            <TextField fullWidth label="제목"  />
          </Box>
          <CKEditor
              initData={<p>봉사 가능 일 : <br />내용 :</p>}
            />
          <Box sx={{my: 5, display: 'flex', justifyContent: 'center'}}>
            <CustomButton size="large" variant="contained" type="submit">등록하기</CustomButton>
          </Box>
        </Stack>
      </Grid>
    </div>
  );
};

export default Talent;
