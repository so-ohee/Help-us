import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  CssBaseline,
  IconButton,
  Stack,
} from "@mui/material";

import UserMypageSidebar from "@/components/UserMypageSidebar";
import Link from "next/link";
import helpImage from "../../public/images/help.png";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@material-ui/core/styles";

import BusinessIcon from "@mui/icons-material/Business";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";

import TestImage from "../../public/images/testImage.jpg";
import goodImage from "../../public/images/good.jpg";

// api
import { getMypage } from "function/axios";

const mdTheme = createTheme();

const useStyles = makeStyles((theme) => ({
  customHoverFocus: {
    "&:hover, &.Mui-focusVisible": { backgroundColor: "#FFBC39" },
  },
  customColor: {
    backgroundColor: "#F8DD8E",
    "&:hover, &.Mui-focusVisible": { backgroundColor: "#FFBC39" },
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
  // width: "50px",
});

const UpdateButton2 = styled(Button)({
  backgroundColor: "#CDAD78",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#5B321E",
    color: "white",
  },
  // width: "50px",
});

const UserMypage: FC = () => {
  // const [myInfo, setMyInfo] = useState<any>(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("jwt");
  //   console.log("token은", token);
  //   getMypage(token).then((res) => {
  //     // setMyInfo(res.data);
  //     console.log("가져온 data:", res);
  //   });
  // }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <UserMypageSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          mt: 0,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            mt: 4,
            mb: 4,
            bgcolor: "#FCF8F0",
            borderRadius: 1.25,
            // height: "350px",
          }}
        >
          <Grid container spacing={2} minHeight="350px">
            <Grid item xs={3}>
              <div
                style={{
                  borderRadius: "5px",
                  overflow: "hidden",
                  marginTop: "6px",
                }}
              >
                <Image
                  src={goodImage}
                  alt="orgImage"
                  width="300px"
                  height="300px"
                />
              </div>
            </Grid>
            <Grid item xs={8}>
              <Typography sx={{ mt: 0 }} variant="h4" fontWeight="bold">
                이다예
              </Typography>
              <Grid
                sx={{ mt: 2 }}
                container
                direction="row"
                alignItems="center"
              >
                <MailIcon sx={{ mr: 2 }} />
                <Typography align="center">test@gmail.com</Typography>
              </Grid>
              <Grid
                sx={{ mt: 2 }}
                container
                direction="row"
                alignItems="center"
              >
                <Typography fontWeight="bold" align="center">
                  기부 횟수 : 4
                </Typography>
              </Grid>
              <Grid
                sx={{ mt: 2 }}
                container
                direction="row"
                alignItems="center"
              >
                <Typography fontWeight="bold" align="center">
                  봉사 시간 : 8
                </Typography>
              </Grid>
              {/* <Grid
                sx={{ mt: 2 }}
                container
                direction="row"
                alignItems="center"
              >
                <BusinessIcon sx={{ mr: 2 }} />
                <Typography align="center">
                  경기도 수원시 팔달구 중부대로 222번길 22 2-22
                </Typography>
              </Grid>
              <Grid
                sx={{ mt: 2 }}
                container
                direction="row"
                alignItems="center"
              >
                <CallIcon sx={{ mr: 2 }} />
                <Typography align="center">010-7777-7777</Typography>
              </Grid> */}

              <Box
                sx={{
                  bgcolor: "#f5e1be",
                  borderRadius: 1.25,
                  // height: "120px",
                }}
                minHeight="120px"
              >
                <Typography sx={{ p: 2, mt: 1 }}>
                  아무래도 다시 돌아갈 순 없어 아무런 표정도 없이 이런 말하는
                  그런 내가 잔인한가요 제발 내 마음 설레이게 자꾸만 바라보게
                  하지 말아요 아무 일 없던 것처럼 그냥 스쳐지나갈 미련인 걸
                  알아요 아무리 사랑한다 말했어도 다시 돌아올 수 없는 그 때 그
                  맘이 부른다고 다시 오나요 아무래도 다시 돌아갈 순 없어 아무런
                  표정도 없이 이런 말하는 그런 내가 잔인한가요
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <UpdateButton variant="contained" sx={{ mb: 15 }}>
                수정
              </UpdateButton>
              {/* <UpdateButton variant="contained" size="small">
                  <EditIcon />
                </UpdateButton> */}
              {/* <IconButton aria-label="edit" className={classes.customColor}>
                  <EditIcon />
                </IconButton> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default UserMypage;
