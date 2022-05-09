import { FC } from "react";
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

import testImage from "../../../public/images/testImage.jpg";
import goodImage from "../../../public/images/good.jpg";

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

const dummyData = [
  {
    donationApplyId: 1,
    productName: "휴지",
    totalCount: 100,
    productInfo: "브랜드는 상관 없습니다.",
    finishCount: 30,
    deliveryCount: 30,
    percent: 70,
  },
  {
    donationApplyId: 1,
    productName: "물티슈",
    totalCount: 50,
    productInfo: "브랜드는 상관 없습니다.",
    finishCount: 30,
    deliveryCount: 10,
    percent: 70,
  },
  {
    donationApplyId: 1,
    productName: "감자",
    totalCount: 26,
    productInfo: "브랜드는 상관 없습니다.",
    finishCount: 11,
    deliveryCount: 5,
    percent: 70,
  },
  {
    donationApplyId: 1,
    productName: "라면",
    totalCount: 500,
    productInfo: "맵지 않은 제품으로 부탁드립니다.",
    finishCount: 30,
    deliveryCount: 200,
    percent: 70,
  },
  {
    donationApplyId: 1,
    productName: "치킨",
    totalCount: 10,
    productInfo: "브랜드는 상관 없습니다.",
    finishCount: 2,
    deliveryCount: 4,
    percent: 70,
  },
  {
    donationApplyId: 1,
    productName: "치즈",
    totalCount: 50,
    productInfo: "브랜드는 상관 없습니다.",
    finishCount: 30,
    deliveryCount: 10,
    percent: 70,
  },
];

const TalentDetail: FC = () => {
  const imageList = [testImage, testImage, testImage, testImage, testImage];

  return (
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
                  src={goodImage}
                  alt="orgImage"
                  width="125px"
                  height="125px"
                />
              </div>
            </Grid>
            <Grid>
              <Typography sx={{ mt: 2.5 }} variant="h6" fontWeight="bold">
                이다예
              </Typography>
              <Grid
                sx={{ mt: 2 }}
                container
                direction="row"
                alignItems="center"
              >
                <MailIcon sx={{ mr: 1 }} />
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
              운동회를 위한 기부가 필요합니다.
            </Typography>
            <CustomButton variant="contained" size="small" sx={{ width: 30 }}>
              목록
            </CustomButton>
          </Stack>
          {/* 게시글 이미지 */}
          <Stack direction="row" justifyContent="center" spacing={5}>
            {imageList.map((item) => (
              <div
                style={{
                  // borderRadius: "5px",
                  overflow: "hidden",
                  height: "200px",
                }}
              >
                <Image src={item} alt="orgImage" width="200px" height="200px" />
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
                바람을 타고 날아오르는 새들은 걱정없이 아름다운 태양속으로
                음표가 되어 나네 향기나는 연필로 쓴 일기처럼 숨겨두었던 마음
                기댈수 있는 어깨가 있어 비가 와도 젖지 않아 어제의 일들은 잊어
                누구나 조금씩은 틀려 완벽한 사람은 없어 실수투성이고 외로운 나를
                봐 난 다시 태어난 것만 같아 그대를 만나고부터 그대 나의 초라한
                마음을 받아준 순간부터 랄랄랄랄랄 하루 하루 조금씩 나아질거야
                그대가 지켜보니 힘을 내야지 행복해져야지 뒷뜰에 핀 꽃들처럼
                점심을 함께 먹어야지 새로 연 그 가게에서 새 샴푸를 사러가야지
                아침 하늘빛의 민트 향이면 어떨까 난 다시 꿈을 꾸게 되었어 그대를
                만나고부터 그대 나의 초라한 마음을 받아준 순간부터 월요일도
                화요일도 봄에도 겨울에도 해가 질 무렵에도 비둘기를 안은 아이같이
                행복해줘 나를 위해서 난 다시 태어난 것만 같아 그대를 만나고부터
                그대 나의 초라한 마음을 받아준 순간부터 난 다시 꿈을 꾸게 되었어
                그대를 만나고부터 그대 나의 초라한 마음을 받아준 순간부터
                랄랄랄랄랄 랄랄랄랄랄랄랄 랄랄랄랄랄 랄랄랄랄랄랄랄 우
                랄랄랄랄랄 랄랄랄랄랄랄랄랄랄 우
              </Typography>
            </Box>
          </Stack>
          <Typography
            sx={{ mt: 2 }}
            variant="h6"
            fontWeight="bold"
            textAlign="right"
          >
            작성일 2022-05-09
          </Typography>
          <Divider color="#CDAD78" sx={{ my: 2, borderBottomWidth: 5 }} />
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
            <CustomButton variant="contained" size="small" sx={{ width: 30 }}>
              등록
            </CustomButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default TalentDetail;
