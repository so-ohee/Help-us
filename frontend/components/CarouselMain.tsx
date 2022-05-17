import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FC } from "react";
import Image from "next/image";

// main images
import main1 from "../public/images/main1.jpg";
import main2 from "../public/images/main2.jpg";
import main3 from "../public/images/main3.jpg";
import main4 from "../public/images/main4.jpg";

const item = [main1, main2, main3, main4];

const Container = styled.div`
  /* overflow: hidden; */
  background-color: "#ffffff";
  width: 1100px;
  margin-left: 0px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
`;

// const Image = styled.img`
//   max-width: 100%;
//   max-height: 100%;
// `;

const CustomCarousel: FC = () => {
  return (
    <Container>
      <StyledSlider {...settings}>
        {item &&
          item.map((image, i) => (
            <div key={i}>
              <ImageContainer>
                <Image
                  src={image}
                  alt="등록 이미지"
                  width={1200}
                  height={200}
                />
              </ImageContainer>
            </div>
          ))}
      </StyledSlider>
    </Container>
  );
};

export default CustomCarousel;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // centerMode: true,
  // centerPadding: "350px",
  arrows: false,
};
