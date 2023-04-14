import React from "react";
import styled from "styled-components/macro";

const GalleryNFT = ({ nftCount, top, overflow, height }) => {
  const nft = Array.from({ length: nftCount }, (_, i) => i + 1);
  const createNFTimg = () => {
    const resultsRender = [];

    const x = nft.length >= 16 ? 16 : nft.length;

    for (var i = 0; i < nft.length; i += x) {
      resultsRender.push(
        <BoxWrapper key={Math.random()}>
          {nft
            .slice(i, i + 16)
            // eslint-disable-next-line no-loop-func
            .map((img, index) => (
              <NftBox key={Math.random()}>
                <Vector
                  key={Math.random()}
                  index={index}
                  background={` https://storage.googleapis.com/solar_panel_test/solar_panel_test_${img}.png?fbclid=IwAR1NvDxZXkkbdp4o7sY6NM5zRRoxKxxIuhO5fdrmPzlmreEljVKWKYsX5G4`}
                />
                <Number>{img}</Number>
              </NftBox>
            ))}
        </BoxWrapper>
      );
    }

    return resultsRender;
  };

  return (
    <Wrapper top={top} overflow={overflow} heigth={height}>
      {createNFTimg()}
    </Wrapper>
  );
};

export default GalleryNFT;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: ${(props) => (props.heigth ? props.heigth : "303px")};
  top: ${(props) => props.top && props.top};
  //overflow:${(props) => props.overflow && props.overflow};
  @media (max-width: 1100px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 640px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 440px) {
    grid-template-columns: auto auto;
  } ;
`;

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding-left: 0;
  justify-items: center;
  align-items: flex-start;
  padding: 2px;
  @media (max-width: 1050px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 690px) {
    grid-template-columns: auto auto;
  } ;
`;

const NftBox = styled.div`
  position: relative;
  width: auto;
  height: auto;
  margin: 2px;
`;
const Vector = styled.div`
  position: relative;
  gap: 3px;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: transparent url(${(props) => props.background}) top center
    no-repeat;
  background-size: contain;
`;
const Number = styled.div`
  position: absolute;
  font-size: 14px;
  top: -3px;
  color: rgb(31 107 171);
  z-index: 2;
  z-index: 2;
`;
