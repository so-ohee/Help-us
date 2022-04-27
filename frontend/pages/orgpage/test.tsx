import { FC } from "react";
import Image from "next/image";
import orgDefaultImage from "../../public/images/orgDefaultImage.png";
import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Divider,
  List,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "../../components/listItems";
// import { navbar } from "../../components/navbar";

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const OrgMypageTest: FC = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container>
              <Grid xs={3}>
                <Image
                  src={orgDefaultImage}
                  alt="orgImage"
                  width="300px"
                  height="300px"
                />
              </Grid>
              <Grid xs={8}>
                <Typography sx={{ mt: 2 }}>기관명 : 행복 복지관</Typography>
                <Typography sx={{ mt: 2 }}>
                  기관 주소 : 경기도 수원시 팔달구 중부대로 222번길 22 2-22
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  기관 번호 : 010-7777-7777
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  기관 이메일 : test@gmail.com
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  기관 소개 : I don't know how I feel all day long 우리의
                  문제인지 아님 내 문제인지 I don't know how to word my feeling
                  우리의 문제인지 아님 내 문제인지 그때 내가 그렇게 굴었던 건
                  진심이 아녔어 돌아서지 않을 줄 알았던 네게 나쁘게 한거야
                  너에게 자꾸 원치 않던 말로 상처 주는 날 미워해도 좋아 사실
                  나의 맘은 그게 아냐 너를 아주 원하고 있어 나도 모르겠는 날
                  너에게 물어 이런 저런 말들로 널 떠보려는 거 알아 너가 듣고
                  싶어 하는 말을 지금은 못하지만 기다려줬으면 해
                </Typography>
              </Grid>
              <Grid xs={1}>
                <Button variant="contained">수정</Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default OrgMypageTest;
