import { FC, useState } from "react";
import { Box, Grid, Button, Typography, Stack, InputLabel, MenuItem, FormControl, TextField } from "@mui/material/";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Image from 'next/image';
import { CKEditor } from 'ckeditor4-react';
import { styled } from "@mui/material/styles";
import volunteer1 from "../../public/images/volunteer1.jpg";


const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const Cs: FC = () => {
  const [ option, setOption ] = useState('');

  const optionHandleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  }

  

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Stack>
        <Box textAlign="center" >
              <Image 
                src= {volunteer1}
                alt="volunteer first"
                width={1200}
                height={200}
              />
          </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <CustomButton variant="contained" href="/donation">
                목록으로
              </CustomButton>
            </Box>
            <Box sx={{ fontWeight: 'bold', my: 5}}>
              <Typography variant="h4" textAlign="center">물품 기부</Typography>
            </Box>
            <Box sx={{ maxWidth: 200, display: 'flex', justifyContent: 'flex-start'}}>
              <FormControl fullWidth>
                <InputLabel>정렬</InputLabel>
                <Select
                  value={option}
                  label="option"
                  onChange={optionHandleChange}
                >
                  <MenuItem value="inquiry">문의</MenuItem>
                  <MenuItem value="update">정보 수정</MenuItem>
                  <MenuItem value="report">신고</MenuItem>
                  <MenuItem value="help">도움이 필요합니다</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            <Box sx={{ my : 3}}>
              <TextField fullWidth label="제목"  />
            </Box>
            
            {/* <CKEditor
              initData={<p>내용 :</p>}
            /> */}
        <Box sx={{my: 5, display: 'flex', justifyContent: 'center'}}>
          <CustomButton size="large" variant="contained" type="submit">등록하기</CustomButton>
        </Box>
        </Stack>
      </Grid>
    </div>
  );
};

export default Cs;
