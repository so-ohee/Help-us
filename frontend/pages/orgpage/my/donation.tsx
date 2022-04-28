import { FC } from "react";
import OrgMypageSidebar from "../../../components/OrgMypageSidebar";
import Image from "next/image";
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
import helpImage from "../../../public/images/help.png";

const mdTheme = createTheme();

const orgpageMyDonation: FC = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <OrgMypageSidebar />
        {/* <Drawer
          variant="permanent"
          open={open}
          sx={{ backgroundColor: "#F8DD8E" }}
        >
          <List component="nav" sx={{ backgroundColor: "#F8DD8E" }}>
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer> */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Image
                  src={helpImage}
                  alt="orgImage"
                  width="300px"
                  height="300px"
                />
              </Grid>
              <Grid item xs={8}>
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
                  기관 소개 : 아무래도 다시 돌아갈 순 없어 아무런 표정도 없이
                  이런 말하는 그런 내가 잔인한가요 제발 내 마음 설레이게 자꾸만
                  바라보게 하지 말아요 아무 일 없던 것처럼 그냥 스쳐지나갈
                  미련인 걸 알아요 아무리 사랑한다 말했어도 다시 돌아올 수 없는
                  그 때 그 맘이 부른다고 다시 오나요 아무래도 다시 돌아갈 순
                  없어 아무런 표정도 없이 이런 말하는 그런 내가 잔인한가요
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Button variant="contained">수정</Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default orgpageMyDonation;
