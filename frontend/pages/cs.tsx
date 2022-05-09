import { FC, useState } from "react";
import { Box, Grid, Tab, Typography, Stack, Button, InputBase, Paper, Tabs } from "@mui/material/";
import {TabContext, TabList, TabPanel} from '@mui/lab/';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material/";
import { styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
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
  view: string,
) {
  return { num, title, writer, date, view };
}

const rows =[
  createData(1, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07', '공개'),
  createData(2, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07', '공개'),
  createData(3, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07', '비공개'),
  createData(4, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07', '공개'),
  createData(5, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07', '비공개'),
  createData(6, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07', '공개'),
  createData(7, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07', '공개'),
  createData(8, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07', '비공개'),
  createData(9, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07', '비공개'),
  createData(10, '###복지관 운동회 후기입니다!', '@@@복지관', '22-05-07', '비공개'),
]


const CsMain: FC = () => {
  const [value, setValue] = useState('1');

  const tabHandleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
            <Typography variant="h4" textAlign="center">게시판</Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <CustomButton variant="contained" href="create/cs">글 작성</CustomButton>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'flex-end', mt : 1}}>
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
          <TabContext value={value}>
            <Stack>
              <Tabs onChange={tabHandleChange}>
                <Tab label="문의" value="1" />
                <Tab label="정보 수정" value="2" />
                <Tab label="신고" value="3" />
                <Tab label="도움이 필요합니다" value="4" />
              </Tabs>
              <TabPanel value="1">
              {/* <TableContainer component={Paper} sx={{ my : 5}}> */}
                <Table sx={{ minWidth: 1000 }} >
                  <TableHead>
                    <TableRow >
                      <TableCell align="center" sx={{fontWeight: 'bold'}}>번호</TableCell>
                      <TableCell align="center" sx={{fontWeight: 'bold'}}>제목</TableCell>
                      <TableCell align="center" sx={{fontWeight: 'bold'}}>작성자</TableCell>
                      <TableCell align="center" sx={{fontWeight: 'bold'}}>작성일</TableCell>
                      <TableCell align="center" sx={{fontWeight: 'bold'}}>공개 여부</TableCell>
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
                        <TableCell align="center">{row.view}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              {/* </TableContainer> */}
              </TabPanel>
              <TabPanel value="2"></TabPanel>
              <TabPanel value="3"></TabPanel>
              <TabPanel value="4"></TabPanel>
              <TabPanel value="5"></TabPanel>
            </Stack>
          </TabContext>
        </Stack>
      </Grid>
    </div>
  );
};

export default CsMain;
