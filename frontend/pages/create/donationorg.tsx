import { FC, useEffect, useState } from "react";
import axios from 'axios';
import dayjs from "dayjs";
import Image from "next/image";
import { Box, Grid, Button, Typography, Stack, TextField, Input } from "@mui/material/";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Divider } from "@material-ui/core";
import { createDonation } from "../../function/axios";
import Logo from "../../public/images/logo4.png";


const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const OutlinedButton = styled(Button)({
  border: "1px solid #5B321E",
  color: "#5B321E"
})

const DonationOrg: FC = (props, ) => {
  if (typeof window == 'undefined') return null
  const theme = createTheme({
    typography: {
      // fontFamily: "Gowun Dodum",
      // fontFamily: "Noto Serif KR",
      fontFamily: "Noto Sans KR",
    },
    palette: {
      primary: {
        main: '#5B321E',
      },
    },
  });
 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [ image, setImage ] = useState({image_file: [], preview_URL: Logo,});
  const [ imageList, setImageList ] = useState([]);
  const [endDate, setEndDate] = useState('');
  const [formValues, setFormValues] = useState([{productName: "", totalCount: 0, explain: ""}]);
  const [loaded, setLoaded] = useState(false);
  const [ id, setId ] = useState<any>(0);
  let inputRef: any;

  // 물품 수량 설명 form 설정
  const handleChange = (i, e) => {
    console.log(e.target.value)
    const newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    // console.log(newFormValues)
    setFormValues(newFormValues)
  }

  // 물품 input칸 추가
  const addFormFields = () => {
    setFormValues([...formValues, { productName: "", totalCount: 0, explain: ""}])
  }
  // 물품 input칸 삭제
  const removeFormFields = (i) => {
    const newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  // 이미지 업로드
  const onChangeImage = (e) => {
    const file = e.target.files[0];
    e.preventDefault();
    let fileReader = new FileReader();
    let filesInArr = Array.from(e.target.files);

      if (e.target.files[0]) {
        fileReader.readAsDataURL(e.target.files[0]);
      }
      let new_image;
      fileReader.onload = () => {
        new_image = fileReader.result;
        setImage({
          image_file: filesInArr,
          preview_URL: new_image,
        });
        setLoaded(true);
      };
      try {
        console.log(image)
      } catch (err) {
        console.log("Error uploading file: ", err);
      } 
  }

  // 물품 기부 등록 
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(formValues));
    const formData = new FormData();
    image?.image_file.map((eachfile) => formData.append("path", eachfile));
    console.log(formData)

    const id = localStorage.getItem("id")

    const donation = {
      "title" : title,
      "content" : content,
      "endDate" : endDate,
      "products" : formValues
    }
    const files = formData;
    createDonation(id, donation, files)
      .then(res=> console.log(res + '성공'))
      .catch(err => console.log(err + '실패'))
  }

  useEffect(() => {
    const Id = localStorage.getItem("id")
    setId(Id)
  }, [id])


  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center">
        <Stack >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <CustomButton variant="contained" href="/donation">
                목록으로
              </CustomButton>
            </Box>
            <Box sx={{ fontWeight: 'bold', my: 5}}>
              <Typography variant="h4" textAlign="center">물품 기부</Typography>
            </Box>
            <Box maxWidth='100' sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <OutlinedButton variant="outlined" >
                유통기한 가이드
              </OutlinedButton>
            </Box>
              <Box sx={{ my : 3}}>
                <TextField fullWidth label="제목" onChange={e => setTitle(e.target.value)} />
              </Box>
              <TextField 
                fullWidth
                multiline
                minRows={15}
                placeholder="내용"
                onChange={e => setContent(e.target.value)}
              />
              <Stack direction="row" sx={{my: 2, display: 'flex', justifyContent: 'space-between'}}>
                <input 
                  type="file" 
                  id="chooseFile" 
                  accept="image/*" 
                  ref={(refParam) => (inputRef = refParam)}
                  onChange={onChangeImage} 
                  style={{ display: 'none' }}
                />
                <Box width={220} height={220} sx={{backgroundColor: '#FCF8F0', cursor: "pointer" }}>
                {loaded === false || loaded === true ? (
                  <Image 
                    src={image.preview_URL}
                    alt="이미지"
                    width="220"
                    height="220"
                    onClick={() => inputRef.click()}
                  />
                  // <image onClick={() => inputRef.click()}>{imagePreview}</image>
                ) : (
                  <span>이미지를 불러오는 중입니다.</span>
                )}
                </Box>
              </Stack>
              <Stack direction="row" sx={{ mt: 5, alignItems: 'center'}}>
                <Typography variant="h5" sx={{mr : 2, fontWeight: 'bold'}}>종료일</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="날짜"
                    value={endDate}
                    inputFormat={"yyyy-MM-dd"}
                    mask={"____-__-__"}
                    onChange={(date) => {
                      setEndDate(dayjs(date).format("YYYY-MM-DD"));
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
                  <OutlinedButton variant="outlined" onClick={() => addFormFields()}>+</OutlinedButton>
                </Box>
              </Stack>
              <Divider />
              <form>
                {formValues.map((element, index) => (
                  <div className="form-inline" key={index}>
                    <Stack direction="row" sx={{mt :2}}>
                      <Box maxWidth={180}>
                        <TextField 
                        label="품명"
                        variant="outlined"
                        name="productName"
                        value={element.productName || ""}
                        onChange={e => handleChange(index, e)}
                        />
                      </Box>
                      <Box maxWidth={100} sx={{mx: 4}}>
                        <TextField 
                        label="수량"
                        variant="outlined"
                        name="totalCount"
                        value={element.totalCount || ''}
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
                          <OutlinedButton variant="outlined" sx={{ml : 1}} onClick={() => removeFormFields(index)}>삭제</OutlinedButton> 
                        : null
                      }
                    </Stack>
                  </div>
                ))}
            </form>
              <Box sx={{my: 5, display: 'flex', justifyContent: 'center'}}>
                <CustomButton size="large" variant="contained" type="submit" onSubmit={handleSubmit}>등록하기</CustomButton>
              </Box>
        </Stack>
      </Grid>
    </ThemeProvider>  
  );
};

export default DonationOrg;
