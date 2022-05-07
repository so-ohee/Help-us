import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Box, Grid, Tab, Typography, Stack, Button, InputLabel, MenuItem, FormControl, Tabs } from "@mui/material/";
import {TabContext, TabList, TabPanel} from '@mui/lab/';
import Image from 'next/image';
import { styled } from "@mui/material/styles";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import DonationCard from "../components/DonationCard";
import VolunteerCard from "../components/VolunteerCard";
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

const Donation: FC = () => {
  const theme = createTheme({
    typography: {
      // fontFamily: "Gowun Dodum",
      // fontFamily: "Noto Serif KR",
      fontFamily: "Noto Sans KR",
    },
    palette: {
      primary: {
        main: '#5B321E',
      },
    },
  });

  const router = useRouter();
  const [ value, setValue ] = useState('1');
  const [ option, setOption ] = useState('');

  const tabHandleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const optionHandleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center">
        <Box textAlign="center" >
          <Image 
            src= {volunteer1}
            alt="volunteer first"
            width={1200}
            height={200}
          />
        </Box>
        <Box >
          <TabContext value={value}>
            <Stack direction="row" justifyContent="space-between" >
              <Tabs
                value={value} 
                onChange={tabHandleChange}
                textColor="primary"
                indicatorColor="primary"
                >
                <Tab label="물품" value="1" />
                <Tab label="봉사" value="2" />
              </Tabs>
                <Box sx={{ minWidth: 200, display: 'flex', justifyContent: 'flex-end'}}>
                  <FormControl fullWidth >
                    <InputLabel>정렬</InputLabel>
                    <Select
                      value={option}
                      label="option"
                      onChange={optionHandleChange}
                    >
                      <MenuItem value="latest">최신순</MenuItem>
                      <MenuItem value="high">달성률 높은 순</MenuItem>
                      <MenuItem value="low">달성률 낮은 순</MenuItem>
                      <MenuItem value="endDate">종료일 순</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
            </Stack>
            {/* 로그인시 등록 버튼 */}
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end'}}>
              <Button variant="contained" sx={{mr: 3}} href="create/donationorg">기부 등록</Button>
              <Button variant="contained" href="create/volunteer">봉사 등록</Button>
            </Box>
            <TabPanel value="1">
              <Box sx={{ mt: 2 }}>
                <Stack direction="row" spacing={5} sx={{mb : 5}}>
                  <DonationCard/>
                  <DonationCard/>
                </Stack>
                <Stack direction="row" spacing={5} sx={{mb : 5}}>
                  <DonationCard/>
                  <DonationCard/>
                </Stack>
                <Stack direction="row" spacing={5} sx={{mb : 5}}>
                  <DonationCard/>
                  <DonationCard/>
                </Stack>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <Box sx={{ mt: 3 }}>
              <Stack direction="row" spacing={5} sx={{mb : 5}}>
                  <VolunteerCard/>
                  <VolunteerCard/>
                </Stack>
                <Stack direction="row" spacing={5} sx={{mb : 5}}>
                  <VolunteerCard/>
                  <VolunteerCard/>
                </Stack>
                <Stack direction="row" spacing={5} sx={{mb : 5}}>
                  <VolunteerCard/>
                  <VolunteerCard/>
                </Stack>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
        <Box>
          <Box sx={{ width: 1200, height: 130, backgroundColor: "#FCE2A6", mx: 7, mt: 3, mb: 10}}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <Stack>
                <Typography variant="h6" sx={{fontWeight: 'bold', mt: 3, mb : 2}}>
                  이달의 후원 참여 인원
                </Typography>
                {/* 인원 넣기 */}
                <Typography variant="h6" sx={{fontWeight: 'bold', mb : 2}}>
                  이달의 봉사 참여 인원
                </Typography>
                {/* 인원 넣기 */}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default Donation;
