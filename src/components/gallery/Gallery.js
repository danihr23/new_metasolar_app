import React from "react";
import HomePageGallery from "./HomePageGallery";
import styled from "styled-components/macro";
import GalleryNFT from "./GalleryNFT";
import Footer from "../footer/Footer";
import { scrollByPosition } from "../hook/scrollHook";
const Gallery = () => {
  const onClick = () => {
    scrollByPosition(200);
  };
  return (
    <Wrapper>
      <HomePageGallery height="206px" width="64%" position="relative" />
      <GalleryNFT nftCount={5000} position="relative" height="auto" />
      <Footer position="relative" onClickBuy={onClick} />
    </Wrapper>
  );
};
export default Gallery;
const Wrapper = styled.div`
  width: 100%;

  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: stretch;
  align-items: center;
  gap: 64px;
  top: 200px;
`;
