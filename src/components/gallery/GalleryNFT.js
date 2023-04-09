import React from "react";
import styled from "styled-components/macro";

const GalleryNFT = ({ nftCount, top, overflow, height }) => {
  const nft = Array.from({ length: nftCount }, (_, i) => i + 1);
  const createNFTimg = () => {
    const resultsRender = [];

    const x = nft.length >= 80 ? 80 : nft.length;

    for (var i = 0; i < nft.length; i += x) {
      const diff = i === 0 ? x : nft.length - i > 80 ? 80 : nft.length - i;
      resultsRender.push(
        <BoxWrapper key={Math.random()}>
          {nft
            .slice(i, i + diff / 5)
            // eslint-disable-next-line no-loop-func
            .map((img, index) => (
              <NftBox key={Math.random()}>
                {nft.slice(i, i + 5).map((img, index) => (
                  <Vector
                    key={Math.random()}
                    index={index}
                    background={
                      index % 2 === 0
                        ? "#5E9B9B"
                        : index % 3 === 0
                        ? "#70B1A2"
                        : "#8AD1AC"
                    }
                  />
                ))}
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
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 2px;
  margin: 2px;
`;
const Vector = styled.div`
  position: relative;
  gap: 3px;
  width: 12px;
  height: 70px;
  background: ${(props) => props.background};
  border-top-left-radius: ${(props) => props.index === 0 && "7"}px;
  border-bottom-left-radius: ${(props) => props.index === 0 && "7"}px;
  border-top-right-radius: ${(props) => props.index === 4 && "8"}px;
  border-bottom-right-radius: ${(props) => props.index === 4 && "8"}px;
`;
