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
import { OCR } from "../function/axios";


const SignupList = () => {
    const imgUrl="http://img1.bizhows.com/bhfile01/__CM_FILE_DATA/202104/15/14/2438331_1618465806169.jpg"
    // 다이얼로그
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);

        // ocr
        OCR(imgUrl)
        .then(res => console.log(res))
        
    };
    const handleClose = () => {
      setOpen(false);
      setNum('')
      setMsg('')
    };


    const [num, setNum] = useState('')
    const [msg, setMsg] = useState('')


    const onKeyPress = (e) => {
        if (e.key === 'Enter'){
            checkNum()
        }
    }


    // ocr
    useEffect(() => {
        // OCR('https://m.cacaopack.co.kr/file_data/yongchulk/2021/05/25/2f17fe53936a0f4f5414809f93aef198.jpg')
        // .then(res => console.log(res))
        // console.log('--')
    },[])



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
                <DialogContentText>
                    02-1234-1234
                </DialogContentText>
                <DialogContentText>
                    ssafy@ssafy.com
                </DialogContentText>
                <DialogContentText>
                    서울 강남구 언주로 508 서울상록빌딩
                </DialogContentText>
                <DialogContentText>
                    소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다. 
                </DialogContentText>
                <DialogContentText>
                    2022-05-04 14:54 가입
                </DialogContentText>
                <img 
                    width='550px'
                    src=
                    "http://img1.bizhows.com/bhfile01/__CM_FILE_DATA/202104/15/14/2438331_1618465806169.jpg"
                />
            </DialogContent>
            <DialogActions>
                <div style={{marginRight:'auto'}}>
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