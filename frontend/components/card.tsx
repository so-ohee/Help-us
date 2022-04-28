import { FC } from "react";
import {Box, Typography, Stack} from "@mui/material";
import Image from "next/image"
import Card from "../public/images/orgDefaultImage.png"
import { padding } from "@mui/system";

const DefaultCard: FC = () => {
  return (
    <div>
      <Box sx={{ 
        borderRadius: "10px",
        boxShadow: "0 0 5px #cfd4d1",
        overflow: "hidden",
        width: 500,
        height: 300,
        padding : 2,
        mx : 3,
        my : 3,
      }}>
        <Stack direction="row">
          <Image 
            width="500"
            height="500"
            src={Card}
            alt = "org default image"
          />
          <Box sx={{mx : 1, mt : 3}}>
            <Stack direction="row">
              <Typography sx={{ mb : 1, fontWeight: "bold"}}>제목 : </Typography>
              <Typography>운동회를 합니다!!</Typography>
            </Stack>
              <Typography sx={{fontWeight: "bold"}}>내용</Typography>
              <Typography sx={{ mb : 1}}>저희 복지관에서 운동회를 하는데 봉사하실 분이 필요합니다!!</Typography>
            <Stack direction="row">
              <Typography sx={{ mb : 1, fontWeight: "bold"}}>봉사 위치 : </Typography>
              <Typography>인천광역시</Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ mb : 1, fontWeight: "bold"}}>봉사 수 : </Typography>
              <Typography>10명</Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ mb : 1, fontWeight: "bold"}}>기관명 : </Typography>
              <Typography>##복지관</Typography>
            </Stack>

          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default DefaultCard;
