import { FC, useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Grid,
  IconButton,
  Box,
  Container,
  Stack,
  Typography,
  CssBaseline,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TableBody,
  Paper,
  Table,
  Button,
  Divider,
  TextField,
  Tooltip,
  FormGroup,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

import Link from "next/link";
import helpImage from "../../public/images/help.png";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@material-ui/core/styles";

import BusinessIcon from "@mui/icons-material/Business";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

import testImage from "../../../public/images/testImage.jpg";

// api
import { donationDetail } from "function/axios";
import { useRouter } from "next/router";

const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const CustomButton2 = styled(Button)({
  color: "#5B321E",
  border: "2px solid #5B321E",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#FCE2A6",
    color: "#5B321E",
  },
});

const CustomButton3 = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,
  outline: "none",
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#5B321E",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#5B321E",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#CDAD78",
    },
    "&:hover fieldset": {
      borderColor: "#5B321E",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#5B321E",
    },
  },
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
  height: 62,
}));

// const dummyData = [
//   {
//     donationApplyId: 1,
//     productName: "휴지",
//     totalCount: 100,
//     productInfo: "브랜드는 상관 없습니다.",
//     finishCount: 30,
//     deliveryCount: 30,
//     percent: 70,
//   },
//   {
//     donationApplyId: 1,
//     productName: "물티슈",
//     totalCount: 50,
//     productInfo: "브랜드는 상관 없습니다.",
//     finishCount: 30,
//     deliveryCount: 10,
//     percent: 70,
//   },
//   {
//     donationApplyId: 1,
//     productName: "감자",
//     totalCount: 26,
//     productInfo: "브랜드는 상관 없습니다.",
//     finishCount: 11,
//     deliveryCount: 5,
//     percent: 70,
//   },
//   {
//     donationApplyId: 1,
//     productName: "라면",
//     totalCount: 500,
//     productInfo: "맵지 않은 제품으로 부탁드립니다.",
//     finishCount: 30,
//     deliveryCount: 200,
//     percent: 70,
//   },
//   {
//     donationApplyId: 1,
//     productName: "치킨",
//     totalCount: 10,
//     productInfo: "브랜드는 상관 없습니다.",
//     finishCount: 2,
//     deliveryCount: 4,
//     percent: 70,
//   },
//   {
//     donationApplyId: 1,
//     productName: "치즈",
//     totalCount: 50,
//     productInfo: "브랜드는 상관 없습니다.",
//     finishCount: 30,
//     deliveryCount: 10,
//     percent: 70,
//   },
// ];

