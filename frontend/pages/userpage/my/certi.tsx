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
            <Stack sx={{ mt: 10 }} alignItems="center">
              <Image src={logo} height="300px" width="300px" alt="d" />
              <Link href="/certi">
                <UpdateButton sx={{ width: 150, mt: 5 }}>
                  증명서 발급 이동
                </UpdateButton>
              </Link>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default UserMypageCerti;
