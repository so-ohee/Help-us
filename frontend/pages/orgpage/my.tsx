import { FC, useEffect, useState } from "react";
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
import OrgMypageSidebar from "../../components/OrgMypageSidebar";
import Link from "next/link";
import helpImage from "../../public/images/help.png";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@material-ui/core/styles";

import BusinessIcon from "@mui/icons-material/Business";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";

import TestImage from "../../public/images/testImage.jpg";
import defaultImage from "../../public/images/defaultImage.png";

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

const OrgMypage: FC = () => {
  // const accessToken = localStorage.getItem("jwt");
  // console.log(accessToken);

  const [loading, setLoading] = useState<boolean>(false);

  const [myInfo, setMyInfo] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("id");
    getUserInfo(token).then((res) => {
      setMyInfo(res.data);
      console.log(myInfo);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading ? (
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
                      borderRadius: "20%",
                      overflow: "hidden",
                      marginTop: "6px",
                      // height: "300px",
                    }}
                  >
                    {myInfo.profile === null ? (
                      <Image
                        src={defaultImage}
                        alt="orgImage"
                        width="300px"
                        height="300px"
                      />
                    ) : (
                      <Image
                        src={myInfo.profile}
                        alt="orgImage"
                        width="300px"
                        height="300px"
                      />
                    )}
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <Typography sx={{ mt: 0 }} variant="h4" fontWeight="bold">
                    {myInfo.name}
                  </Typography>
                  <Grid
                    sx={{ mt: 2 }}
                    container
                    direction="row"
                    alignItems="center"
                  >
                    <BusinessIcon sx={{ mr: 2 }} />
                    <Typography align="center">{myInfo.address}</Typography>
                  </Grid>
                  <Grid
                    sx={{ mt: 2 }}
                    container
                    direction="row"
                    alignItems="center"
                  >
                    <CallIcon sx={{ mr: 2 }} />
                    <Typography align="center">{myInfo.tel}</Typography>
                  </Grid>
                  <Grid
                    sx={{ mt: 2 }}
                    container
                    direction="row"
                    alignItems="center"
                  >
                    <MailIcon sx={{ mr: 2 }} />
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
                <Grid item xs={1}>
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

export default OrgMypage;
