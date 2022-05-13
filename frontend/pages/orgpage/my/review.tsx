import { FC } from "react";
import OrgMypageSidebar from "../../../components/OrgMypageSidebar";
import Image from "next/image";
import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
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
  IconButton,
  Toolbar,
  Divider,
  List,
} from "@mui/material";
import helpImage from "../../../public/images/help.png";

import DonationCardOrg from "../../../components/DonationCardOrg";
import DonationCard from "../../../components/DonationCard";
import ReviewCard from "../../../components/ReviewCard";
import DonationCardOrgReview from "@/components/DonationCardOrgReview";

const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
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
          <Typography component={"span"}>{children}</Typography>
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

const orgpageMyReview: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
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
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h4">기부 후기</Typography>
            <CustomButton>글 작성</CustomButton>
          </Stack>
          <Grid>
            <Box sx={{ width: "100%", mt: 2 }}>
              <Box sx={{ bgcolor: "#FCF8F0", borderRadius: 1.25 }}>
                <StyledTabs
                  value={value}
                  onChange={handleChange}
                  aria-label="styled tabs example"
                >
                  <StyledTab
                    sx={{ fontWeight: "bold" }}
                    label="미작성"
                    {...a11yProps(0)}
                  />
                  <StyledTab
                    sx={{ fontWeight: "bold" }}
                    label="작성"
                    {...a11yProps(1)}
                  />
                </StyledTabs>
                {/* <Box sx={{ p: 3 }} /> */}
                <TabPanel value={value} index={0}>
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
                      <DonationCardOrgReview />
                      <DonationCardOrgReview />
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
                      <DonationCardOrgReview />
                      <DonationCardOrgReview />
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
                      <DonationCardOrgReview />
                      <DonationCardOrgReview />
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
                </TabPanel>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default orgpageMyReview;
