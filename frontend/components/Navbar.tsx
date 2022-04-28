import react, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  styled,
  Box,
  Stack,
  Link,
} from "@mui/material/";

const ColorAppbar = styled(AppBar)({
  backgroundColor: "#FFBC39",
  color: "in",
});

export interface LoginProps {
  value: boolean;
}

const Navbar = ({ value }) => {
  const [isLogin, setIsLogin] = useState<boolean>(value);

  return (
    <ColorAppbar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex" }}>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link href="/" underline="none" color="inherit">
              HELP:US
            </Link>
          </Typography>

          <Box>
            <Stack direction="row" justifyContent="center">
              <Typography variant="h6" sx={{ mx: 2 }}>
                <Link href="#" underline="none" color="inherit">
                  후원하기
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ mx: 2 }}>
                <Link href="#" underline="none" color="inherit">
                  나눔하기
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </ColorAppbar>
  );
};

export default Navbar;
