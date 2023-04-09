import React from "react";
import styled from "styled-components/macro";
import logo from "../assets/logo.png";
import mediaIcon from "../assets/mediaIcon.png";
import twitterIcon from "../assets/twitterIcon.png";
import whiteTwitter from "../assets/whiteTwitter.png";
import whiteIcon from "../assets/whiteicon.png";
import logoWhite from "../assets/logoWhite.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { scrollToFaq, scrollToRoadmap } from "../hook/scrollHook";
import useTruncatedAddress from "../hook/useTruncatedAddress";

const Navigation = ({
  flexDirection,
  height,
  isWallet,
  isCompany,
  logoleft,
  color,
  footer,
}) => {
  const { connectWallet } = useTruncatedAddress();

  const userAddres = useSelector((state) => state.userAddres.value);

  const onClickHandler = () => {
    connectWallet();
  };

  return (
    <Wrapper flexDirection={flexDirection} height={height}>
      <Logo logoleft={logoleft} to={"/"} iswhite={footer} />
      <Menu>
        <NavTool to={"/About"} color={color}>
          About
        </NavTool>
        <NavTool to={"/Gallery"} color={color}>
          Gallery
        </NavTool>
        <NavTool to={"/"} onClick={scrollToRoadmap} color={color}>
          Roadmap
        </NavTool>
        <NavTool to={"/"} onClick={scrollToFaq} color={color}>
          FAQ
        </NavTool>
        <NavTool color={color}>Whitepaper</NavTool>
        {isWallet && (
          <Button onClick={onClickHandler}>
            {" "}
            {!userAddres ? "WALLET" : userAddres.substring(0, 8) + "..."}{" "}
          </Button>
        )}

        <MediaIcon background={footer ? whiteIcon : mediaIcon} />
        <MediaIcon
          background={footer ? whiteTwitter : twitterIcon}
          to={"https://twitter.com/?lang=en"}
        />
      </Menu>
      {isCompany && (
        <div style={{ color: "#7E91B0" }}>
          © 2022 Metasolar. All rights reserved
        </div>
      )}
    </Wrapper>
  );
};
export default Navigation;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  width: 94%;
  height: ${(props) => (props.height ? props.height : "5%")};
  left: 3%;
  top: 40px;
  @media (max-width: 1100px) {
    top: 30px;
  }

  @media (max-width: 640px) {
    top: 20px;
  }

  @media (max-width: 440px) {
    top: 20px;
  }
`;

const Logo = styled(Link)`
  width: 12%;
  height: 27px;
  position: relative;

  left: ${(props) => props.logoleft && props.logoleft};
  z-index: 2;
  background: transparent url(${(props) => (props.iswhite ? logoWhite : logo)})
    top center no-repeat;
  background-size: contain;
  @media (max-width: 1100px) {
    height: 20px;
  }

  @media (max-width: 640px) {
    height: 16px;
  }

  @media (max-width: 440px) {
    height: 12px;
    left: 9px;
    top: 4px;
  }
`;
const Menu = styled.div`
  width: 48%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  @media (max-width: 1100px) {
    width: 53%;
  }

  @media (max-width: 640px) {
    width: 62%;
  }

  @media (max-width: 440px) {
    width: 72%;
  }
`;
const NavTool = styled(Link)`
  text-decoration: none;
  width: auto;
  height: 17px;
  color: ${(props) => (props.color ? props.color : " #000000")};
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  @media (max-width: 1100px) {
    height: 14px;

    font-size: 10px;
    line-height: 13px;
  }

  @media (max-width: 640px) {
    height: 12px;

    font-size: 8px;
    line-height: 15px;
  }

  @media (max-width: 440px) {
    height: 10px;

    font-size: 6px;
    line-height: 12px;
  }
`;
const Button = styled.div`
  width: 70px;
  height: 26px;
  box-sizing: border-box;
  color: #3a712d;
  background: #fcfeff;
  border: 1px solid #3a712d;
  border-radius: 4.30769px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1100px) {
    width: 50px;
    height: 20px;
  }

  @media (max-width: 640px) {
    width: 40px;
    height: 18px;
    font-size: 7px;
  }

  @media (max-width: 440px) {
    width: 30px;
    height: 16px;
    font-size: 5px;
  }
`;
const MediaIcon = styled(Link)`
  width: 24px;
  height: 19px;

  background: transparent url(${(props) => props.background}) top center
    no-repeat;
  background-size: contain;
  @media (max-width: 1100px) {
    width: 20px;
    height: 15px;
  }

  @media (max-width: 640px) {
    width: 18px;
    height: 13px;
  }

  @media (max-width: 440px) {
    width: 16px;
    height: 11px;
  }
`;
