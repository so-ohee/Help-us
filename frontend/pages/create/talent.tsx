import { FC, useState } from "react";
import { Box, Grid, Button, Typography, Stack, TextField, TextareaAutosize } from "@mui/material/";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { createTalent } from "../../function/axios"

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
  const [ title, setTitle ] = useState<string>('');
  const [ content, setContent ] =useState<string>('');

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

  const talentSubmit = () => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("jwt");

    const data = {
      title : title,
      content : content,
    }

    if (title == "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (content == "") {
      alert("내용을 입력해주세요.");
      return;
    }

    createTalent(id, token, data)
      .then((res) => {
        console.log(res + "성공")
      })
      .catch((err) => console.log(err + "실패"))
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center">
        <Stack sx={{ minWidth: 1200 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <CustomButton variant="contained" href="/share">
              목록으로
            </CustomButton>
          </Box>
          <Box sx={{ fontWeight: 'bold', my: 5}}>
            <Typography variant="h4" textAlign="center">재능 기부</Typography>
          </Box>
          <Box sx={{ my : 3}}>
            <TextField 
              fullWidth 
              label="제목"
              onChange={(e) => setTitle(e.target.value)}  
            />
          </Box>
          <TextField
            fullWidth
            multiline
            minRows={15}
            placeholder="내용"
            onChange={(e) => setContent(e.target.value)}
          />
          <Box sx={{my: 5, display: 'flex', justifyContent: 'center'}}>
            <CustomButton size="large" variant="contained" type="submit" onClick={talentSubmit}>등록하기</CustomButton>
          </Box>
        </Stack>
      </Grid>
    </ThemeProvider>
  );
};

export default Talent;
