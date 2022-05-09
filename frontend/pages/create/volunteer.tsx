import { FC, useState } from "react";
import { Box, Grid, Button, Typography, Stack, TextField, TextareaAutosize } from "@mui/material/";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { CKEditor } from 'ckeditor4-react';
import DatePicker from "../../components/DatePicker";

const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const Volunteer: FC = () => {
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

  const [value, setValue] =useState<Date | null>(null);

  return (
  <ThemeProvider theme={theme}>
    <Grid container justifyContent="center" alignItems="center" >
      <Stack sx={{ minWidth: 1200 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
          <CustomButton variant="contained" href="/donation">
            목록으로
          </CustomButton>
        </Box>
        <Box sx={{ fontWeight: 'bold', my: 5}}>
          <Typography variant="h4" textAlign="center">봉사</Typography>
        </Box>
        <Box sx={{ my : 3}}>
          <TextField fullWidth label="제목"  />
        </Box>
        <CKEditor
          initData={<p>내용</p>}
        />
        <Box sx={{mt : 3, width: 800, height: 200, backgroundColor: '#FFBC39'}}>
          봉사 장소
        </Box>
        <Stack direction="row"sx={{ mt: 3}}>
          <Stack direction="row" sx={{alignItems: 'center'}}>
            <Typography variant="h5" sx={{mr : 2}}>봉사 인원</Typography>
            <Box>
              <TextField 
                label="봉사 인원"
                variant="outlined"
              />
            </Box>
            <Typography variant="h5" sx={{mx : 3}}>봉사일</Typography>
            <DatePicker />
            <Typography variant="h5" sx={{mx : 3}}>봉사 시간</Typography>
            <Box>
              <TextField 
                label="봉사 시간"
                variant="outlined"
              />
            </Box>
          </Stack>
        </Stack>
        <Box sx={{my: 5, display: 'flex', justifyContent: 'center'}}>
          <CustomButton size="large" variant="contained" type="submit">등록하기</CustomButton>
        </Box>
      </Stack>
    </Grid>
  </ThemeProvider>
  );
};

export default Volunteer;
