// 채팅방 목록의 1개 컴포넌트
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  CssBaseline,
  IconButton,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";

import userDefaultImage from "../../public/images/userDefaultImage.png";

interface IChatRoomList {
  chatList: any;
}

const ChatRoomList: FC<IChatRoomList> = ({ chatList }) => {
  const router = useRouter();
  const [hover, setHover] = useState<any>({ cursor: "pointer" });

  return (
    <>
      <Box
        sx={{
          bgcolor: "#f3e8d1",
          height: "70px",
          width: "380px",
          // mx: "auto",
          ml: 1.25,
          // mr: 4,
          my: 0.5,
          borderRadius: 1.25,
        }}
        style={hover}
        onMouseOver={() =>
          setHover({
            transform: "translateY(-5px)",
            boxShadow: "0 0 10px #5B321E",
            cursor: "pointer",
          })
        }
        onMouseOut={() => setHover({ cursor: "pointer" })}
        onClick={() => router.push(`/chatting/${chatList.memberId}`)}
      >
        <Stack direction="row" alignItems="center" sx={{ mt: 1 }} spacing={2}>
          <Stack sx={{ ml: 2 }}>
            <Image
              src={userDefaultImage}
              alt="userImage"
              width="50px"
              height="50px"
            />
          </Stack>
          <Stack>
            <Typography fontWeight="bold">{chatList.name}</Typography>
            <Typography>{chatList.lastMessage}</Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default ChatRoomList;
