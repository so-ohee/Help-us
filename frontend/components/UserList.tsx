import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const UserList = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 600 }}>
            <TableHead>
                <TableRow>
                    <TableCell sx={{ width: 70 }} align="center">번호</TableCell>
                    <TableCell sx={{ width: 160 }}>이름/기관명</TableCell>
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
                        <Button variant="contained" size="small" style={{marginLeft:'15px'}} >경고</Button>
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell align="center">1</TableCell>
                    <TableCell>싸피재단</TableCell>
                    <TableCell>ssafy@ssafy.com</TableCell>
                    <TableCell>2 
                        <Button variant="contained" size="small" style={{marginLeft:'15px'}} >경고</Button>
                    </TableCell>
                </TableRow>

            </TableBody>
            </Table>
        </TableContainer>

    )
  }
  
  export default UserList;