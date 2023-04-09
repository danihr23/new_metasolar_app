import React from "react";
import styled from "styled-components/macro";
import BuyButton from "../buttons/BuyButton";
import Navigation from "../navigation/Navigation";

const Footer = ({ top, onClickBuy, roadmapPosions, position }) => {
  return (
    <Wrapper top={top} position={position}>
      <GreenWrapper>
        <InnerFrame>
          <Title> From the intangible to the tangible</Title>
          <Text>
            Ut et sodales mauris, in mollis magna. Maecenas dignissim vulputate
            tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Í
          </Text>
          <BuyButton
            btnPosition={"absolute"}
            btnZindex={"2"}
            bntTop={"143%"}
            btnLeft={"44%"}
            btnHeight={"37%"}
            btnWidth={"21%"}
            to={"/"}
            onClick={onClickBuy}
            btnBorderRadius={"7.2381px"}
            btnBackground={" #FF9920"}
            btnText={"Buy"}
            primeryFontSize={"14px"}
            primeryLineHeight={"16px"}
            primeryColor={"#FFFFFF"}
          />
        </InnerFrame>
      </GreenWrapper>
      <BlackWrapper>
        <Navigation
          isCompany={true}
          height={"70%"}
          flexDirection={"column"}
          color={"#FFFFFF"}
          footer={"true"}
        />
      </BlackWrapper>
    </Wrapper>
  );
};
export default Footer;
const Wrapper = styled.div`
  position: ${(props) => (props.position ? props.position : "absolute")};
  width: 100%;
  height: 100%;
  top: ${(props) => props.top && props.top};

  background: #fcfeff;

  @media (max-width: 1100px) {
    top: ${(props) => props.top && "3387px"};
  }
  @media (max-width: 930px) {
    top: ${(props) => props.top && "3203px"};
  }

  @media (max-width: 720px) {
    top: ${(props) => props.top && "3000px"};
  }

  @media (max-width: 440px) {
    top: ${(props) => props.top && "2767px"};
  }
`;

const GreenWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 377px;

  top: 0px;

  /* main bg */

  background: #daf5d0;
  border-radius: 30px;
`;
const InnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;
  position: absolute;
  width: 60%;
  left: 250px;
  top: 59px;
  @media (max-width: 1100px) {
    width: 60%;
    left: 159px;
    top: 59px;
  }
  @media (max-width: 930px) {
    width: 72%;
    left: 80px;
    top: 71px;
  }

  @media (max-width: 720px) {
    width: 69%;
    left: 57px;
    top: 59px;
  }

  @media (max-width: 440px) {
    width: 84%;
    left: 22px;
    top: 79px;
  }
`;
const Title = styled.div`
  width: 72%;
  height: 26%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  text-align: center;

  /* title colour */

  color: #283447;
  @media (max-width: 1100px) {
    font-size: 24px;
    line-height: 36px;
    width: 100%;
  }
  @media (max-width: 930px) {
    font-size: 24px;
    line-height: 20px;
    width: 100%;
  }

  @media (max-width: 720px) {
    font-size: 16px;
    line-height: 17px;
    width: 100%;
  }

  @media (max-width: 460px) {
    font-size: 13px;
    line-height: 14px;
    width: 100%;
  }
`;
const Text = styled.div`
  width: 100%;
  height: 35%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  /* text colour */

  color: #0f1d32;
  @media (max-width: 1100px) {
    font-size: 18px;
    line-height: 24px;
    width: 100%;
  }
  @media (max-width: 930px) {
    font-size: 15px;
    line-height: 20px;
    width: 100%;
  }

  @media (max-width: 720px) {
    font-size: 15px;
    line-height: 17px;
    width: 100%;
  }

  @media (max-width: 440px) {
    font-size: 13px;
    line-height: 14px;
    width: 100%;
  }
`;
const BlackWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 209px;

  top: 285px;

  /* title colour */

  background: #283447;
`;
