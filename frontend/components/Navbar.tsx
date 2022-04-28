import react, { FC, ReactNode, useState } from 'react';
import { AppBar, Container, Toolbar, Typography, styled, Box, Stack, Link } from "@mui/material/";
import Image from 'next/image';
import logo from "../public/images/logo3.png";


export interface LoginProps {
  value?: any;
}

const ColorAppbar = styled(AppBar) ({
  backgroundColor: "#FFFFFF",
  color: "#000000",
  
});


const Navbar: FC<LoginProps> = ({ value }) => {
  const [ isLogin, setIsLogin ] = useState<boolean>(value);

  return (
    <ColorAppbar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", my : 2}} >
            <Link href="/" underline="none" color="inherit">
              <Image 
                src={logo}
                alt='logo'
                width={65}
                height={70}
              />
            </Link>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack direction="row">
              <Typography variant="h6" sx={{ mx: 2}}>
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
