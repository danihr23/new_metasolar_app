import React from "react";
import styled from "styled-components/macro";
import { metaSolarNft } from "../homepageStore/homePageStore";
const SolarNFT = () => {
  return (
    <Wrapper>
      <NFTWrapper>
        <Titile>MetaSolar NFTs saves you</Titile>
        {metaSolarNft.map((item, index) => {
          return (
            <InfoWrapper key={index}>
              <Logo background={item.image} />
              <DataTitle>{item.title}</DataTitle>
              <DataPower>{item.power}</DataPower>
            </InfoWrapper>
          );
        })}
      </NFTWrapper>
    </Wrapper>
  );
};
export default SolarNFT;

const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 16%;
  height: 350.41px;
  left: 80%;
  top: 128px;
  background: #daf5d0;
  border: 1px solid #a6cc97;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: flex-end;
  flex-direction: column;
  flex-wrap: nowrap;
  @media (max-width: 1100px) {
    width: 215px;
    left: 74%;
  }
  @media (max-width: 930px) {
    width: 188px;
    left: 75%;
  }

  @media (max-width: 720px) {
    width: 139px;
    top: 72px;
    left: 74%;
  }

  @media (max-width: 440px) {
    width: 97px;
    top: 59px;
    left: 72%;
    height: 289px;
  }
`;
const NFTWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 15px;
  position: absolute;
  width: 90%;
  height: 85%;
`;
const Titile = styled.div`
  width: 177.01px;
  height: 44px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  /* title colour */
  color: #283447;
  @media (max-width: 1100px) {
    font-size: 15px;
    line-height: 21px;
    width: 154px;
  }
  @media (max-width: 930px) {
    font-size: 14px;
    line-height: 19px;
    width: 154px;
  }

  @media (max-width: 720px) {
    font-size: 13px;
    line-height: 14px;
    width: 94px;
  }

  @media (max-width: 440px) {
    font-size: 11px;
    line-height: 14px;
    width: 74px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8.97657px;
  gap: 6px;
  position: relative;
  width: 75%;
  height: 80%;
`;

const Logo = styled.div`
  width: 43px;
  height: 44px;
  background: transparent url(${(props) => props.background}) top center
    no-repeat;
  background-size: contain;
`;

const DataTitle = styled.div`
  width: 80.32px;
  height: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 8.83887px;
  line-height: 11px;
  text-align: center;
  color: #0f1d32;
  @media (max-width: 1100px) {
    font-size: 15px;
    line-height: 21px;
    width: 154px;
  }
  @media (max-width: 930px) {
    font-size: 14px;
    line-height: 19px;
    width: 154px;
  }

  @media (max-width: 720px) {
    font-size: 13px;
    line-height: 14px;
    width: 94px;
  }

  @media (max-width: 440px) {
    font-size: 11px;
    line-height: 10px;
    width: 74px;
  }
`;

const DataPower = styled.div`
  width: 85%;
  height: 30%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14.7315px;
  line-height: 18px;
  text-align: center;
  color: #283447;
  @media (max-width: 1100px) {
    font-size: 15px;
    line-height: 21px;
    width: 154px;
  }
  @media (max-width: 930px) {
    font-size: 14px;
    line-height: 19px;
    width: 154px;
  }

  @media (max-width: 720px) {
    font-size: 13px;
    line-height: 14px;
    width: 94px;
  }

  @media (max-width: 440px) {
    font-size: 11px;
    line-height: 10px;
    width: 74px;
  }
`;
