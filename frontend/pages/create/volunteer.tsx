import { FC, useState, useRef, useEffect } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  Stack,
  TextField,
  TextareaAutosize,
  Dialog,
  OutlinedInput, 
} from "@mui/material/";
import dayjs from 'dayjs';
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Select from '@mui/material/Select';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DateTimePicker from "../../components/DateTimePicker"
import Postcode from "@actbase/react-daum-postcode";

// api
import {createVolunteer} from "../../function/axios"

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

// const volunteerTimes = ['0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5' ,'8']
// const volunteerTimes = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5 ,8]

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Volunteer: FC = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [id, setId] = useState<any>(0);

  const [ title, setTitle ] = useState<string>("");
  const [ content, setContent ] = useState<string>("");
  const [ people, setPeople ] = useState<number | string>();
  const [ startValue, setStartValue ] = useState<string>("");
  const [ time, setTime ] = useState<any>('');

  const [post, setPost] = useState<string | number>("");
  const [addr, setAddr] = useState<string>("");
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

  const onChange = (e) => {
    setAddr2(e.target.value);
  };

  const handleChange = (event) => {
    setTime(event.target.value as string);
    // console.log(typeof time)
  }

  // const handleStartValue = (event) => {
  //   setStartValue(dayjs(event.target.value as string).format("YYYY-MM-DD HH:mm"))
  //   console.log(startValue)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const VolunteerReqDto  = {
      title : title,
      content : content,
      people : people,
      volDate : startValue,
      time : time,
      volZipcode : post,
      volAddress : addr + addr2,
    }
    if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (content === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (people === "") {
      alert("봉사 인원을 입력해주세요.");
      return;
    }
    if (startValue === "") {
      alert("시작날짜와 시간을 입력해주세요.");
      return;
    }
    if (time === "") {
      alert("봉사 소요 시간을 입력해주세요.");
      return;
    }
    if (post === "") {
      alert("우편번호를 입력해주세요.");
      return;
    }
    if (addr2 === "") {
      alert("상세주소를 입력해주세요.");
      return;
    }

    createVolunteer(id, token, VolunteerReqDto)
      .then((res) => {
        console.log(res + "성공")
      })
      .catch((err) => console.log(err + "실패"))

  }

  useEffect(() => {
    const Id = localStorage.getItem("id");
    setId(Id);
  }, [id]);

  const getData = (startValue) => {
    setStartValue(startValue)
  }

  console.log(startValue)

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
                onChange={(e) => setAddr(e.target.value)}
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
              <Typography variant="h5" sx={{ mr: 2 }} >
                봉사 인원
              </Typography>
              <Box>
                <TextField label="봉사 인원" variant="outlined" onChange={e => setPeople(e.target.value)}/>
              </Box>
              <Typography variant="h5" sx={{ mx: 3 }}>
                봉사 시작 날짜
              </Typography>
                <DateTimePicker 
                  startValue={startValue}
                  getData={getData}
                />
              <Typography variant="h5" sx={{ mx: 3 }}>
                봉사 소요 시간
              </Typography>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="time">시간 선택</InputLabel>
                <Select
                  labelId="time"
                  id="time"
                  value={time}
                  onChange={handleChange}
                  input={<OutlinedInput label="시간 선택" />}
                  MenuProps={MenuProps}
                >
                  <MenuItem value={0.5}>0.5</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={1.5}>1.5</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={2.5}>2.5</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={3.5}>3.2</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={4.5}>4.5</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={5.5}>5.5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={6.5}>6.5</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={7.5}>7.5</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  
                </Select>
              </FormControl>
            </Stack>
          </Stack>
          <Box sx={{ my: 5, display: "flex", justifyContent: "center" }}>
            <CustomButton size="large" variant="contained" type="submit" onClick={handleSubmit}>
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
