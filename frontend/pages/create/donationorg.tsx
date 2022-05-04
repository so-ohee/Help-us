import { FC, useState } from "react";
import { Box, Grid, Button, Typography, Stack, TextField, TextareaAutosize } from "@mui/material/";
import Image from 'next/image';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Editor from '../../components/Editor';
import volunteer1 from "../../public/images/volunteer1.jpg";
import { Divider } from "@material-ui/core";


const DonationOrg: FC = () => {
  const [value, setValue] =useState<Date | null>(null);
  const [formValues, setFormValues] = useState([{name: "", count: "", explain: ""}]);

  const handleChange = (i, e) => {
    const newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues)
  }

  const addFormFields = () => {
    setFormValues([...formValues, { name: "", count: "", explain: ""}])
  }

  const removeFormFields = (i) => {
    const newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
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
              <Button variant="contained" href="/donation">
                목록으로
              </Button>
            </Box>
            <Box sx={{ fontWeight: 'bold', my: 5}}>
              <Typography variant="h4" textAlign="center">물품 기부</Typography>
            </Box>
            <Box maxWidth='100' sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <Button variant="outlined" >
                유통기한 가이드
              </Button>
            </Box>
            <Box sx={{ my : 3}}>
              <TextField fullWidth label="제목"  />
            </Box>
            <Editor />
            <Stack direction="row" sx={{ mt: 5, alignItems: 'center'}}>
              <Typography variant="h5" sx={{mr : 2, fontWeight: 'bold'}}>종료일</Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="날짜"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Stack>
            <Stack direction="row" sx={{mt : 5, mb: 2, justifyContent: 'space-between' }}>
              <Stack direction="row">
                <Box minWidth={220}>
                  <Typography variant="h5" sx={{fontWeight: 'bold'}}>품명</Typography>
                </Box>
                <Box minWidth={130}>
                  <Typography variant="h5" sx={{fontWeight: 'bold'}}>수량</Typography>
                </Box>
                <Box >
                  <Typography variant="h5" sx={{fontWeight: 'bold'}}>설명</Typography>
                </Box>
              </Stack>
              <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant="outlined" onClick={() => addFormFields()}>+</Button>
              </Box>
            </Stack>
            <Divider />
            <form  onSubmit={handleSubmit}>
              {formValues.map((element, index) => (
                <div className="form-inline" key={index}>
                  <Stack direction="row" sx={{mt :2}}>
                    <Box maxWidth={180}>
                      <TextField 
                      label="품명"
                      variant="outlined"
                      name="name"
                      value={element.name || ""}
                      onChange={e => handleChange(index, e)}
                      />
                    </Box>
                    <Box maxWidth={100} sx={{mx: 4}}>
                      <TextField 
                      label="수량"
                      variant="outlined"
                      name="count"
                      value={element.count || ""}
                      onChange={e => handleChange(index, e)}
                      />
                    </Box>
                    <Box >
                      <TextField 
                      label="설명"
                      variant="outlined"
                      sx={{ width: 800}}
                      name="explain"
                      value={element.explain || ""}
                      onChange={e => handleChange(index, e)}
                      />
                    </Box>
                    {
                      index ? 
                        <Button variant="outlined" sx={{ml : 1}} onClick={() => removeFormFields(index)}>삭제</Button> 
                      : null
                    }
                  </Stack>
                </div>
              ))}
          </form>
            <Box sx={{my: 5, display: 'flex', justifyContent: 'center'}}>
              <Button variant="contained" type="submit">등록하기</Button>
            </Box>
        </Stack>
      </Grid>
    </div>  
  );
};

export default DonationOrg;
