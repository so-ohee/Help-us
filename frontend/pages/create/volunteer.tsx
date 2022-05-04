import { FC } from "react";
import { Box, Grid, Button, Typography, Stack, TextField, TextareaAutosize } from "@mui/material/";
import Image from 'next/image';
import Editor from '../../components/Editor';
import volunteer1 from "../../public/images/volunteer1.jpg";


const Volunteer: FC = () => {
  return (
  <div>
    <Grid container justifyContent="center" alignItems="center" >
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
          <Button variant="contained" href="/donation">
            목록으로
          </Button>
        </Box>
        <Box sx={{ fontWeight: 'bold', my: 5}}>
          <Typography variant="h4" textAlign="center">봉사</Typography>
        </Box>
        <Box sx={{ my : 3}}>
          <TextField fullWidth label="제목"  />
        </Box>
        <Editor />
      </Stack>
    </Grid>
  </div>
  );
};

export default Volunteer;
