import { FC } from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TableBody,
  Paper,
  Table,
} from "@mui/material";

import { tableCellClasses } from "@mui/material/TableCell";

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

import { useRouter } from "next/router";
import { getUserInfo } from "function/axios";
import userDefaultImage from "../../public/images/userDefaultImage.png"

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#CDAD78",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
    backgroundColor: "#FCF8F0",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  height: 50,
}));

const dummyData = [
  {
    donationApplyId: 1,
    title: "엉키는 마음은 꿈에선 다 잊게 영원처럼 안아줘",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: null,
  },
  {
    donationApplyId: 2,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: null,
  },
  {
    donationApplyId: 3,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: true,
  },
  {
    donationApplyId: 4,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: false,
  },
  {
    donationApplyId: 5,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: true,
  },
  {
    donationApplyId: 6,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: false,
  },
  {
    donationApplyId: 7,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: true,
  },
  {
    donationApplyId: 8,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: false,
  },
  {
    donationApplyId: 9,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: false,
  },
  {
    donationApplyId: 10,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
    fact: false,
  },
];

const UserMypageOther: FC = () => {
  const router = useRouter();

  const [myInfo, setMyInfo] = useState<any>(null);


  useEffect(() => {
    if (router.isReady) {
      // console.log(router.query.pk)
      getUserInfo(router.query.pk)
      .then(res => {
        // console.log(res)
        setMyInfo(res.data)
        if (res.data.role === 'USER'){
          // console.log('--')
        }else{
          // console.log('no')
          location.href="/"
        }
      })
      .catch(() => location.href="/")
      }
  }, [router.isReady]);


  return (
    <>
    {
      myInfo ?
      (
        <>
        <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // height: "100vh",
            overflow: "auto",
            mt: 0,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              mt: 4,
              mb: 3,
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
                  {/* <Image
                    src={goodImage}
                    alt="orgImage"
                    width="300px"
                    height="300px"
                  /> */}
                    {myInfo.profile === null ? (
                      <Image
                        src={userDefaultImage}
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
              <Grid item xs={9}>
                <Typography sx={{ mt: 0 }} variant="h4" fontWeight="bold">
                  {myInfo.name}
                </Typography>
                <Grid
                  sx={{ mt: 2 }}
                  container
                  direction="row"
                  alignItems="center"
                >
                  <MailIcon sx={{ mr: 2 }} />
                  <Typography align="center">{myInfo.email}</Typography>
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
                <Box
                  sx={{
                    bgcolor: "#f5e1be",
                    borderRadius: 1.25,
                    // height: "120px",
                  }}
                  minHeight="120px"
                >
                  <Typography sx={{ p: 2, mt: 1 }}>
                    {myInfo.info}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography variant="h4" fontWeight="bold">
              재능 기부
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                      번호
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                      제목
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                      등록일
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dummyData.map((data) => (
                    <StyledTableRow key={data.donationApplyId}>
                      <StyledTableCell align="center">
                        {data.donationApplyId}
                      </StyledTableCell>
                      <StyledTableCell align="center" sx={{ width: 400 }}>
                        {data.title}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.donationDate}
                      </StyledTableCell>
                      {/* <StyledTableCell align="center">
                        {data.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <IsFact fact={data.fact} />
                        <CustomButton sx={{ width: 40, height: 30, mr: 2 }}>
                          참석
                        </CustomButton>
                        <CustomButton2 sx={{ width: 40, height: 30 }}>
                          불참
                        </CustomButton2>
                      </StyledTableCell> */}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Box>
      </Box>
      </>
      ) : null
    }
    </>

  );
};

export default UserMypageOther;
