import { FC, useState, useRef } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  Stack,
  TextField,
  TextareaAutosize,
  Dialog,
} from "@mui/material/";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { CKEditor } from "ckeditor4-react";
import DatePicker from "../../components/DatePicker";

import Postcode from "@actbase/react-daum-postcode";

const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const theme = createTheme({
  typography: {
    // fontFamily: "Gowun Dodum",
    // fontFamily: "Noto Serif KR",
    fontFamily: "Noto Sans KR",
  },
  palette: {
    primary: {
      main: "#5B321E",
    },
  },
});

const CustomDisableInput = styled(TextField)(() => ({
  ".MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#000",
    color: "#000",
  },
}));

const UpdateButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const Volunteer: FC = () => {
  const [value, setValue] = useState<Date | null>(null);

  const [addr, setAddr] = useState<string>("");
  const [post, setPost] = useState<string | number>("");
  const [addr2, setAddr2] = useState<any>("");

  // 우편번호 찾기 클릭시
  const [open, setOpen] = useState<boolean>(false);
  const open2 = useRef(false); // 타이머 중, dialog 리렌더링 방지

  const handleClickOpen = () => {
    setOpen(true);
    open2.current = true;
  };
  const handleClose = () => {
    setOpen(false);
    open2.current = false;
  };

  const onChange = () => {
    setAddr2(addr2);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center">
        <Stack sx={{ minWidth: 1200 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <CustomButton variant="contained" href="/donation">
              목록으로
            </CustomButton>
          </Box>
          <Box sx={{ fontWeight: "bold", my: 5 }}>
            <Typography variant="h4" textAlign="center" fontWeight="bold">
              봉사 글 작성
            </Typography>
          </Box>
          <Box sx={{ my: 3 }}>
            <TextField fullWidth label="제목" />
          </Box>
          <CKEditor initData={<p>내용</p>} />
          <Typography variant="h5" sx={{ mt: 3 }}>
            봉사 장소
          </Typography>
          <Stack direction="row" sx={{ mt: 3 }} alignItems="center">
            <CustomDisableInput
              sx={{ width: 480 }}
              name="post"
              required
              fullWidth
              id="post"
              label="우편번호"
              value={post}
              disabled={true}
            />
            <UpdateButton
              sx={{ mx: 1, height: 55 }}
              variant="contained"
              onClick={handleClickOpen}
            >
              우편번호 찾기
            </UpdateButton>
          </Stack>
          <Stack sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <CustomDisableInput
                sx={{ width: 600 }}
                name="addr1"
                required
                fullWidth
                id="addr1"
                label="주소"
                value={addr}
                disabled={true}
              />
            </Grid>
          </Stack>
          <Stack sx={{ mt: 1 }}>
            <Grid item xs={12} style={{ marginBottom: "15px" }}>
              <TextField
                sx={{ width: 600 }}
                name="addr2"
                fullWidth
                id="addr2"
                label="상세 주소"
                value={addr2}
                onChange={onChange}
                inputProps={{ maxLength: 30 }}
              />
            </Grid>
          </Stack>
          <Stack direction="row" sx={{ mt: 3 }}>
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Typography variant="h5" sx={{ mr: 2 }}>
                봉사 인원
              </Typography>
              <Box>
                <TextField label="봉사 인원" variant="outlined" />
              </Box>
              <Typography variant="h5" sx={{ mx: 3 }}>
                봉사일
              </Typography>
              <DatePicker />
              <Typography variant="h5" sx={{ mx: 3 }}>
                봉사 시간
              </Typography>
              <Box>
                <TextField label="봉사 시간" variant="outlined" />
              </Box>
            </Stack>
          </Stack>
          <Box sx={{ my: 5, display: "flex", justifyContent: "center" }}>
            <CustomButton size="large" variant="contained" type="submit">
              등록하기
            </CustomButton>
          </Box>
        </Stack>
      </Grid>
      <>
        <Dialog open={open} onClose={handleClose}>
          <Postcode
            style={{ width: 500, height: 500 }}
            jsOptions={{ animation: true, hideMapBtn: true }}
            onError={() => console.log("우편번호 찾기 error")}
            onSelected={(data) => {
              // console.log(data)
              setAddr(data.address);
              setPost(data.zonecode);
              // console.log(JSON.stringify(data))
              setOpen(false);
              open2.current = false;
            }}
          />
        </Dialog>
      </>
    </ThemeProvider>
  );
};

export default Volunteer;
