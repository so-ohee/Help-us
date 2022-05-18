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
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TableBody,
  Paper,
  TextField,
  Table,
} from "@mui/material";

import { CommentData } from "../interfaces";
import defaultImage from "../public/images/userDefaultImage.png";
import ReplyIcon from "@mui/icons-material/Reply";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/router";
import CommentInput from "./CommentInput2";

// api
import {reviewCommentDelete, volunteerCommentList} from "function/axios";

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

const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
  fontSize: 12,
});

const CustomButton2 = styled(Button)({
  color: "#5B321E",
  border: "2px solid #5B321E",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#FCE2A6",
    color: "#5B321E",
  },
  fontSize: 12,
});

const Comment2: FC<CommentData> = ({ comment, id, token }) => {
  const [inputStatus, setInputStatus] = useState<boolean>(false);
  const [userId, setUserId] = useState<any>();
  const router = useRouter();

  const onClickInputStatus = () => {
    setInputStatus(!inputStatus);
  };



  // console.log(comment)
  //댓글 삭제
  const removeComment = () => {
    const commentId = comment.commentId
    const memberId = comment.memberId
      // console.log(userId)
      reviewCommentDelete(commentId, memberId, id, token)
        .then((res) => console.log("성공" + res ))
        .catch((err) => console.log("실패" + err))
  }

  useEffect(() => {
    const Id = localStorage.getItem("id");
    setUserId(Id)
  }, [id])

  return (
    <>
      <>
        {comment.parentId === null ? (
          <>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ ml: 5, mb: 1 }}
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center">
                <Image
                  src={defaultImage}
                  alt="프로필 이미지"
                  width="40px"
                  height="40px"
                />
                  {/* <Link href={`/userpage/${comment.memberId}`} > */}
                    <Typography sx={{ fontSize: 18, ml: 1, cursor: 'pointer' }} fontWeight="bold" >
                      {comment.name}
                    </Typography>
                  {/* </Link> */}
                <Typography sx={{ ml: 1 }}>{comment.content}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Button
                  onClick={onClickInputStatus}
                  sx={{ color: "#807c7c", fontSize: 12 }}
                >
                  답글쓰기
                </Button>
                {comment ? (
                  <Typography>
                      {comment.createDate}
                  </Typography>
                ) : (null)}
                {/* id랑  memberId랑 같으면 삭제 버튼 활성화*/}
                {userId == comment.memberId ? (
                  <Button
                    onClick={removeComment}
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ width: 10, mr: 5, ml: 2 }}
                  
                  >
                    삭제
                  </Button>
                ) : null}
              </Stack>
            </Stack>
            <Stack direction="row" sx={{ ml: 11, mb: 2 }} alignItems="center">
              <CommentInput inputStatus={inputStatus} comment={comment} />
            </Stack>
          </>
        ) : (
          <>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ ml: 10, mb: 1 }}
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center">
                <Image
                  src={defaultImage}
                  alt="프로필 이미지"
                  width="40px"
                  height="40px"
                />
                {/* <Link href={`/userpage/${comment.memberId}`}> */}
                  <Typography sx={{ fontSize: 18, ml: 1 }} fontWeight="bold">
                    {comment.name}
                  </Typography>
                {/* </Link> */}
                {/* <Link href={`/userpage/${comment.memberId}`}> */}
                  <Typography
                    sx={{ ml: 1, color: "#3470ca", fontSize: 14 }}
                    fontWeight="bold"
                  >
                    {comment.parentName}
                  </Typography>
                {/* </Link> */}
                <Typography sx={{ ml: 1 }}>{comment.content}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Button
                  onClick={onClickInputStatus}
                  sx={{ color: "#807c7c", fontSize: 12 }}
                >
                  답글쓰기
                </Button>
                {comment ? (
                  <Typography>{comment.createDate}</Typography>
                ) : (null)}
                {userId == comment.memberId ? (
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ width: 10, mr: 5, ml: 2 }}
                    onClick={removeComment}
                  >
                    삭제
                  </Button>
                ) : null}
              </Stack>
            </Stack>
            <Stack direction="row" sx={{ ml: 16, mb: 2 }} alignItems="center">
              <CommentInput inputStatus={inputStatus} comment={comment}/>
            </Stack>
          </>
        )}
      </>
      {/* <Stack
        direction="row"
        alignItems="center"
        sx={{ ml: 5, mb: 1 }}
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center">
          <Image
            src={defaultImage}
            alt="프로필 이미지"
            width="40px"
            height="40px"
          />
          <Typography sx={{ fontSize: 18, ml: 1 }} fontWeight="bold">
            {comment.name}
          </Typography>
          <Typography sx={{ ml: 1 }}>{comment.content}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Button>
            <KeyboardArrowDownIcon sx={{ color: "#000000" }} />
          </Button>
          <Typography>{comment.createDate.substr(0, 10)}</Typography>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{ width: 10, mr: 5, ml: 2 }}
          >
            삭제
          </Button>
        </Stack>
      </Stack> */}
    </>
  );
};

export default Comment2;
