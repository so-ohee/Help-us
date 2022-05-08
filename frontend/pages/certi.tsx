import { FC, useState, useEffect } from "react";
import Image from "next/image";
import logo3 from "../public/images/logo3.png";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import html2canvas from 'html2canvas'



const Certi: FC = () => {

 
  const [ing, setIng] = useState(false)
  const [certiNum, setCertiNum] = useState('')

  // 현재 날짜
  let now = new Date()
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let date = now.getDate()


  // 버튼 클릭시 증명번호 생성
  useEffect(() => {
    if (ing === true){
      setCertiNum(randomString(4)+'-'+randomString(4)+'-'+randomString(4)+'-'+randomString(4))
    }
  },[ing])

  // 증명번호 생성 후, 증명서 생성
  useEffect(() => {
    if (certiNum !== ''){
      onHtmlToPng()
    }
  },[certiNum])



  // 난수 생섬
  const randomString = (count) => {
    let str = '';
    for (let i = 0; i < count; i++) {
        str += Math.floor(Math.random() * 36).toString(36);
    }
    str = str.toUpperCase()
    return str
  }

  // div -> png
  const onHtmlToPng = () => {
    html2canvas(document.getElementById('div')).then(canvas=>{
      onSave(canvas.toDataURL('image/png'), '기부내역확인서.png')
    })
  }
  const onSave = (uri, filename) => {
    var link = document.createElement('a')
    document.body.appendChild(link)
    link.href = uri
    link.download = filename
    link.click()
    document.body.removeChild(link)
    setIng(false)
  }

  return (
    <>
      <div style={{maxWidth:'700px', minHeight:'600px', margin:'auto', textAlign: 'center'}}>
        <h1>나의 기부내역</h1>
        <br></br>

        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 800 }}>
            <TableHead >
              <TableRow >
              <TableCell sx={{ width: 60 }} align="center">선택</TableCell>
                <TableCell sx={{ width: 70 }} align="center">번호</TableCell>
                <TableCell sx={{ width: 200 }}>기관명</TableCell>
                <TableCell sx={{ width: 170 }}>물품</TableCell>
                <TableCell sx={{ width: 80 }}>수량</TableCell>
                <TableCell sx={{ width: 120 }}>발송일</TableCell>
              </TableRow>
            </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" style={{padding:'4px'}}>
                <Checkbox />
              </TableCell>
              <TableCell align="center" >1</TableCell>
              <TableCell>싸피재단</TableCell>
              <TableCell>라면</TableCell>
              <TableCell>100</TableCell>
              <TableCell>2022-05-08</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center" style={{padding:'4px'}}>
                <Checkbox />
              </TableCell>
              <TableCell align="center" >1</TableCell>
              <TableCell>싸피재단</TableCell>
              <TableCell>라면</TableCell>
              <TableCell>100</TableCell>
              <TableCell>2022-05-08</TableCell>
            </TableRow>

          </TableBody>
          </Table>
        </TableContainer>

        <Button
          variant="contained" 
          style={{marginTop:'20px'}}
          onClick={() => setIng(true)}
        >
          확인서 발급
        </Button>
      </div>

      {
        ing ?
        (
          <>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div id='div' style={{width:'1000px'}}>
              <div style={{padding:'80px'}}>
                <span style={{fontSize:'20px'}}>문서확인번호: {certiNum}</span>

                <div style={{border:'1px solid black', padding:'50px', paddingBottom:'30px'}}>
                <span style={{display: 'flex', justifyContent: 'center', margin:'30px', fontSize:'40px', fontWeight:'bold'}}>기부내역 확인서</span>
                <h2>성 &nbsp; 함 : 김싸피</h2>
                <h2>연락처 : 010-1234-1234</h2>
                <h2>이메일 : ssafy@ssafy.com</h2>
                
                <br />
                <h1 style={{display: 'flex', justifyContent: 'center'}}>기부내역</h1>
                <div style={{minHeight:'500px'}}>
                  <TableContainer component={Paper} style={{display: 'flex', justifyContent: 'center'}}>
                    <Table >
                      <TableHead >
                        <TableRow >
                          <TableCell sx={{ width: 70 }} align="center">번호</TableCell>
                          <TableCell sx={{ width: 200 }}>기관명</TableCell>
                          <TableCell sx={{ width: 170 }}>물품</TableCell>
                          <TableCell sx={{ width: 80 }}>수량</TableCell>
                          <TableCell sx={{ width: 120 }}>날짜</TableCell>
                        </TableRow>
                      </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="center" >1</TableCell>
                        <TableCell>싸피재단</TableCell>
                        <TableCell>라면</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>2022-05-08</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell align="center" >1</TableCell>
                        <TableCell>싸피재단</TableCell>
                        <TableCell>라면</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>2022-05-08</TableCell>
                      </TableRow>

                    </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                <h2 style={{display: 'flex', justifyContent: 'center'}}>위와 같이 기부하였음을 확인합니다.</h2>
                <h2 style={{display: 'flex', justifyContent: 'center', marginBottom:'10px'}}>{year}년 {month}월 {date}일</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <span style={{fontSize:'40px', fontWeight:'bold', marginTop:'20px', marginLeft:'90px'}}>헬프어스</span>
                  <Image 
                    src= {logo3}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>

              </div>
              </div>
            </div>
          </>
        ) : null
      }



      <Dialog open={ing}>
        <DialogTitle>
          확인서 발급중입니다.
          <CircularProgress size='20px' color="primary" style={{marginLeft:'10px'}}/>
        </DialogTitle>
      </Dialog>




    </>
  );
};

export default Certi;
