import react, { useState } from 'react';
import type { NextPage } from "next";
import { Box, Grid, Tab, Typography, Stack } from "@mui/material/";
import {TabContext, TabList, TabPanel} from '@mui/lab/';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Card from "../components/card";
import volunteer1 from "../public/images/volunteer1.jpg";



const Home: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Box textAlign="center" sx={{ mt: 5, mb : 10}}>
          <Image 
            src= {volunteer1}
            alt="volunteer first"
            width={1200}
            height={200}
          />
        </Box>
        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="물품" value="1" />
                <Tab label="봉사" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Box sx={{ mt: 3 }}>
                <Stack direction="row">
                  <Card/>
                  <Card/>
                </Stack>
                <Stack direction="row">
                  <Card/>
                  <Card/>
                </Stack>
                <Stack direction="row">
                  <Card/>
                  <Card/>
                </Stack>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <Box sx={{ width: 1000, height: 300, backgroundColor: "#616161", mx: "auto", mt : 3}}> 
                <Typography variant="h3" sx={{ fontWeight: "bold"}}> 지도</Typography>
              </Box>
              <Box sx={{ mt: 3 }}>
              <Stack direction="row">
                  <Card/>
                  <Card/>
                </Stack>
                <Stack direction="row">
                  <Card/>
                  <Card/>
                </Stack>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
        <Box>
          <Box sx={{ width: 1200, height: 130, backgroundColor: "#FCE2A6", mx: 7, my : 3}}>
            <Typography>

            </Typography>
          </Box>
        </Box>
      </Grid>



    </div>
  );
};

export default Home;
