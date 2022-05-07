import { FC } from "react";
import { Box, Grid, Tab, Typography, Stack, Button, InputBase, Paper } from "@mui/material/";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material/";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import volunteer1 from "../public/images/volunteer1.jpg";

function createData(
  num: number,
  title: string,
  writer: string,
  date: string,
) {
  return { num, title, writer, date };
}

const rows =[
  createData(1, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07'),
  createData(2, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07'),
  createData(3, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07'),
  createData(4, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07'),
  createData(5, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07'),
  createData(6, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07'),
  createData(7, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07'),
  createData(8, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07'),
  createData(9, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07'),
  createData(10, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07'),
]


const Review: FC = () => {
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
          <Typography variant="h4" textAlign="center">후기</Typography>
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

export default Review;
