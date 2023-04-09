import React, { useRef } from "react";
import styled from "styled-components/macro";
import solarPanelImg from "../assets/solarPanelImg.png";
import nftFrame from "../assets/nftFrame.png";
import CountdownMonths from "../countDownTimer/CountdownTimer";
import SolarNFT from "../solarNFT/SolarNFT";
import BuySolarInfo from "../buySolar/BuySolarInfo";
import HomePageAbout from "../about/HomePageAbout";
import HomePageGallery from "../gallery/HomePageGallery";
import BuyNft from "../buyNFT/BuyNft";
import RoadmapComponent from "../roadmap/RoadmapComponent";
import { FAQ } from "../homepageStore/homePageStore";
import FAQComponent from "../FAQ/FAQComponent";
import { scroll } from "../hook/scrollHook";
import Footer from "../footer/Footer";

const HomePage = ({ roadmapRef }) => {
  // const { scaleCoef, isLandscape } = useTheme();
  const myRef = useRef(null);

  const onClickBuy = () => {
    console.log(55, myRef.current);
    scroll(myRef);
  };

  //console.log(22, scaleCoef);

  return (
    <HomePageWrapper>
      <NavWrapper />
      <SolarPanelImg />
      <TextField>
        <Title>Ticket to the sun</Title>
        <Text>
          1 ticket = 1 chance<br></br>
          Pellentesque a finibus urna, sed tempus esfinibus urna,sed tempus es.
        </Text>
      </TextField>
      <BuyNft myRef={myRef} />
      <CountdownMonths />
      <SolarNFT />
      <BuySolarInfo />
      <HomePageAbout />
      <HomePageGallery
        onClick={onClickBuy}
        height="37%"
        bottom="-184%"
        width="62%"
        left="20%"
      />
      <NftGallery />
      <Roadmap id="roadmap-section">Roadmap</Roadmap>
      <RoadmapComponent roadmapRef={roadmapRef} />
      <WrapperFAQ id="my-section">
        <FaqTittle>FAQ</FaqTittle>
        <FaqWrapper>
          {FAQ.map((item, index) => {
            return <FAQComponent key={index} index={index} item={item} />;
          })}
        </FaqWrapper>
      </WrapperFAQ>
      <Footer top={"3403px"} onClickBuy={onClickBuy} />
    </HomePageWrapper>
  );
};
export default HomePage;

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const NavWrapper = styled.div`
  width: 53%;
  height: 708px;
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: center;
  background-color: #f1f7fd;

  @media (max-width: 1100px) {
    height: 650px;
  }

  @media (max-width: 720px) {
    height: 458px;
  }

  @media (max-width: 440px) {
    height: 398px;
  }
`;

const SolarPanelImg = styled.div`
  position: absolute;
  width: 39%;
  height: 336px;
  left: 36%;
  top: 426px;

  background: transparent url(${solarPanelImg}) top center no-repeat;
  background-size: contain;
  border-radius: 17px;

  @media (max-width: 1100px) {
    height: 300px;
  }

  @media (max-width: 720px) {
    height: 300px;
    top: 399px;
  }

  @media (max-width: 440px) {
    height: 221px;
    top: 359px;
  }
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  position: absolute;
  width: 40%;
  height: 180px;
  left: 11%;
  top: 200.65px;
  @media (max-width: 1100px) {
    height: 160px;
    gap: 17px;
  }

  @media (max-width: 720px) {
    height: 120px;
    gap: 14px;
    left: 30px;
  }

  @media (max-width: 440px) {
    height: 120px;
    gap: 11px;
    left: 16px;
  }
`;
const Title = styled.div`
  width: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  color: #283447;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 1100px) {
    font-size: 40px;
    line-height: 53px;
  }
  @media (max-width: 930px) {
    font-size: 20px;
    line-height: 40px;
  }
  @media (max-width: 720px) {
    font-size: 22px;
    line-height: 33px;
  }

  @media (max-width: 440px) {
    font-size: 15px;
    line-height: 23px;
  }
`;
const Text = styled.div`
  width: 97%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #0f1d32;
  flex: none;
  order: 1;
  flex-grow: 0;
  @media (max-width: 1100px) {
    font-size: 18px;
    line-height: 20px;
  }
  @media (max-width: 930px) {
    font-size: 15px;
    line-height: 18px;
  }
  @media (max-width: 720px) {
    font-size: 15px;
    line-height: 18px;
  }

  @media (max-width: 440px) {
    font-size: 13px;
    line-height: 16px;
  }
`;
const Roadmap = styled.div`
  position: absolute;
  width: 37%;
  height: 7%;
  left: 32%;
  top: 2249px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #283447;
  @media (max-width: 1100px) {
    font-size: 33px;
    line-height: 28px;
    top: 2126px;
  }
  @media (max-width: 930px) {
    font-size: 29px;
    line-height: 28px;
    top: 1967px;
  }

  @media (max-width: 720px) {
    font-size: 25px;
    line-height: 22px;
    top: 1842px;
  }

  @media (max-width: 440px) {
    font-size: 15px;
    line-height: 19px;
    top: 1621px;
  }
`;

const WrapperFAQ = styled.div`
  display: flex;
  position: absolute;
  gap: 30px;
  width: 100%;
  height: 89%;
  flex-direction: column;
  top: 2864.17px;
  background: #f3f8fc;
  align-content: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    top: 2824px;
  }
  @media (max-width: 930px) {
    top: 2624px;
  }

  @media (max-width: 720px) {
    top: 2460px;
  }

  @media (max-width: 440px) {
    top: 2224px;
  }
`;

const FaqTittle = styled.div`
  width: 30%;
  height: 8%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #283447;
  @media (max-width: 1100px) {
    font-size: 25px;
    line-height: 28px;
  }

  @media (max-width: 720px) {
    font-size: 20px;
    line-height: 22px;
  }

  @media (max-width: 440px) {
    font-size: 22px;
    line-height: 9px;
    position: relative;
    top: -120px;
  }
`;
const FaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  position: relative;
  width: 781px;
  height: 418px;
  @media (max-width: 1100px) {
    width: 581px;
    height: 318px;
  }

  @media (max-width: 720px) {
    width: 452px;
    height: 218px;
  }

  @media (max-width: 440px) {
    width: 381px;
    height: 118px;
    position: relative;
    top: -128px;
  }
`;

const NftGallery = styled.div`
  position: relative;
  width: 100%;
  top: 1527px;
  height: 303px;
  background: transparent url(${nftFrame}) top center no-repeat;
  background-size: contain;
  @media (max-width: 1100px) {
    width: 100%;
    top: 1552px;
  }
  @media (max-width: 930px) {
    width: 100%;
    top: 1469px;
  }

  @media (max-width: 720px) {
    width: 100%;
    top: 1380px;
  }

  @media (max-width: 440px) {
    width: 100%;
    top: 1207px;
  }
`;
