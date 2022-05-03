import OrgMypageSidebar from "@/components/OrgMypageSidebar";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
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
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { FC } from "react";

const mdTheme = createTheme();

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
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const dummyData = [
  {
    donationApplyId: 1,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
  },
  {
    donationApplyId: 2,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
  },
  {
    donationApplyId: 3,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
  },
  {
    donationApplyId: 4,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
  },
  {
    donationApplyId: 5,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
  },
  {
    donationApplyId: 6,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
  },
  {
    donationApplyId: 7,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
  },
  {
    donationApplyId: 8,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
  },
  {
    donationApplyId: 9,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
  },
  {
    donationApplyId: 10,
    title: "더미",
    memberID: 1,
    name: "콜리",
    productList: ["찐빵", "사이다"],
    donationDate: "2022-05-03",
    expressNum: 1234,
  },
];

const orgpageMyCheckDonation: FC = () => {
  return (
    <ThemeProvider theme={mdTheme}>
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
          <Container maxWidth="lg" sx={{}}>
            <Typography variant="h4">배송 현황</Typography>
            <TableContainer component={Paper} sx={{ mt: 5 }}>
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
                      물품 상세
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                      발송일
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                      빌송인
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                      송장 번호
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                      현황
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dummyData.map((data) => (
                    <StyledTableRow key={data.donationApplyId}>
                      <StyledTableCell align="center">
                        {data.donationApplyId}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.title}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.productList}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.donationDate}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.expressNum}
                      </StyledTableCell>
                      <StyledTableCell align="center">상태</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default orgpageMyCheckDonation;
