import { FC } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect, useRef } from 'react';

const CheckCerti: FC = () => {

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [num3, setNum3] = useState('')
  const [num4, setNum4] = useState('')

  const input2 = useRef(null)
  const input3 = useRef(null)
  const input4 = useRef(null)


  useEffect(() => {
    setNum1(autoUpper(num1))
    if (autoUpper(num1).length === 4){
      input2.current.focus()
    }
  },[num1])

  useEffect(() => {
    setNum2(autoUpper(num2))
    if (autoUpper(num2).length === 4){
      input3.current.focus()
    }
  },[num2])

  useEffect(() => {
    setNum3(autoUpper(num3))
    if (autoUpper(num3).length === 4){
      input4.current.focus()
    }
  },[num3])

  useEffect(() => {
    setNum4(autoUpper(num4))
  },[num4])
  

  // 영문자, 숫자만 입력 / 소문자 -> 대문자
  const autoUpper = (str) => {
    str = str.replace(/[^0-9a-zA-Z]/g, '');
    str = str.toUpperCase()
    return str
  }
  

  return (
  <>
    <div style={{maxWidth:'800px', minHeight:'600px', margin:'auto', textAlign: 'center'}}>
      <h1>증명서 진위 확인</h1>
      <br></br>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <TextField 
          label="" 
          variant="outlined" 
          size="small" 
          style={{width:'75px'}}
          inputProps={{ maxLength: 4 }}
          autoFocus
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <span style={{margin:'5px', alignItems: 'center'}}>-</span>
        <TextField 
          label="" 
          variant="outlined" 
          size="small" 
          style={{width:'75px'}}
          inputProps={{ maxLength: 4 }}
          inputRef={input2}
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <span style={{margin:'5px', alignItems: 'center'}}>-</span>
        <TextField 
          label="" 
          variant="outlined" 
          size="small" 
          style={{width:'75px'}}
          inputProps={{ maxLength: 4 }}
          inputRef={input3}
          value={num3}
          onChange={(e) => setNum3(e.target.value)}
        />
        <span style={{margin:'5px', alignItems: 'center'}}>-</span>
        <TextField 
          label="" 
          variant="outlined" 
          size="small" 
          style={{width:'75px'}}
          inputProps={{ maxLength: 4 }}
          inputRef={input4}
          value={num4}
          onChange={(e) => setNum4(e.target.value)}
        />

        <Button 
          variant="contained" 
          style={{marginLeft:'10px'}}
          disabled={num1.length!=4 || num2.length!=4 || num3.length!=4 || num4.length!=4} 
        >
          확인
        </Button>
      </div>

    </div>
  </>
  )
};

export default CheckCerti;
