import { FC, useState } from "react";
import { Box, Grid, Button, Typography, Stack, InputLabel, MenuItem, FormControl, TextField } from "@mui/material/";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { CKEditor } from 'ckeditor4-react';


const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});


const Cs: FC = () => {
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

  const [ option, setOption ] = useState('');

  const optionHandleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center">
        <Stack sx={{ minWidth: 1200 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <CustomButton variant="contained" href="/donation">
                목록으로
              </CustomButton>
            </Box>
            <Box sx={{ fontWeight: 'bold', my: 5}}>
              <Typography variant="h4" textAlign="center">물품 기부</Typography>
            </Box>
            <Box sx={{ maxWidth: 200, display: 'flex', justifyContent: 'flex-start'}}>
              <FormControl fullWidth>
                <InputLabel>카테고리 선택</InputLabel>
                <Select
                  value={option}
                  label="option"
                  onChange={optionHandleChange}
                >
                  <MenuItem value="inquiry">문의</MenuItem>
                  <MenuItem value="update">정보 수정</MenuItem>
                  <MenuItem value="report">신고</MenuItem>
                  <MenuItem value="help">도움이 필요합니다</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            <Box sx={{ my : 3}}>
              <TextField fullWidth label="제목"  />
            </Box>
            
            <CKEditor
              initData={<p>내용 :</p>}
            />
        <Box sx={{my: 5, display: 'flex', justifyContent: 'center'}}>
          <CustomButton size="large" variant="contained" type="submit">등록하기</CustomButton>
        </Box>
        </Stack>
      </Grid>
    </ThemeProvider>
  );
};

export default Cs;
