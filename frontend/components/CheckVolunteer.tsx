import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Container,
  Stack,
  Typography,
  CssBaseline,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TableBody,
  Paper,
  Table,
  Button,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { FC, useState, useEffect } from "react";

// api
import { endInquiry } from "function/axios";

const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const CustomButton2 = styled(Button)({
  color: "#5B321E",
  border: "2px solid #5B321E",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#FCE2A6",
    color: "#5B321E",
  },
});

// const IsFact = ({ fact }) => {
//   if (fact === 0) {
//     return (
//       <>
//         <CustomButton sx={{ width: 40, height: 30, mr: 2 }}>참석</CustomButton>
//         <CustomButton2 sx={{ width: 40, height: 30 }}>불참</CustomButton2>
//       </>
//     );
//   } else if (fact === 1) {
//     return (
//       <>
//         <Typography>참석</Typography>
//       </>
//     );
//   } else if (fact === 2) {
//     return (
//       <>
//         <Typography>불참</Typography>
//       </>
//     );
//   }
// };

interface ICheckVolunteer {
  fact: any;
  token: any;
  id: any;
  userId: any;
  getData: any;
  volStatus: boolean;
}

const CheckVolunteer: FC<ICheckVolunteer> = ({
  userId,
  fact,
  token,
  id,
  getData,
  volStatus,
}) => {
  const onClickSubmit1 = () => {
    const status = 1;
    endInquiry(userId, token, id, status)
      .then((res) => {
        console.log("봉사 상태 변경 성공");
        getData(!volStatus);
      })
      .catch((err) => console.error(err));
  };

  const onClickSubmit2 = () => {
    const status = 2;
    endInquiry(userId, token, id, status)
      .then((res) => {
        console.log("봉사 상태 변경 성공");
        getData(!volStatus);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {fact === 0 ? (
        <>
          <CustomButton
            onClick={onClickSubmit1}
            sx={{ width: 40, height: 30, mr: 2 }}
          >
            참석
          </CustomButton>
          <CustomButton2
            onClick={onClickSubmit2}
            sx={{ width: 40, height: 30 }}
          >
            불참
          </CustomButton2>
        </>
      ) : null}
      {fact === 1 ? <Typography>참석</Typography> : null}
      {fact === 2 ? <Typography>불참</Typography> : null}
    </>
  );
};

export default CheckVolunteer;
