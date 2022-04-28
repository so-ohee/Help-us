import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import Link from "next/link";
import { useRouter } from "next/router";
import { menuItemClasses, Typography } from "@mui/material";
import { bgcolor } from "@mui/system";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const data1 = [
  {
    icon: <VolunteerActivismIcon />,
    label: "물품 후원",
    path: "/orgpage/my/donation",
  },
  {
    icon: <EmojiPeopleIcon />,
    label: "봉사",
    path: "/orgpage/my/volunteer",
  },
  { icon: <RateReviewIcon />, label: "기부 후기", path: "/orgpage/my/review" },
  { icon: <LiveHelpIcon />, label: "문의 내역", path: "/orgpage/my/cs" },
];

const data2 = [
  {
    icon: <VolunteerActivismIcon />,
    label: "물품 기부",
    path: "/orgpage/my/checkdonation",
  },
  {
    icon: <EmojiPeopleIcon />,
    label: "봉사",
    path: "/orgpage/my/checkvolunteer",
  },
  {
    icon: <LocalShippingIcon />,
    label: "배송",
    path: "/orgpage/my/checkdelivery",
  },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function OrgMypageSidebar() {
  const pathName = useRouter().pathname;

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "#000000" },
            background: { paper: "#F6EAC4" },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 240 }}>
          <FireNav component="nav" disablePadding>
            {/* <Divider /> */}
            <Link href={"/orgpage/my"}>
              <ListItem
                component="div"
                disablePadding
                sx={{ backgroundColor: "#F8DD8E" }}
              >
                <ListItemButton sx={{ height: 56 }}>
                  <ListItemIcon>
                    <Home color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="마이페이지"
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "body2",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <Box
              sx={{
                bgcolor: "#F6EAC4",
                pb: 2,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: 0,
                  color: "#000000",
                  "&:hover, &:focus": {
                    "& svg": { opacity: 1 },
                    // bgcolor: "#F8DD8E",
                  },
                }}
              >
                <ListItemText
                  primary="내가 올린 글"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                    color: "#000000",
                  }}
                  secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: "rgba(0,0,0,0)",
                  }}
                  sx={{ my: 0 }}
                />
              </ListItemButton>
              {data1.map((item) => (
                <Link href={item.path} key={item.path}>
                  <ListItemButton
                    sx={{
                      py: 0,
                      minHeight: 32,
                      color: "#000000",
                      "&:hover, &:focus": {
                        "& svg": { opacity: 1 },
                        bgcolor: "#F8DD8E",
                      },
                      bgcolor: pathName === item.path ? "#F8DD8E" : "#F6EAC4",
                    }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                </Link>
              ))}
            </Box>
            <Box
              sx={{
                bgcolor: "#F6EAC4",
                pb: 2,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: 0,
                  color: "#000000",
                  "&:hover, &:focus": {
                    "& svg": { opacity: 1 },
                    // bgcolor: "#F8DD8E",
                  },
                }}
              >
                <ListItemText
                  primary="현황 조회"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                    color: "#000000",
                  }}
                  secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: "rgba(0,0,0,0)",
                  }}
                  sx={{ my: 0 }}
                />
              </ListItemButton>
              {data2.map((item) => (
                <Link href={item.path} key={item.path}>
                  <ListItemButton
                    key={item.path}
                    sx={{
                      py: 0,
                      minHeight: 32,
                      color: "#000000",
                      "&:hover, &:focus": {
                        "& svg": { opacity: 1 },
                        bgcolor: "#F8DD8E",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                </Link>
              ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
