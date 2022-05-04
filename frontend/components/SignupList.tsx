import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const SignupList = () => {
    return (
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
                <TableCell>싸피재단</TableCell>
                <TableCell>2022-05-04 11:20</TableCell>
                </TableRow>
                <TableRow>
                <TableCell align="center">2</TableCell>
                <TableCell>싸피재단</TableCell>
                <TableCell>2022-05-04 11:20</TableCell>
                </TableRow>
                <TableRow>
                <TableCell align="center">3</TableCell>
                <TableCell>싸피재단</TableCell>
                <TableCell>2022-05-04 11:20</TableCell>
                </TableRow>
            </TableBody>
            </Table>
        </TableContainer>

    )
  }
  
  export default SignupList;