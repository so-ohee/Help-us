import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";


const UpdateButton = styled(Button)({
    backgroundColor: "#5B321E",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#CDAD78",
      color: "white",
    },
  });


const UserList = () => {

    const [searchWay, setSearchWay] = useState('name')

    const handleChange = (e) => {
        setSearchWay(e.target.value);
    }

    return (
        <>
            <div style={{marginBottom:'20px', display: 'flex', justifyContent: 'flex-end'}}>
                <FormControl sx={{  minWidth: 126 }} size="small">
                    <Select
                    value={searchWay}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value={'name'}>기관명/이름</MenuItem>
                    <MenuItem value={'email'}>이메일</MenuItem>
                    </Select>
                </FormControl>
                <TextField size="small" />
                <UpdateButton variant="contained" style={{padding:'8px'}} >
                    검색
                </UpdateButton>
            </div>
            

            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 600 }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: 70 }} align="center">번호</TableCell>
                        <TableCell sx={{ width: 160 }}>기관명/이름</TableCell>
                        <TableCell>이메일</TableCell>
                        <TableCell sx={{ width: 120 }}>경고횟수</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center">1</TableCell>
                        <TableCell>싸피재단</TableCell>
                        <TableCell>ssafy@ssafy.com</TableCell>
                        <TableCell>2 
                            <UpdateButton variant="contained" size="small" style={{marginLeft:'15px'}} >경고</UpdateButton>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell align="center">1</TableCell>
                        <TableCell>싸피재단</TableCell>
                        <TableCell>ssafy@ssafy.com</TableCell>
                        <TableCell>2 
                            <UpdateButton variant="contained" size="small" style={{marginLeft:'15px'}} >경고</UpdateButton>
                        </TableCell>
                    </TableRow>

                </TableBody>
                </Table>
            </TableContainer>
        </>

    )
  }
  
  export default UserList;