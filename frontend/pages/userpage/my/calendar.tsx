import UserMypageSidebar from "@/components/UserMypageSidebar";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Container,
  Stack,
  Typography,
  CssBaseline,
  Button,
} from "@mui/material";
import Calendar from "react-awesome-calendar";
import "react-calendar/dist/Calendar.css";

import { FC, useState, useEffect } from "react";
import Link from "next/link";

import logo from "../../../public/images/logo.png";

import Image from "next/image";

const UpdateButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const UserMypageCerti: FC = () => {
  const events = [
    {
      id: 1,
      color: "#fd3153",
      from: "2019-05-02T18:00:00+00:00",
      to: "2019-05-05T19:00:00+00:00",
      title: "This is an event",
    },
    {
      id: 2,
      color: "#1ccb9e",
      from: "2019-05-01T13:00:00+00:00",
      to: "2019-05-05T14:00:00+00:00",
      title: "This is another event",
    },
    {
      id: 3,
      color: "#3694DF",
      from: "2019-05-05T13:00:00+00:00",
      to: "2019-05-05T20:00:00+00:00",
      title: "This is also another event",
    },
  ];

  const [value, setValue] = useState(new Date());
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <UserMypageSidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "66vh",
            overflow: "auto",
            mt: 0,
          }}
        >
          <Container maxWidth="lg">
            <Calendar events={events} />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default UserMypageCerti;
