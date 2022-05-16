import { FC, useEffect, useState } from "react";
import Image from "next/image";
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
  FormGroup,
  Modal,
} from "@mui/material";

// api
import { applyDonationUser } from "function/axios";

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

const CustomButton3 = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,
  outline: "none",
});

interface IDonationInfo {
  donation: any;
  router: any;
  id: any;
  token: any;
  pId: any;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#e9e1d3",
  // border: "2px solid #000",
  borderRadius: 2,
  // boxShadow: 24,
  p: 2,
};

const DonationApply: FC<IDonationInfo> = ({
  donation,
  router,
  id,
  token,
  pId,
}) => {
  // 모달
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [applyCnt, setApplyCnt] = useState<any>("");

  const onChangeApplyCnt = (e) => {
    setApplyCnt(e.target.value);
  };

  const onClickApplyDonation = () => {
    const data = {
      donationId: router,
      donationProductId: pId,
      count: applyCnt,
    };

    if (applyCnt <= 0) {
      alert("기부 수량은 1개 이상입니다.");
      return;
    } else if (applyCnt > donation.totalCount) {
      alert("기부 수량은 총 수량을 초과할 수 없습니다.");
      return;
    }

    // console.log(donation);
    applyDonationUser(id, token, data)
      .then((res) => {
        console.log("기부신청 성공");
        setOpen(true);
        setApplyCnt("");
        console.log(donation);
      })
      .catch((err) => console.error(err));
    console.log(data, id, token);
  };

  return (
    <>
      <FormGroup row>
        <TextField
          size="small"
          value={applyCnt}
          sx={{ width: 60 }}
          style={{ backgroundColor: "#ffffff" }}
          onChange={onChangeApplyCnt}
        />
        <CustomButton3
          style={{
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          onClick={onClickApplyDonation}
        >
          신청
        </CustomButton3>
      </FormGroup>
      <Stack justifyContent="center">
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Stack justifyContent="center" alignItems="center">
              <Typography textAlign="center" sx={{ mb: 1 }}>
                진행률은 송장 번호 입력 후 반영됩니다.
              </Typography>
              <CustomButton onClick={handleClose} sx={{ width: 80 }}>
                확인
              </CustomButton>
            </Stack>
          </Box>
        </Modal>
      </Stack>
    </>
  );
};

export default DonationApply;
