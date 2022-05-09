import { FC } from "react";
import { Box, Grid, Button, Typography, Stack, TextField, TextareaAutosize } from "@mui/material/";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CKEditor } from 'ckeditor4-react';
import { styled } from "@mui/material/styles";


const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const Review: FC = () => {
  const theme = createTheme({
    typography: {
      // fontFamily: "Gowun Dodum",
      // fontFamily: "Noto Serif KR",
      fontFamily: "Noto Sans KR",
    },
    palette: {
      primary: {
        main: '#5B321E',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center">
        <Stack sx={{ minWidth: 1200 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <CustomButton variant="contained" href="/review">
              목록으로
            </CustomButton>
          </Box>
          <Box sx={{ fontWeight: 'bold', my: 5}}>
            <Typography variant="h4" textAlign="center">인증하기</Typography>
          </Box>
          <Typography>
            기부글 제목 : @@@
          </Typography>
          <Box sx={{ my : 3}}>
            <TextField fullWidth label="제목"  />
          </Box>
          <CKEditor
            initData={<p>내용 :<br />두번째</p>}
          />
          <Box sx={{my: 5, display: 'flex', justifyContent: 'center'}}>
            <CustomButton size="large" variant="contained" type="submit">등록하기</CustomButton>
          </Box>
        </Stack>
      </Grid>
    </ThemeProvider>
  );
};

export default Review;