const DonationOrgDetail: FC = () => {
  const router = useRouter();

  // console.log("라우터 쿼리는", router.query.id);
  const [loading, setLoading] = useState<boolean>(false);
  const [donationDetails, setDonationDetails] = useState<any>(null);

  useEffect(() => {
    if (router.isReady) {
      donationDetail(router.query.id).then((res) => {
        setDonationDetails(res.data.donation);
        setLoading(true);
        console.log(donationDetails);
      });
    }
  }, [router.isReady]);

  return (
    <>
      {loading ? (
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
                mb: 4,
                bgcolor: "#FCF8F0",
                borderRadius: 1.25,
                // height: "350px",
              }}
            >
              <Grid container>
                <Grid sx={{ mr: 2 }}>
                  <div
                    style={{
                      borderRadius: "5px",
                      overflow: "hidden",
                      marginTop: "6px",
                    }}
                  >
                    <Image
                      src={testImage}
                      alt="orgImage"
                      width="150px"
                      height="150px"
                    />
                  </div>
                </Grid>
                <Grid>
                  <Typography sx={{ mt: 0.5 }} variant="h6" fontWeight="bold">
                    복지관 이름
                  </Typography>
                  <Grid
                    sx={{ mt: 2 }}
                    container
                    direction="row"
                    alignItems="center"
                  >
                    <BusinessIcon sx={{ mr: 2 }} />
                    <Typography align="center">복지관 주소</Typography>
                  </Grid>
                  <Grid
                    sx={{ mt: 2 }}
                    container
                    direction="row"
                    alignItems="center"
                  >
                    <CallIcon sx={{ mr: 2 }} />
                    <Typography align="center">010-7777-7777</Typography>
                  </Grid>
                  <Grid
                    sx={{ mt: 2 }}
                    container
                    direction="row"
                    alignItems="center"
                  >
                    <MailIcon sx={{ mr: 2 }} />
                    <Typography align="center">test@gmail.com</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Stack
                justifyContent="space-between"
                direction="row"
                sx={{ mt: 1.5, mb: 3 }}
                alignItems="center"
              >
                <Typography variant="h4" fontWeight="bold" sx={{ mt: 3 }}>
                  {donationDetails.title}
                </Typography>
                <Link href="/donation">
                  <CustomButton
                    variant="contained"
                    size="small"
                    sx={{ width: 30 }}
                  >
                    목록
                  </CustomButton>
                </Link>
              </Stack>
              {/* 게시글 이미지 */}
              <Stack direction="row" justifyContent="center" spacing={5}>
                {donationDetails.images.map((item) => (
                  <div
                    style={{
                      // borderRadius: "5px",
                      overflow: "hidden",
                      height: "200px",
                    }}
                  >
                    <Image
                      src={item}
                      alt="orgImage"
                      width="200px"
                      height="200px"
                    />
                  </div>
                ))}
              </Stack>
              <Stack>
                <Box
                  sx={{
                    mt: 2,
                    bgcolor: "#f5e1be",
                    borderRadius: 1.25,
                    // height: "120px",
                  }}
                  minHeight="120px"
                >
                  <Typography sx={{ p: 2, mt: 0 }}>
                    {donationDetails.content}
                  </Typography>
                </Box>
              </Stack>
              <Stack
                justifyContent="space-between"
                direction="row"
                sx={{ mt: 1.5, mb: 3 }}
                alignItems="center"
              >
                <Stack direction="row">
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 3, mr: 2 }}
                  >
                    종료일
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 3 }}>
                    {donationDetails.endDate}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 3, mr: 2 }}
                  >
                    작성일
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 3 }}>
                    {donationDetails.createDate.substr(0, 10)}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                justifyContent="space-between"
                direction="row"
                sx={{ mt: 1.5, mb: 3 }}
                alignItems="center"
              >
                <Stack direction="row" alignItems="center">
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ mt: 3, mr: 2 }}
                  >
                    기부 물품
                  </Typography>
                  {/* <Typography variant="h6" sx={{ mt: 3 }}>
                    총 9명의 회원이 기부했습니다.
                  </Typography> */}
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Stack
                    sx={{
                      width: 300,
                      height: 10,
                    }}
                    direction="row"
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        borderRadius: 1.25,
                        width: 80,
                        height: 25,
                        bgcolor: "#CDAD78",
                      }}
                    ></Box>
                    <Typography sx={{ fontSize: 13, width: 40, ml: 1 }}>
                      완료
                    </Typography>
                    <Box
                      sx={{
                        borderRadius: 1.25,
                        width: 80,
                        height: 25,
                        bgcolor: "#FCE2A6",
                      }}
                    ></Box>
                    <Typography sx={{ fontSize: 13, width: 60, ml: 1 }}>
                      배송 중
                    </Typography>
                    <Box
                      sx={{
                        borderRadius: 1.25,
                        width: 80,
                        height: 25,
                        bgcolor: "#dbd5ca",
                      }}
                    ></Box>
                    <Typography sx={{ fontSize: 13, width: 40, ml: 1 }}>
                      대기
                    </Typography>
                  </Stack>
                  <CustomButton2 sx={{ height: "30px", ml: 5 }}>
                    유통기한 가이드
                  </CustomButton2>
                </Stack>
              </Stack>
              <TableContainer component={Paper} sx={{ mt: 5 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                        물품명
                      </StyledTableCell>
                      <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                        상세 설명
                      </StyledTableCell>
                      <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                        진행률
                      </StyledTableCell>
                      <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                        구매 링크
                      </StyledTableCell>
                      <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                        기부 신청
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {donationDetails.products.map((data) => (
                      <StyledTableRow key={data.donationApplyId}>
                        <StyledTableCell align="center">
                          {data.productName}
                        </StyledTableCell>
                        <StyledTableCell align="center" sx={{ width: 400 }}>
                          {data.productInfo}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Stack
                            sx={{
                              width: 300,
                            }}
                            direction="row"
                            alignItems="center"
                          >
                            {data.finishCount === 0 ? null : (
                              <Stack
                                direction="column"
                                sx={{
                                  width: `${
                                    (data.finishCount / data.totalCount) * 100
                                  }%`,
                                }}
                              >
                                <Box
                                  sx={{
                                    borderTopLeftRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    height: 25,
                                    bgcolor: "#CDAD78",
                                  }}
                                  justifyContent="center"
                                  flexDirection="column"
                                  display="flex"
                                ></Box>
                                <Typography sx={{ fontSize: 11 }}>
                                  {(
                                    (data.finishCount / data.totalCount) *
                                    100
                                  ).toFixed()}
                                  %
                                </Typography>
                              </Stack>
                            )}
                            {data.deliveryCount === 0 ? null : (
                              <Stack
                                direction="column"
                                sx={{
                                  width: `${
                                    (data.deliveryCount / data.totalCount) * 100
                                  }%`,
                                }}
                              >
                                <Box
                                  sx={{
                                    height: 25,
                                    bgcolor: "#FCE2A6",
                                  }}
                                  justifyContent="center"
                                  flexDirection="column"
                                  display="flex"
                                ></Box>
                                <Typography sx={{ fontSize: 11 }}>
                                  {(
                                    (data.deliveryCount / data.totalCount) *
                                    100
                                  ).toFixed()}
                                  %
                                </Typography>
                              </Stack>
                            )}
                            {data.finishCount === 0 &&
                            data.deliveryCount !== 0 ? (
                              <Stack
                                direction="column"
                                sx={{
                                  width: `${
                                    (data.deliveryCount / data.totalCount) * 100
                                  }%`,
                                }}
                              >
                                <Box
                                  sx={{
                                    borderTopLeftRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    height: 25,
                                    bgcolor: "#FCE2A6",
                                  }}
                                  justifyContent="center"
                                  flexDirection="column"
                                  display="flex"
                                ></Box>
                                <Typography sx={{ fontSize: 11 }}>
                                  {(
                                    (data.deliveryCount / data.totalCount) *
                                    100
                                  ).toFixed()}
                                  %
                                </Typography>
                              </Stack>
                            ) : null}
                            {data.totalCount -
                              data.deliveryCount -
                              data.finishCount !==
                              0 && data.finishCount !== 0 ? (
                              <Stack
                                direction="column"
                                sx={{
                                  width: `${
                                    ((data.totalCount -
                                      data.deliveryCount -
                                      data.finishCount) /
                                      data.totalCount) *
                                    100
                                  }%`,
                                }}
                              >
                                <Box
                                  sx={{
                                    borderTopRightRadius: 5,
                                    borderBottomRightRadius: 5,
                                    height: 25,
                                    bgcolor: "#dbd5ca",
                                  }}
                                  justifyContent="center"
                                  flexDirection="column"
                                  display="flex"
                                ></Box>
                                <Typography sx={{ fontSize: 11 }}>
                                  {(
                                    ((data.totalCount -
                                      data.deliveryCount -
                                      data.finishCount) /
                                      data.totalCount) *
                                    100
                                  ).toFixed()}
                                  %
                                </Typography>
                              </Stack>
                            ) : null}
                            {data.totalCount -
                              data.deliveryCount -
                              data.finishCount !==
                              0 &&
                            data.finishCount === 0 &&
                            data.deliveryCount === 0 ? (
                              <Stack
                                direction="column"
                                sx={{
                                  width: `${
                                    ((data.totalCount -
                                      data.deliveryCount -
                                      data.finishCount) /
                                      data.totalCount) *
                                    100
                                  }%`,
                                }}
                              >
                                <Box
                                  sx={{
                                    borderTopLeftRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    borderBottomRightRadius: 5,
                                    height: 25,
                                    bgcolor: "#dbd5ca",
                                  }}
                                  justifyContent="center"
                                  flexDirection="column"
                                  display="flex"
                                ></Box>
                                <Typography sx={{ fontSize: 11 }}>
                                  {(
                                    ((data.totalCount -
                                      data.deliveryCount -
                                      data.finishCount) /
                                      data.totalCount) *
                                    100
                                  ).toFixed()}
                                  %
                                </Typography>
                              </Stack>
                            ) : null}
                            <Typography
                              align="center"
                              sx={{ ml: 1, fontSize: 14, width: 50 }}
                            >
                              {data.finishCount}/{data.totalCount}
                            </Typography>
                          </Stack>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Tooltip
                            title="외부 쇼핑몰 사이트로 이동합니다."
                            placement="top-end"
                          >
                            <Button
                              onClick={() =>
                                window.open(
                                  `https://search.shopping.naver.com/search/all?where=all&frm=NVSCTAB&query=${data.productName}`,
                                  "_blank"
                                )
                              }
                            >
                              <InsertLinkIcon
                                sx={{
                                  color: "#5B321E",
                                }}
                              />
                            </Button>
                          </Tooltip>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <FormGroup row>
                            <TextField
                              // type="number"
                              size="small"
                              sx={{ width: 60 }}
                              style={{ backgroundColor: "#ffffff" }}
                            />
                            <CustomButton3
                              style={{
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                              }}
                            >
                              신청
                            </CustomButton3>
                          </FormGroup>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Divider color="#CDAD78" sx={{ my: 4, borderBottomWidth: 5 }} />
              <Typography variant="h5" fontWeight="bold" sx={{ mx: 5 }}>
                댓글 10
              </Typography>
              <Stack
                justifyContent="space-between"
                direction="row"
                sx={{ mt: 1.5, mb: 3, mx: 5 }}
                alignItems="center"
              >
                <CssTextField
                  sx={{ backgroundColor: "#ffffff", width: 1000 }}
                  size="small"
                />
                <CustomButton
                  variant="contained"
                  size="small"
                  sx={{ width: 30 }}
                >
                  등록
                </CustomButton>
              </Stack>
            </Container>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default DonationOrgDetail;
