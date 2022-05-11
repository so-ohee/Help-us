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
import userDefaultImage from "../../public/images/userDefaultImage.png";

import { useRouter } from "next/router";

// api
import { getUserInfo } from "function/axios";

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
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const [myInfo, setMyInfo] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("id");
    getUserInfo(token).then((res) => {
      setMyInfo(res.data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading ? (
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
                // width: "1000px",
                // height: "350px",
              }}
            >
              <Grid container minHeight="250px">
                <Grid item xs={2} sx={{ my: "auto", mr: 3 }}>
                  <div
                    style={{
                      borderRadius: "5px",
                      overflow: "hidden",
                      marginTop: "6px",
                    }}
                  >
                    {myInfo.profile === null ? (
                      <Image
                        src={userDefaultImage}
                        alt="orgImage"
                        width="200px"
                        height="200px"
                      />
                    ) : (
                      <Image
                        src={myInfo.profile}
                        alt="orgImage"
                        width="200px"
                        height="200px"
                      />
                    )}
                  </div>
                </Grid>
                <Grid item xs={8} sx={{ my: "auto", mr: 5 }}>
                  <Typography sx={{ mt: 0 }} variant="h4" fontWeight="bold">
                    {myInfo.name}
                  </Typography>
                  <Grid
                    sx={{ mt: 1 }}
                    container
                    direction="row"
                    alignItems="center"
                  >
                    <MailIcon sx={{ mr: 1 }} />
                    <Typography align="center">{myInfo.email}</Typography>
                  </Grid>
                  <Box
                    sx={{
                      bgcolor: "#f5e1be",
                      borderRadius: 1.25,
                      // height: "120px",
                    }}
                    minHeight="120px"
                  >
                    <Typography sx={{ p: 2, mt: 1 }}>{myInfo.info}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={1} justifyContent="right">
                  <UpdateButton variant="contained" sx={{ mb: 15 }}>
                    수정
                  </UpdateButton>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default UserMypage;
