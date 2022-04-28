import { FC } from "react";
import Image from "next/image";
import orgDefaultImage from "../../public/images/orgDefaultImage.png";
import { useState } from "react";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const OrgPage: FC = () => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className="viewContainer">
      <Container>
        <Grid container>
          <Grid xs={3}>
            <Image
              src={orgDefaultImage}
              alt="orgImage"
              width="300px"
              height="300px"
            />
          </Grid>
          <Grid xs={8}>
            <Typography sx={{ mt: 2 }}>기관명 : 행복 복지관</Typography>
            <Typography sx={{ mt: 2 }}>
              기관 주소 : 경기도 수원시 팔달구 중부대로 222번길 22 2-22
            </Typography>
            <Typography sx={{ mt: 2 }}>기관 번호 : 010-7777-7777</Typography>
            <Typography sx={{ mt: 2 }}>기관 이메일 : test@gmail.com</Typography>
            <Typography sx={{ mt: 2 }}>
              기관 소개 : 아무래도 다시 돌아갈 순 없어 아무런 표정도 없이 이런
              말하는 그런 내가 잔인한가요 제발 내 마음 설레이게 자꾸만 바라보게
              하지 말아요 아무 일 없던 것처럼 그냥 스쳐지나갈 미련인 걸 알아요
              아무리 사랑한다 말했어도 다시 돌아올 수 없는 그 때 그 맘이
              부른다고 다시 오나요 아무래도 다시 돌아갈 순 없어 아무런 표정도
              없이 이런 말하는 그런 내가 잔인한가요
            </Typography>
          </Grid>
          <Grid xs={1}>
            <Button variant="contained">수정</Button>
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", mt: 5 }}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab label="기부" {...a11yProps(0)} />
            <Tab label="봉사" {...a11yProps(1)} />
            <Tab label="기부 후기" {...a11yProps(2)} />
            <Tab label="배송 현황" {...a11yProps(3)} />
            <Tab label="기부 현황" {...a11yProps(4)} />
            <Tab label="봉사 현황" {...a11yProps(5)} />
            <Tab label="문의 내역" {...a11yProps(6)} />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            Item Three
          </TabPanel>
        </Box>
        {/* <Typography variant="h4" sx={{ mt: 5 }}>
          배송 현황
        </Typography> */}
      </Container>
      <style jsx>
        {`
          .viewContainer {
            padding: 150px 200px;
            min-width: 1300px;
          }
        `}
      </style>
    </div>
  );
};

export default OrgPage;
