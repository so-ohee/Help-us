import { FC } from "react";
import { Box, Grid, Typography, Stack, Button, InputBase, Paper } from "@mui/material/";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material/";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { styled } from "@mui/material/styles";
import volunteer1 from "../public/images/volunteer1.jpg";


const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

function createData(
  num: number,
  title: string,
  writer: string,
  date: string,
) {
  return { num, title, writer, date };
}

const rows = [
  createData(1, '코딩 기초 재능기부합니다.', 'lee', '22-05-07'),
  createData(2, '코딩 기초 재능기부합니다.', 'lee', '22-05-07'),
  createData(3, '코딩 기초 재능기부합니다.', 'lee', '22-05-07'),
  createData(4, '코딩 기초 재능기부합니다.', 'lee', '22-05-07'),
  createData(5, '코딩 기초 재능기부합니다.', 'lee', '22-05-07'),
  createData(6, '코딩 기초 재능기부합니다.', 'lee', '22-05-07'),
  createData(7, '코딩 기초 재능기부합니다.', 'lee', '22-05-07'),
  createData(8, '코딩 기초 재능기부합니다.', 'lee', '22-05-07'),
  createData(9, '코딩 기초 재능기부합니다.', 'lee', '22-05-07'),
  createData(10, '코딩 기초 재능기부합니다.', 'lee', '22-05-07'),
];


const Share: FC = () => {
  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
      <Stack>
        <Box textAlign="center" >
          <Image 
            src= {volunteer1}
            alt="volunteer first"
            width={1200}
            height={200}
          />
        </Box>
        <Box sx={{ fontWeight: 'bold', my: 5}}>
          <Typography variant="h4" textAlign="center">재능 기부 목록</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
          <CustomButton variant="contained">재능 기부 등록</CustomButton>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt : 2}}>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="검색"
            />
            <IconButton type="submit" sx={{ p: '10px' }} >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        <TableContainer component={Paper} sx={{ my : 5}}>
          <Table sx={{ minWidth: 650 }} >
            <TableHead>
              <TableRow>
                <TableCell align="center">번호</TableCell>
                <TableCell align="center">제목</TableCell>
                <TableCell align="center">작성자</TableCell>
                <TableCell align="center">작성일</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.num}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.num}
                  </TableCell>
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">{row.writer}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      </Grid>
    </div>
  );
};

export default Share;
