import { FC, useState, useEffect } from "react";
import Postcode from '@actbase/react-daum-postcode';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';


const Org: FC = () => {

    const checkNum = '123456'

    const [addr, setAddr] = useState<string>('')
    const [postcode, setPostcode] = useState<string>('')

    const [pwMsg1, setPwMsg1] = useState("");
    const [pwMsg2, setPwMsg2] = useState("");
    const [pwMsg3, setPwMsg3] = useState("");
    const [pwCheck1, setPwCheck1] = useState(false);
    const [pwCheck2, setPwCheck2] = useState(false);
    const [pwCheck3, setPwCheck3] = useState(false);
    const [color1, setColor1] = useState({});
    const [color2, setColor2] = useState({});
    const [color3, setColor3] = useState({});
    const [pwCheckMsg, setPwCheckMsg] = useState("");
    const [checkPw, setCheckPw] = useState(false);

    const [emailMsg, setEmailMsg] = useState("");
    const [checkEmail, setCheckEmail] = useState(false);
    const [authMail, setAuthMail] = useState(false)
    const [authEnd, setAuthEnd] = useState(false)
    const [authnum, setAuthnum] = useState('')
    const [authTime, setAuthTime] = useState<number>(10)


    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        nickname: "",
        name: "",
        phone: "",
      });
      const { email, password, passwordConfirm, nickname, name, phone } =
        inputs;
      const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
          ...inputs,
          [name]: value,
        });
      };


    // 유효성 체크
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/;
    const passwordRegex2 = /(?=.*\d{1,50})(?=.*[a-zA-Z]{1,50}).{1,50}$/; // 영문, 숫자 하나 이상 포함

    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;


    // 이메일 유효성 검사
    useEffect(() => {
        setCheckEmail(false);
        setEmailMsg("");
        const debounce = setTimeout(() => {
          if (email.length >= 1) {
            if (!emailRegex.test(email)) {
                setEmailMsg("올바른 이메일 형식이 아닙니다.");
            } 
            else {
                setEmailMsg("");
                setCheckEmail(true);
            }
            //   // 이메일 중복검사
            //   axios({
            //     method: "get",
            //     url: "/user/checkemail?email=" + email,
            //   })
            //     .then((res) => {
            //       setEmailMsg("사용하셔도 좋습니다.");
            //       setCheckEmail(true);
            //     })
            //     .catch((err) => {
            //       setEmailMsg("중복된 이메일입니다.");
            //     });
            // }
          }
        }, 500);
        return () => clearTimeout(debounce);
      }, [email]);



    // 비밀번호 유효성 검사
    useEffect(() => {
        setCheckPw(false); // false로 초기화
        if (password.length === 0) {
            setPwMsg1("");
            setPwCheckMsg("");
        }

        // 8자리 이상
        if (password.length < 8) {
            setPwMsg1("x 8자리 이상");
            setColor1({})
            setPwCheck1(false)
        }else{
            setPwMsg1("o 8자리 이상");
            setColor1({color:'#00891A'})
            setPwCheck1(true)
        }

        // 영문 숫자 포함
        if (!passwordRegex2.test(password)) {
            setPwMsg2("x 영문, 숫자 포함");
            setColor2({})
            setPwCheck2(false)
        } else {
            setPwMsg2("o 영문, 숫자 포함");
            setColor2({color:'#00891A'})
            setPwCheck2(true)
        }

        // 사용할 수 없는 문자
        if (password.includes(" ")) {
            setPwMsg3("x 사용할 수 없는 문자");
            setColor3({})
            setPwCheck3(false)
        } else {
            setPwMsg3("o 사용할 수 없는 문자");
            setColor3({color:'#00891A'})
            setPwCheck3(true)
        }

        // 비밀번호 확인
        if (password.length >= 8 && passwordRegex2.test(password) && !password.includes(" ") ){
            if (passwordConfirm.length === 0) {
                setPwCheckMsg("");
            } else if (password === passwordConfirm) {
                setPwCheckMsg("");
                setCheckPw(true);
            } else {
                setPwCheckMsg("비밀번호가 일치하지 않습니다.");
            }
        }else{
            setPwCheckMsg("")
        }

        
    }, [password, passwordConfirm]);

    // 인증번호 처리
    useEffect(() => {
        if (authnum.length >= 6){
            if (authnum === checkNum){
                // alert('인증되었습니다.')
                setAuthEnd(true)
            }else{
                alert('다시 입력해주세요.')
                setAuthnum('')
            }
        }
    },[authnum])

    // 인증번호 타이머
    useEffect(() => {
        if (authMail){
            const timer = setInterval(() => {
                if (authTime <= 0){
                    clearInterval(timer)
                }
                console.log(authTime)
                setAuthTime(authTime - 1)
            }, 1000)
            return () => clearInterval(timer)
        }
    }, [authMail, authTime])

    // 회원가입 버튼 누를시
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
        console.log({
          email: data.get('email'),
          password: data.get('password'),
          addr: addr +' '+ data.get('addr2')
          
        });
      };
    

    // 우편번호 찾기 클릭시
    const [open, setOpen] = useState<boolean>(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


    const theme = createTheme();
    const FormHelperTexts = styled(FormHelperText)`
        width: 100%;
        padding-left: 16px;
        font-weight: 700;
        color: #d32f2f;
    `;
    const CustomDisableInput = styled(TextField)(() => ({
        ".MuiInputBase-input.Mui-disabled": {
          WebkitTextFillColor: "#000",
          color: "#000"
        }
      }));
    
    return(
        <>
            <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={10}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="이메일"
                            name="email"
                            value={email}
                            onChange={onChange}
                            disabled={authMail}
                            // color="black"
                            autoFocus
                            inputProps={{ maxLength: 30 }}
                            error={emailMsg.length > 0}
                            />
                        </Grid>
                        <Grid item xs={1}>
                        <Button
                            sx={{ mt: 1, mb:1, mx:1}}
                            variant="contained"
                            disabled={!checkEmail || authMail}
                            onClick={() => setAuthMail(true)}
                        >
                        인증
                        </Button>
                        </Grid>
                        {
                            authMail ?
                            (
                                <>
                                <Grid item xs={3}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="authnum"
                                    label="인증번호"
                                    name="authnum"
                                    value={authnum}
                                    onChange={(e) => setAuthnum(e.target.value)}
                                    disabled={authEnd}
                                    // color="black"
                                    inputProps={{ maxLength: 6 }}
                                    // error={emailMsg}
                                    />
                                </Grid>

                                </>
                            )
                            : null
                        }
                        {
                            authMail && !authEnd ?
                            (
                                <Button
                                sx={{ mt: 2, mb:1, mx:1}}
                                variant="contained"
                                // disabled={!checkEmail || authMail}
                                onClick={() => setAuthMail(false)}
                                >
                                다시 인증하기
                                </Button>
                            )
                            : null
                        }
                        {
                            authEnd ?
                            (
                                <Button
                                sx={{ mt: 2, mb:1, mx:1}}
                                variant="contained"
                                disabled={true}
                                >
                                인증 완료
                                </Button>
                            )
                            : null
                        }

                        {
                            emailMsg ?
                            (
                                <FormHelperTexts>{emailMsg}</FormHelperTexts>
                            )
                            : null
                        }
                        

                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="password"
                            label="비밀번호"
                            type="password"
                            id="password"
                            value={password}
                            onChange={onChange}
                            inputProps={{ maxLength: 20 }}
                            error={(password.length > 0 && !(pwCheck1 && pwCheck2 && pwCheck3))}
                            />
                        </Grid>
                        {
                            password.length > 0 && !(pwCheck1 && pwCheck2 && pwCheck3) ?
                            (
                                <div>
                                    <FormHelperTexts style={color1}>{pwMsg1}</FormHelperTexts>
                                    <FormHelperTexts style={color2}>{pwMsg2}</FormHelperTexts>
                                    <FormHelperTexts style={color3}>{pwMsg3}</FormHelperTexts>
                                </div>
                            )
                            :
                            null
                        }


                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="passwordConfirm"
                            label="비밀번호 확인"
                            type="password"
                            id="passwordConfirm"
                            value={passwordConfirm}
                            onChange={onChange}
                            inputProps={{ maxLength: 20 }}
                            error={pwCheckMsg != ''}
                            />
                        </Grid>
                        {
                            pwCheckMsg ?
                            (
                                <FormHelperTexts>{pwCheckMsg}</FormHelperTexts>
                            )
                            :null
                        }
                         {/* <FormHelperTexts>{pwCheckMsg}</FormHelperTexts> */}

                        <Grid item xs={12} style={{marginTop:"15px"}}>
                            <TextField
                            name="name"
                            required
                            fullWidth
                            id="name"
                            label="기관명"
                            inputProps={{ maxLength: 20 }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                            name="phone"
                            required
                            fullWidth
                            id="phone"
                            label="전화번호"
                            inputProps={{ maxLength: 15 }}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <CustomDisableInput
                            name="post"
                            required
                            fullWidth
                            id="post"
                            label="우편번호"
                            value={postcode}
                            disabled={true}
                            />
                        </Grid>
                        <Button
                        sx={{ mt: 2, mb:1, mx:1}}
                        variant="contained"
                        onClick={handleClickOpen}
                        >
                        우편번호 찾기
                        </Button>

                        <Grid item xs={12}>
                            <CustomDisableInput
                            name="addr1"
                            required
                            fullWidth
                            id="addr1"
                            label="주소"
                            value={addr}
                            disabled={true}
                            />
                        </Grid>


                        <Grid item xs={12}  style={{marginBottom:"15px"}}>
                            <TextField
                            name="addr2"
                            fullWidth
                            id="addr2"
                            label="상세 주소"
                            inputProps={{ maxLength: 30 }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                            name="intro"
                            fullWidth       
                            multiline
                            rows={3}
                            id="intro"
                            label="소개"
                            inputProps={{ maxLength: 200 }}
                            />
                        </Grid>


                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                    </Grid>
                </Box>
                </Box>
            </Container>
            </ThemeProvider>



            <div>
                <Dialog open={open} onClose={handleClose}>
                    <Postcode
                    style={{ width: 500, height: 500 }}
                    jsOptions={{ animation: true, hideMapBtn: true }}
                    onSelected={data => {
                        // console.log(data)
                        setAddr(data.address)
                        setPostcode(data.zonecode)
                        // console.log(JSON.stringify(data))
                        setOpen(false);
                    }}
                    />
                </Dialog>
            </div>
         </>
    )
};

export default Org;
