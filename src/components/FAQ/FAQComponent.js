import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import up from "../assets/up.png";
import down from "../assets/down.png";

const FAQComponent = ({ index, item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper key={index}>
      <InnerWrapper>
        <Content>
          <Title>{item.title}</Title>
          <Text isOpen={isOpen}>{item.data}</Text>
        </Content>
        <Up isOpen={isOpen} onClick={clickHandler} />
      </InnerWrapper>
    </Wrapper>
  );
};
export default FAQComponent;
const Wrapper = styled.div`
  display: flex;

  padding: 0px;
  gap: 10px;

  width: 96%;
  height: 87px;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  width: 100%;
  height: 82%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 10px;

  width: 95%;
  height: 70%;
`;

const Title = styled.div`
  width: 20%;
  height: 49%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  @media (max-width: 1100px) {
    font-size: 20px;
    line-height: 17px;
    width: 100%;
  }
  @media (max-width: 930px) {
    font-size: 18px;
    line-height: 17px;
    width: 100%;
  }

  @media (max-width: 720px) {
    font-size: 16px;
    line-height: 17px;
    width: 100%;
  }

  @media (max-width: 40px) {
    font-size: 13px;
    line-height: 14px;
    width: 100%;
  }
`;

const Text = styled.div`
  width: 95%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #0f1d32;

  ${({ isOpen }) =>
    isOpen
      ? css`
          margin: -1px 0px;
          height: 100%;
          position: relative;
          transition: 0.4s;
        `
      : css`

          position: relative;
          height: 0;
          overflow: hidden;
          transition: 1s;
          
};
        `};
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

const Up = styled.div`
  position: absolute;
  width: 3%;
  height: 4%;
  left: 85%;

  background: transparent url(${(props) => (props.isOpen ? down : up)}) top
    center no-repeat;
  background-size: contain;
`;
