import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
const HomePageAbout = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>About</Title>
        <Text>
          Ut et sodales mauris, in mollis magna. Maecenas dignissim vulputate
          tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam non nisi nec massa maximus facilisis. Integer vestibulum,
          metus at blandit bibendum, tortor mauris cursus arcu, ac ultrices urna
          metus vitae ipsum.
        </Text>

        <Button to={"/About"}>
          <ButtonText>learn more</ButtonText>
        </Button>
      </ContentWrapper>
    </Wrapper>
  );
};
export default HomePageAbout;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 351.01px;
  top: 1209.48px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  align-items: center;
  background: #daf5d0;
  border-radius: 20px;
  @media (max-width: 1100px) {
    width: 100%;
    top: 1252px;

    height: 289px;
  }
  @media (max-width: 930px) {
    width: 100%;
    top: 1169px;
    height: 289px;
  }

  @media (max-width: 720px) {
    width: 100%;
    top: 1080px;
    /* left: 4%; */
    height: 289px;
  }

  @media (max-width: 440px) {
    width: 100%;
    top: 965px;
    /* left: 4%; */
    height: 289px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;
  position: relative;
  width: 66%;
  height: 66%;
  background: #daf5d0;
`;

const Title = styled.div`
  width: 56%;
  height: 20%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #283447;
  @media (max-width: 1100px) {
    font-size: 27px;
    line-height: 17px;
    width: 100%;
  }
  @media (max-width: 930px) {
    font-size: 22px;
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
  width: 93%;
  height: 38%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #0f1d32;
  @media (max-width: 1100px) {
    font-size: 14px;
    line-height: 17px;
    width: 100%;
  }
  @media (max-width: 930px) {
    font-size: 14px;
    line-height: 17px;
    width: 100%;
  }

  @media (max-width: 720px) {
    font-size: 14px;
    line-height: 17px;
    width: 100%;
  }

  @media (max-width: 440px) {
    font-size: 12px;
    line-height: 12px;
    width: 100%;
  }
`;

const Button = styled(Link)`
  box-sizing: border-box;
  width: 20%;
  height: 20%;
  position: relative;
  background: #ffffff;
  border: 1px solid #3a712d;
  border-radius: 7.2381px;
`;
const ButtonText = styled.div`
  position: absolute;
  left: 5%;
  right: 5%;
  top: 31.25%;
  bottom: 29.61%;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #3a712d;
  @media (max-width: 1100px) {
    font-size: 13px;
    line-height: 17px;
    width: 100%;
  }
  @media (max-width: 930px) {
    font-size: 11px;
    line-height: 13px;
    width: 100%;
    left: 1%;
  }

  @media (max-width: 720px) {
    font-size: 9px;
    line-height: 8px;
    width: 100%;
    left: 1%;
    right: 8%;
    top: 35.25%;
  }

  @media (max-width: 440px) {
    font-size: 6px;
    line-height: 9px;
    width: 100%;
  }
`;
