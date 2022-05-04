import { FC } from "react";
import OrgMypageSidebar from "../../../components/OrgMypageSidebar";
import Image from "next/image";
import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
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

import VolunteerCard from "@/components/VolunteerCard";
import VolunteerCardOrg from "../../../components/VolunteerCardOrg";

const mdTheme = createTheme();

const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const orgpageMyVolunteer: FC = () => {
  // api - 기부글 리스트 불러오기
  // const [donations, setDonations] = useState([]);

  const donations = [
    {
      title: "운동회를 위한 기부가 필요합니다.",
      content: "ddd",
      product: [
        {
          productName: "휴지",
          totalCount: 100,
          finishCount: 40,
        },
        {
          productName: "감자",
          totalCount: 100,
          finishCount: 70,
        },
        {
          productName: "라면",
          totalCount: 100,
          finishCount: 80,
        },
        {
          productName: "칫솔",
          totalCount: 100,
          finishCount: 50,
        },
      ],
      status: true,
      percent: 0.7,
    },
    {
      title: "일상용품이 필요합니다.",
      content: "ddd",
      product: [
        {
          productName: "물티슈",
          totalCount: 100,
          finishCount: 40,
        },
        {
          productName: "쌀",
          totalCount: 100,
          finishCount: 70,
        },
        {
          productName: "라면",
          totalCount: 100,
          finishCount: 80,
        },
        {
          productName: "칫솔",
          totalCount: 100,
          finishCount: 50,
        },
      ],
      status: true,
      percent: 0.9,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <OrgMypageSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          mt: 0,
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h4">봉사 모집 게시글</Typography>
            <CustomButton>글 작성</CustomButton>
          </Stack>
          <Grid>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, 500px)",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                rowGap: 5,
                columnGap: 10,
              }}
            >
              <VolunteerCardOrg />
              <VolunteerCardOrg />
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, 500px)",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                rowGap: 5,
                columnGap: 10,
              }}
            >
              <VolunteerCard />
              <VolunteerCard />
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default orgpageMyVolunteer;
