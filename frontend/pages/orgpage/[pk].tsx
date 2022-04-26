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

// interface TabPanelProps {
//   children?: React.ReactNode;
//   dir?: string;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

const OrgMypage: FC = () => {
  const [tabValue, setTabValue] = useState<string>("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
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
              기관 소개 : I don't know how I feel all day long 우리의 문제인지
              아님 내 문제인지 I don't know how to word my feeling 우리의
              문제인지 아님 내 문제인지 그때 내가 그렇게 굴었던 건 진심이 아녔어
              돌아서지 않을 줄 알았던 네게 나쁘게 한거야 너에게 자꾸 원치 않던
              말로 상처 주는 날 미워해도 좋아 사실 나의 맘은 그게 아냐 너를 아주
              원하고 있어 나도 모르겠는 날 너에게 물어 이런 저런 말들로 널
              떠보려는 거 알아 너가 듣고 싶어 하는 말을 지금은 못하지만
              기다려줬으면 해
            </Typography>
          </Grid>
          <Grid xs={1}>
            <Button variant="contained">수정</Button>
          </Grid>
        </Grid>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="물품" />
            <Tab value="two" label="봉사" />
            <Tab value="three" label="후기" />
          </Tabs>
        </Box>
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

export default OrgMypage;
