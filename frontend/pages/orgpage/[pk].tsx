import { FC } from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
  CssBaseline,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import DonationCardOrg from "@/components/DonationCardOrg";
import DonationCardOrgFinish from "@/components/DonationCardOrgFinish";
import ReviewCard from "@/components/ReviewCard";

import TestImage from "../../public/images/testImage.jpg";
import { useRouter } from "next/router";
import { getUserInfo } from "function/axios";
import defaultImage from "../../public/images/defaultImage.png";

const UpdateButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
  // width: "50px",
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    // maxWidth: 40,
    width: 100,
    backgroundColor: "#CDAD78",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "#8a867e",
  "&.Mui-selected": {
    color: "#CDAD78",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const OrgPage: FC = () => {
  const router = useRouter();

  const [myInfo, setMyInfo] = useState<any>(null);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (router.isReady) {
      // console.log(router.query.pk)
      getUserInfo(router.query.pk)
      .then(res => {
        // console.log(res)
        setMyInfo(res.data)
        if (res.data.role === 'ORG_WAIT' || res.data.role === 'ORG'){
          // console.log('--')
        }else{
          // console.log('no')
          location.href="/"
        }
      })
      .catch(() => location.href="/")
      }
  }, [router.isReady]);

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
          <Grid container spacing={2} minHeight="350px">
            <Grid item xs={3}>
              <div
                style={{
                  borderRadius: "3%",
                  overflow: "hidden",
                  marginTop: "6px",
                  // height: "300px",
                }}
              >
                {/* <Image
                  src={TestImage}
                  alt="orgImage"
                  width="300px"
                  height="300px"
                /> */}
                {myInfo !== null ? 
                (
                  myInfo.profile === null ? (
                    <Image
                      src={defaultImage}
                      alt="orgImage"
                      width="300px"
                      height="300px"
                    />
                  ) : (
                    <Image
                      src={myInfo.profile}
                      alt="orgImage"
                      width="300px"
                      height="300px"
                    />
                  )
                ) : null
              }
              </div>
            </Grid>

            { myInfo ? 
            (
              <>
                <Grid item xs={9}>
              <Typography sx={{ mt: 0 }} variant="h4" fontWeight="bold">
                {myInfo.name}
              </Typography>
              <Grid
                sx={{ mt: 2 }}
                container
                direction="row"
                alignItems="center"
              >
                <BusinessIcon sx={{ mr: 2 }} />
                <Typography align="center">
                  {myInfo.address}
                </Typography>
              </Grid>
              <Grid
                sx={{ mt: 2 }}
                container
                direction="row"
                alignItems="center"
              >
                <CallIcon sx={{ mr: 2 }} />
                <Typography align="center">{myInfo.tel}</Typography>
              </Grid>
              <Grid
                sx={{ mt: 2 }}
                container
                direction="row"
                alignItems="center"
              >
                <MailIcon sx={{ mr: 2 }} />
                <Typography align="center">{myInfo.email}</Typography>
              </Grid>
              <Box
                sx={{
                  bgcolor: "#f5e1be",
                  borderRadius: 1.25,
                  // height: "120px",
                }}
                minHeight="120px"
              >
                <Typography sx={{ p: 2, mt: 1 }}>
                  {myInfo.info}
                </Typography>
              </Box>
            </Grid>
              
              

              
              </>

            ) : null
            }
            {/* <Grid item xs={9}>
              <Typography sx={{ mt: 0 }} variant="h4" fontWeight="bold">
                {/* {myInfo.address}
              </Typography>
              <Grid
                sx={{ mt: 2 }}
                container
                direction="row"
                alignItems="center"
              >
                <BusinessIcon sx={{ mr: 2 }} />
                <Typography align="center">
                  경기도 수원시 팔달구 중부대로 222번길 22 2-22
                </Typography>
              </Grid>
              <Grid
                sx={{ mt: 2 }}
                container
                direction="row"
                alignItems="center"
              >
                <CallIcon sx={{ mr: 2 }} />
                <Typography align="center">010-7777-7777</Typography>
              </Grid>
              <Grid
                sx={{ mt: 2 }}
                container
                direction="row"
                alignItems="center"
              >
                <MailIcon sx={{ mr: 2 }} />
                <Typography align="center">test@gmail.com</Typography>
              </Grid>
              <Box
                sx={{
                  bgcolor: "#f5e1be",
                  borderRadius: 1.25,
                  // height: "120px",
                }}
                minHeight="120px"
              >
                <Typography sx={{ p: 2, mt: 1 }}>
                  아무래도 다시 돌아갈 순 없어 아무런 표정도 없이 이런 말하는
                  그런 내가 잔인한가요 제발 내 마음 설레이게 자꾸만 바라보게
                  하지 말아요 아무 일 없던 것처럼 그냥 스쳐지나갈 미련인 걸
                  알아요 아무리 사랑한다 말했어도 다시 돌아올 수 없는 그 때 그
                  맘이 부른다고 다시 오나요 아무래도 다시 돌아갈 순 없어 아무런
                  표정도 없이 이런 말하는 그런 내가 잔인한가요
                </Typography>
              </Box>
            </Grid> */}
          </Grid>
          <Box sx={{ width: "100%", mt: 2 }}>
            <Box sx={{ bgcolor: "#FCF8F0", borderRadius: 1.25 }}>
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example"
              >
                <StyledTab
                  sx={{ fontWeight: "bold" }}
                  label="기부"
                  {...a11yProps(0)}
                />
                <StyledTab
                  sx={{ fontWeight: "bold" }}
                  label="봉사"
                  {...a11yProps(1)}
                />
                <StyledTab
                  sx={{ fontWeight: "bold" }}
                  label="후기"
                  {...a11yProps(2)}
                />
              </StyledTabs>
              {/* <Box sx={{ p: 3 }} /> */}
              {/* <TabPanel value={value} index={0}>
                <div>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, 500px)",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                      rowGap: 5,
                      columnGap: 10,
                    }}
                  >
                    <DonationCardOrg />
                    <DonationCardOrg />
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, 500px)",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                      rowGap: 5,
                      columnGap: 10,
                    }}
                  >
                    <DonationCardOrg />
                    <DonationCardOrg />
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, 500px)",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                      rowGap: 5,
                      columnGap: 10,
                    }}
                  >
                    <DonationCardOrg />
                    <DonationCardOrg />
                  </Box>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, 500px)",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                      rowGap: 5,
                      columnGap: 10,
                    }}
                  >
                    <DonationCardOrgFinish />
                    <DonationCardOrgFinish />
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, 500px)",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                      rowGap: 5,
                      columnGap: 10,
                    }}
                  >
                    <DonationCardOrgFinish />
                    <DonationCardOrgFinish />
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, 500px)",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                      rowGap: 5,
                      columnGap: 10,
                    }}
                  >
                    <DonationCardOrgFinish />
                    <DonationCardOrgFinish />
                  </Box>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, 500px)",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                      rowGap: 5,
                      columnGap: 10,
                    }}
                  >
                    <ReviewCard />
                    <ReviewCard />
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, 500px)",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                      rowGap: 5,
                      columnGap: 10,
                    }}
                  >
                    <ReviewCard />
                    <ReviewCard />
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, 500px)",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                      rowGap: 5,
                      columnGap: 10,
                    }}
                  >
                    <ReviewCard />
                    <ReviewCard />
                  </Box>
                </div>
              </TabPanel> */}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default OrgPage;
