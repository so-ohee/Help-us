import { FC } from "react";
import Button from '@mui/material/Button';
import { useRouter } from "next/router";

const Signup: FC = () => {
    const router = useRouter()
    return (
    <>
        <Button
            onClick={() => router.push('/signup/user')}
        >
            일반 회원가입
        </Button>
        
        <Button
            onClick={() => router.push('/signup/org')}
        >
            기관 회원가입
        </Button>
    </>
    )
    ;
};

export default Signup;
