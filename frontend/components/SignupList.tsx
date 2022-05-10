import { useState, useEffect } from 'react';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { OCR } from "../function/axios";


const SignupList = () => {
    const numRegex = /\d{3}-\d{2}-\d{5}/g
    const imgUrl = 
    // "http://img1.bizhows.com/bhfile01/__CM_FILE_DATA/202104/15/14/2438331_1618465806169.jpg"
    "https://www.draps.co.kr/app/dubu_board/docs/imgs/f/sm_f15967052034313_lg_i15942817778905_%ED%9A%8C%EC%9B%90%EC%A6%9D_0000_%EC%84%B8%EA%B8%88%EA%B3%84%EC%82%B0%EC%84%9C%EC%9A%A9_%EC%82%AC%EC%97%85%EC%9E%90%EB%93%B1%EB%A1%9D%EC%A6%9D_%EB%93%9C%EB%A6%BC%EC%97%90%EC%9D%B4%ED%94%BC%EC%97%90%EC%8A%A4.jpg"
    // "https://beautifulfund.org/bf/files/common/img/business_license.jpg"
    // 'http://aircurt.cafe24.com/default/img/contents/img_01.gif'
    const [step, setStep] = useState<string>('ing')
    const [num, setNum] = useState('')
    const [msg, setMsg] = useState('')
    const [myMsg, setMyMsg] = useState('')
    const [code, setCode] = useState('')
 
    // 다이얼로그
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);

        // ocr

        OCR(imgUrl)
        .then(res => {
            for (var i = 0; i < res.data.images[0].fields.length; i++) {
                if (res.data.images[0].fields[i].inferText.match(numRegex)) {
                    setCode(res.data.images[0].fields[i].inferText.match(numRegex)[0])
                    axios.post('https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=vl6BtUPxAdH%2B8i7%2BYzrw9O%2B%2BL22Wxl591V%2BofSgRDIWQCzZrtPYVNJ8%2FzYbqAc%2BNngCsQOLYKuRTl0GZCJoXmQ%3D%3D', {
                        "b_no": [res.data.images[0].fields[i].inferText.match(numRegex)[0].replace(/-/g,'')]
                    })
                    .then(res => {
                        setMyMsg(res.data.data[0].b_stt +' '+ res.data.data[0].tax_type)
                    })
                    .catch(err => console.log(err))

                    setStep('success')
                    break;
                }
                else if (i+1 === res.data.images[0].fields.length ) { // 사업자등록번호 못 찾은 경우,
                    setStep('failed')
                }
            }
        })
        .catch(err => {
            console.log(err)
            setStep('failed')
        }
        )
        
    };
    const handleClose = () => {
      setOpen(false);
      setNum('')
      setMsg('')
      setStep('ing')
      setMyMsg('')
    };


    const onKeyPress = (e) => {
        if (e.key === 'Enter'){
            checkNum()
        }
    }



    // 사업자등록번호 조회
    const checkNum = () => {
        const num2 = num.replace(/-/g,'')
        axios.post('https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=vl6BtUPxAdH%2B8i7%2BYzrw9O%2B%2BL22Wxl591V%2BofSgRDIWQCzZrtPYVNJ8%2FzYbqAc%2BNngCsQOLYKuRTl0GZCJoXmQ%3D%3D', {
            "b_no": [num2]
        })
        .then(res => {
            // console.log(res.data.data[0])
            setMsg(res.data.data[0].b_stt +' '+ res.data.data[0].tax_type)
        })
        .catch(err => console.log(err))

    }



    // 자동 하이픈
    const autoHypenPhone = (str) => {
        str = str.replace(/[^0-9]/g, '');
        var tmp = '';
        if( str.length < 4){
            return str;
        }else if(str.length < 6){
            tmp += str.substr(0, 3);
            tmp += '-';
            tmp += str.substr(3);
            return tmp;
        }else if(str.length < 11){
            tmp += str.substr(0, 3);
            tmp += '-';
            tmp += str.substr(3, 2);
            tmp += '-';
            tmp += str.substr(5);
            return tmp;
        }else{              
            tmp += str.substr(0, 3);
            tmp += '-';
            tmp += str.substr(3, 2);
            tmp += '-';
            tmp += str.substr(5);
            return tmp;
        }
        return str;
        }
        useEffect(() => {
        setNum(autoHypenPhone(num))
        }, [num])


    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 600 }}>
            <TableHead>
                <TableRow>
                <TableCell sx={{ width: 70 }} align="center">번호</TableCell>
                <TableCell>기관명</TableCell>
                <TableCell sx={{ width: 180 }}>날짜</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell>
                    <span                     
                        style={{cursor:'pointer'}}
                        onClick={handleClickOpen}
                    >
                        싸피재단
                    </span>
                </TableCell>
                <TableCell>2022-05-04 11:20</TableCell>
                </TableRow>

                <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell>
                    <span                     
                        style={{cursor:'pointer'}}
                        onClick={handleClickOpen}
                    >
                        싸피재단
                    </span>
                </TableCell>
                <TableCell>2022-05-04 11:20</TableCell>
                </TableRow>

                <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell>
                    <span                     
                        style={{cursor:'pointer'}}
                        onClick={handleClickOpen}
                    >
                        싸피재단
                    </span>
                </TableCell>
                <TableCell>2022-05-04 11:20</TableCell>
                </TableRow>

            </TableBody>
            </Table>
        </TableContainer>

        <Dialog
            open={open}
            // onClose={handleClose}
            // aria-labelledby="alert-dialog-title"
            // aria-describedby="alert-dialog-description"
        >
            <DialogTitle style={{fontWeight:'bold'}}>
                싸피재단
            </DialogTitle>
            <DialogContent>
                <DialogContentText style={{fontSize:'18px'}}>
                    연락처 : 02-1234-1234
                </DialogContentText>
                <DialogContentText style={{fontSize:'18px'}}>
                    이메일 : ssafy@ssafy.com
                </DialogContentText>
                <DialogContentText style={{fontSize:'18px'}}>
                    주 &nbsp; 소 : 서울 강남구 언주로 508 서울상록빌딩
                </DialogContentText>
                <DialogContentText style={{fontSize:'18px'}}>
                    가입일 : 2022-05-04 14:54
                </DialogContentText>
                <DialogContentText style={{fontSize:'18px'}}>
                    소개글 : 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다. 
                </DialogContentText>
                <img 
                    width='550px'
                    src={imgUrl}
                />
                <div>
                    <TextField 
                        label="사업자등록번호" 
                        variant="outlined" 
                        size="small" 
                        style={{width:'135px'}}
                        inputProps={{ maxLength: 12 }}
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                        onKeyPress={onKeyPress}
                    />
                    <Button variant="contained" style={{padding:'8px'}} onClick={checkNum}>조회</Button>
                    <span style={{fontWeight:'bold', margin:'5px', fontSize:'15px'}}>{msg}</span>
                    
                </div>
            </DialogContent>
            <DialogActions>
                <div style={{marginRight:'auto'}}>
                    {
                        step === 'ing' ? (
                            <div  style={{fontSize:'20px'}}>
                                사업자등록번호 조회중입니다. <CircularProgress size='20px' color="primary"/>
                            </div>
                        ) :
                        (
                            step === 'success' ? (
                                <div style={{fontSize:'20px'}}>
                                    {code} {myMsg}
                                </div>
                            ) :
                            (
                                <div  style={{fontSize:'20px'}}>
                                사업자등록번호 조회에 실패하였습니다.
                                </div>
                            )
                        )
                    }
                </div>
                <Button variant="contained" onClick={handleClose}>승인</Button>
                {/* <Button onClick={handleClose}>거절</Button> */}
            </DialogActions>

            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                }}
                >
                <CloseIcon />
            </IconButton>

        </Dialog>

        </>

    )
  }
  
  export default SignupList;