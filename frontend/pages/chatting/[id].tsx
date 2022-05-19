import {
  getUserInfo,
  getChatroomList,
  getRoomId,
  createRoom,
} from "function/axios";
import { FC, useState, useEffect, useRef } from "react";
import { getNewsList } from "function/axios";
import Pagination from "@/components/Pagination";
import {
  Box,
  Grid,
  Tab,
  Typography,
  Stack,
  Button,
  InputBase,
  Paper,
  Tabs,
  ThemeProvider,
  CssBaseline,
  TextField,
} from "@mui/material/";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from "@mui/material/";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import volunteer1 from "../public/images/volunteer1.jpg";
import userDefaultImage from "../../public/images/userDefaultImage.png";
import { useRouter } from "next/router";
// import "../../styles/scroll.css";

// 채팅 컴포넌트
import ChatRoomList from "@/components/chat/ChatRoomList";
import ChatBubble from "@/components/chat/ChatBubble";

const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#5B321E",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#5B321E",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#CDAD78",
    },
    "&:hover fieldset": {
      borderColor: "#5B321E",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#5B321E",
    },
  },
});

const Chatting: FC = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({});
  const [oppUser, setOppUser] = useState({});
  const [chatroomList, setChatroomList] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [roomId, setRoomId] = useState(0);
  const [memberId, setMemberId] = useState<any>("");
  const [token, setToken] = useState("");

  const theme = createTheme({
    typography: {
      // fontFamily: "Gowun Dodum",
      // fontFamily: "Noto Serif KR",
      fontFamily: "Noto Sans KR",
    },
    palette: {
      primary: {
        main: "#5B321E",
      },
    },
  });

  useEffect(() => {
    setMemberId(localStorage.getItem("id"));
    setToken(localStorage.getItem("token"));
    console.log("id : " + memberId + " token : " + token);
    if (router.isReady && Number(router.query.id) !== 0) {
      const oppMemberId = Number(router.query.id);
      getUserInfo(oppMemberId)
        .then((res) => {
          console.log(res);
          setOppUser(res.data);
        })
        .then(() => {
          getRoomId(oppMemberId, memberId).then((res) => {
            console.log(res);
            if (res.status === 204) {
              //방을 새로 만들어야할 때
              createRoom(oppMemberId, memberId);
            } else {
              console.log(res.data.chatroomId);
              setRoomId(res.data.chatroomId);
              getChatroomList(memberId).then((res) => {
                console.log(res);
                setChatroomList(res.data);
              });
            }
          });
        });
    }
  }, [router.isReady]);
  const createMessageRoom = (chatroomId, oppUserId, oppNickname) => {
    setRoomId(chatroomId);
    setOppUser({ oppUserId: oppUserId, oppNickname: oppNickname });
    console.log(roomId);
  };
  // useEffect(() => {
  //   getNewsList(params).then((res) => {
  //     setChatroomList(res.data.news);
  //     // console.log("data는", reviewList);
  //     setLoading(true);
  //   });
  // }, []);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [chatroomList, setChatroomList] = useState<any>(null);

  const scrollRef = useRef();

  // const router = useRouter();

  const messageBoxRef = useRef<HTMLUListElement>();

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  // 현재 보고 있는 유저의 memberId
  const [userId, setUserId] = useState<any>(null);

  const myId = 1000;

  // 채팅 인풋
  const [chatInput, setChatInput] = useState<any>("");

  const onChangeChatInput = useEffect(() => {
    if (router.isReady) {
      setUserId(router.query.id);
    }
  }, [router.isReady]);

  const dummyChatList = [
    {
      name: "김나영",
      lastMessage: "인생",
      memberId: 1,
    },
    {
      name: "이다예",
      lastMessage: "ㅋㅋ",
      memberId: 2,
    },
    {
      name: "이제민",
      lastMessage: "ㅎㅎ",
      memberId: 3,
    },
    {
      name: "최다운",
      lastMessage: "ㅋㅋ",
      memberId: 4,
    },
    {
      name: "이명원",
      lastMessage: "채팅채팅",
      memberId: 100,
    },
  ];

  const dummyChat = [
    {
      name: "이명원",
      message: "채팅채팅",
      time: "12:22",
      memberId: 100,
    },
    {
      name: "김나영",
      message: "채팅채팅",
      time: "12:22",
      memberId: 1000,
    },
    {
      name: "이명원",
      message: "채팅채팅",
      time: "12:22",
      memberId: 100,
    },
    {
      name: "이명원",
      message: "채팅채팅",
      time: "12:22",
      memberId: 100,
    },
    {
      name: "이명원",
      message: "채팅채팅",
      time: "12:22",
      memberId: 100,
    },
    {
      name: "이명원",
      message: "채팅채팅",
      time: "12:22",
      memberId: 100,
    },
    {
      name: "이명원",
      message: "채팅채팅",
      time: "12:22",
      memberId: 100,
    },
    {
      name: "이명원",
      message: "채팅채팅",
      time: "12:22",
      memberId: 100,
    },
    {
      name: "이명원",
      message: "채팅채팅",
      time: "12:22",
      memberId: 100,
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // height: "100vh",
            overflow: "auto",
            // mt: 10,
            mb: 20,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              sx={{ my: 5 }}
              textAlign="center"
              variant="h4"
              fontWeight="bold"
            >
              @@@님과의 채팅방
            </Typography>
            <Stack direction="row" spacing={20} justifyContent="center">
              <Stack>
                <Stack>
                  <Box
                    className="scroolBar"
                    // ref={scrollRef}
                    sx={{
                      bgcolor: "#FCF8F0",
                      height: "600px",
                      width: "400px",
                      overflowY: "scroll",
                      overflowX: "hidden",
                    }}
                  >
                    {/* 채팅방 목록 표시 부분 */}
                    <Stack>
                      {dummyChatList &&
                        dummyChatList.map((item, i) => (
                          <ChatRoomList chatList={item} key={i} />
                        ))}
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
              <Stack>
                <Stack>
                  <Box
                    sx={{
                      bgcolor: "#FCF8F0",
                      height: "600px",
                      width: "600px",
                    }}
                  >
                    {/* /chatting/0 이라면 */}
                    {/* {userId == 0 ? (
                    <Typography
                      sx={{ mt: 10, ml: 20 }}
                      fontWeight="bold"
                      variant="h5"
                    >
                      대화 상대를 선택해주세요.
                    </Typography>
                  ) : (
                    <Typography>zz</Typography>
                  )} */}

                    {/* 말풍선 출력 부분 */}
                    <Stack
                      className="scroolBar"
                      ref={messageBoxRef}
                      sx={{ height: "520px", overflowY: "scroll" }}
                    >
                      {dummyChat &&
                        dummyChat.map((item, i) => (
                          <ChatBubble chat={item} key={i} myId={myId} />
                        ))}
                    </Stack>
                    {/* 입력창 */}
                    <Stack
                      justifyContent="center"
                      direction="row"
                      sx={{ mt: 1.5, mx: 5 }}
                      alignItems="center"
                      spacing={3}
                    >
                      <CssTextField
                        sx={{ backgroundColor: "#ffffff", width: 400 }}
                        size="small"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                      />
                      <CustomButton
                        variant="contained"
                        size="small"
                        sx={{ width: 30, height: 35 }}
                        // onClick={handleComment}
                      >
                        등록
                      </CustomButton>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Chatting;
