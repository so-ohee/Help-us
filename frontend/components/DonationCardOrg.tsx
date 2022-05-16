import { Box, Button, Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import react, { FC, useState } from "react";
import TestImage from "../public/images/testImage.jpg";
import defaultImage from "../public/images/defaultImage.png";
import Chip from "@mui/material/Chip";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

// api
import { finishDonation } from "../function/axios";

const CustomButton = styled(Button)({
  backgroundColor: "#5B321E",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#CDAD78",
    color: "white",
  },
});

interface IDonationCardOrg {
  item: any;
  token: any;
  id: any;
  getStatus: any;
  fStatus: boolean;
}

const DonationCardOrg: FC<IDonationCardOrg> = ({
  item,
  token,
  id,
  getStatus,
  fStatus,
}) => {
  const onClickFinish = () => {
    finishDonation(item.donationId, id, token)
      .then((res) => {
        console.log("기부 마감 성공");
        getStatus(!fStatus);
      })
      .catch((err) => console.error(err));
  };

  console.log(item);

  return (
    <div>
      <Box
        sx={{
          borderRadius: "10px",
          boxShadow: "0 0 5px #CDAD78",
          overflow: "hidden",
          position: "relative",
          height: 230,
          width: 500,
          backgroundColor: "#ffffff",
        }}
      >
        <Stack direction="row">
          <Box
            sx={{
              borderRadius: "20px 20px 0 0",
              // display: "flex",
              height: 230,
              width: "35%",
            }}
          >
            {item.profile === null ? (
              <Image
                width="100%"
                height="145"
                src={defaultImage}
                alt="Donation Image"
                layout="responsive"
              />
            ) : (
              <Image
                width="100%"
                height="145"
                src={item.profile}
                alt="Donation Image"
                layout="responsive"
              />
            )}
          </Box>
          <Box
            sx={{
              // display: "flex",
              justifyContent: "space-between",
              padding: "10px 15px",
              borderTop: "1px solide #CDAD78",
              height: "100%",
              width: "65%",
            }}
          >
            <Box>
              {/* 제목은 17자까지만 보여주기??*/}
              <Typography sx={{ fontWeight: "bold", fontSize: 17, mt: 0.5 }}>
                {item.title}
              </Typography>
              <Grid
                container
                sx={{
                  ml: 1,
                  mt: 1,
                  bgcolor: "#f7f2ea",
                  width: 250,
                  height: 110,
                  borderRadius: 1.25,
                }}
                direction="row"
              >
                {item.products.map((product, i) => (
                  <Grid sx={{ mx: 1.1, mt: 1 }} key={i}>
                    <Chip
                      label={product.productName}
                      size="small"
                      sx={{
                        backgroundColor: "#FCE2A6",
                        width: 65,
                        fontSize: 11,
                      }}
                    />
                    <Stack
                      sx={{
                        width: 65,
                        height: 10,
                        borderRadius: 5,
                      }}
                      direction="row"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          borderTopLeftRadius: 5,
                          borderBottomLeftRadius: 5,
                          width: `${product.percent}%`,
                          height: 5,
                          bgcolor: "#CDAD78",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          borderTopRightRadius: 5,
                          borderBottomRightRadius: 5,
                          width: `${100 - product.percent}%`,
                          height: 5,
                          bgcolor: "#dbd5ca",
                        }}
                      ></Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
              {/* 진행률 표시 바 */}
              <Stack
                sx={{
                  width: 300,
                  height: 10,
                  mt: 1.5,
                }}
                direction="row"
                alignItems="center"
              >
                {item.percent === 100 ? (
                  <Box
                    sx={{
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      width: `${item?.percent}%`,
                      height: 15,
                      bgcolor: "#CDAD78",
                    }}
                  ></Box>
                ) : (
                  <Box
                    sx={{
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      width: `${item?.percent}%`,
                      height: 15,
                      bgcolor: "#CDAD78",
                    }}
                  ></Box>
                )}
                {item.percent === 0 ? (
                  <Box
                    sx={{
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      width: `${100 - item?.percent}%`,
                      height: 15,
                      bgcolor: "#dbd5ca",
                    }}
                  ></Box>
                ) : (
                  <Box
                    sx={{
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      width: `${100 - item?.percent}%`,
                      height: 15,
                      bgcolor: "#dbd5ca",
                    }}
                  ></Box>
                )}
                <Typography align="center" sx={{ ml: 1, fontSize: 14 }}>
                  {item?.percent}%
                </Typography>
              </Stack>
            </Box>
            <Stack
              justifyContent="space-between"
              direction="row"
              sx={{ mt: 1.5 }}
              alignItems="center"
            >
              <Typography>자동 종료일: {item.endDate}</Typography>
              <CustomButton
                onClick={onClickFinish}
                variant="contained"
                size="small"
                sx={{ width: 30 }}
              >
                종료
              </CustomButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default DonationCardOrg;
