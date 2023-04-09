import React from "react";
import styled from "styled-components/macro";
import BuyButton from "../buttons/BuyButton";
import { scrollByPosition } from "../hook/scrollHook";

const HomePageGallery = ({
  onClick,
  height,
  width,
  bottom,
  position,
  left,
}) => {
  const onClickHandler = () => {
    scrollByPosition(10);
  };
  return (
    <Wrapper
      height={height}
      width={width}
      bottom={bottom}
      position={position}
      left={left}
    >
      <Title>Gallery</Title>
      <Text>
        Below is just a part of the MetaSolar NFT. Click on a panel to buy it.
        Integer vestibulum, metus at blandit bibendum, tortor mauris cursus
        arcu, ac ultrices urna metus vitae ipsum.
      </Text>
      <ButtonWrapper>
        <BuyButton
          to={"/"}
          onClick={onClick}
          btnPosition={"relative"}
          btnBorderRadius={"7.2381px"}
          btnBackground={" #FF9920"}
          btnText={"Buy"}
          primeryFontSize={"14px"}
          primeryLineHeight={"16px"}
          primeryColor={"#FFFFFF"}
        />

        <BuyButton
          to={"/Gallery"}
          onClick={onClickHandler}
          btnPosition={"relative"}
          btnBorderRadius={"6.54875px"}
          btnBackground={" #FFFFFF"}
          btnText={"Check your nfts"}
          bntBorder={"0.904762px solid #3A712D"}
          primeryFontSize={"13px"}
          primeryLineHeight={"15px"}
          primeryColor={"#3A712D"}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};
export default HomePageGallery;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;

  position: ${(props) => (props.position ? props.position : "absolute")};
  width: ${(props) => props.width && props.width};
  left: ${(props) => props.left && props.left};
  height: ${(props) => props.height && props.height};

  bottom: ${(props) => props.bottom && props.bottom};
  @media (max-width: 1100px) {
    width: ${(props) => !props.position && "71%"};
    top: ${(props) => !props.position && "1595px"};
    left: ${(props) => props.left && "15%"};
  }
  @media (max-width: 930px) {
    width: ${(props) => !props.position && "71%"};
    top: ${(props) => !props.position && "1518px"};
  }

  @media (max-width: 720px) {
    width: ${(props) => !props.position && "71%"};
    top: ${(props) => !props.position && "1445px"};
  }

  @media (max-width: 440px) {
    width: ${(props) => !props.position && "71%"};
    top: ${(props) => !props.position && "1295px"};
  }
`;

const Title = styled.div`
  width: 60%;
  height: 16%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  text-align: center;

  color: #283447;
  @media (max-width: 1100px) {
    font-size: 35px;
    line-height: 17px;
    width: 100%;
  }
  @media (max-width: 930px) {
    font-size: 31px;
    line-height: 17px;
    width: 100%;
  }

  @media (max-width: 720px) {
    font-size: 19px;
    line-height: 17px;
    width: 100%;
  }

  @media (max-width: 440px) {
    font-size: 13px;
    line-height: 14px;
    width: 100%;
  }
`;
const Text = styled.div`
  width: 100%;
  height: 18%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  /* text colour */

  color: #0f1d32;
  @media (max-width: 1100px) {
    font-size: 17px;
    line-height: 20px;
    width: 100%;
  }
  @media (max-width: 930px) {
    font-size: 15px;
    line-height: 20px;
    width: 100%;
  }

  @media (max-width: 720px) {
    font-size: 14px;
    line-height: 16px;
    width: 100%;
  }

  @media (max-width: 440px) {
    font-size: 10px;
    line-height: 12px;
    width: 100%;
    position: relative;
    top: -20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 44%;
  height: 20%;
`;
