import { FC, useState, useEffect } from "react";
import { getNewsList } from "function/axios";
import Pagination from "@/components/Pagination";
import {
  Box,
  Grid,
  Tab,
  Typography,
  Stack,
  Button,
  InputBase,
  Paper,
  Tabs,
} from "@mui/material/";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material/";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import volunteer1 from "../public/images/volunteer1.jpg";

const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#CDAD78",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
    backgroundColor: "#FCF8F0",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  height: 62,
}));

const NewsMain: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [newsList, setNewsList] = useState<any>(null);

  // pagination
  const [curPage, setCurPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const paginate = (pageNumber) => setCurPage(pageNumber);

  const params = {
    page: curPage + 1,
  };

  useEffect(() => {
    getNewsList(params).then((res) => {
      setNewsList(res.data.news);
      setTotalPages(res.data.totalPage);
      // console.log("data는", reviewList);
      setLoading(true);
    });
  }, [curPage]);

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Stack>
          <Box textAlign="center">
            <Image
              src={volunteer1}
              alt="volunteer first"
              width={1200}
              height={200}
            />
          </Box>
          <Box sx={{ fontWeight: "bold", my: 5 }}>
            <Typography variant="h4" textAlign="center">
              기부 News
            </Typography>
          </Box>
          <Stack>
            <TableContainer component={Paper} sx={{ my: 5 }}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                      제목
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                      내용
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontSize: 17 }}>
                      작성일
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {newsList &&
                    newsList.map((data) => (
                      <StyledTableRow
                        key={data.title}
                        onClick={() => window.open(`${data.link}`)}
                      >
                        <StyledTableCell align="center" sx={{ width: 400 }}>
                          {data.title}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.description}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.date}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Stack>
      </Grid>
    </div>
  );
};

export default NewsMain;
