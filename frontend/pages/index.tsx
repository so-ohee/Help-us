import react, { useState } from 'react';
import type { NextPage } from "next";
import { Box, Tab } from "@mui/material/";
import {TabContext, TabList, TabPanel} from '@mui/lab/';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import volunteer1 from "../public/images/volunteer1.jpg";

import { useRouter } from "next/router";


const Home: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box textAlign="center" sx={{ mt: 5, mb : 10}}>
        <Image 
          src= {volunteer1}
          alt="volunteer first"
          width={1200}
          height={170}
        />
      </Box>
      <Box xs={{width : 1000}}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="물품" value="1" />
            <Tab label="봉사" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">물품 기부 목록</TabPanel>
        <TabPanel value="2">봉사 목록</TabPanel>
      </TabContext>
    </Box>



    </div>
  );
};

export default Home;
