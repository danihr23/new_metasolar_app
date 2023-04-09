import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setResponseHandler } from "../reducers/userWalletAddresReducer";
const ResponseModal = () => {
  const response = useSelector((state) => state.userAddres.resHandler);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(setResponseHandler(""));
  };

  return (
    <Wrapper>
      <Response>{response}</Response>
      <Button onClick={onClickHandler}>OK</Button>
    </Wrapper>
  );
};
export default ResponseModal;
const Wrapper = styled.div`
  width: 40%;
  height: 150px;
  position: absolute;
  top: 400px;
  left: 30%;
  z-index: 4;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-around;
  align-items: center;
  background: #98949d;
  border-radius: 11px;
  @media (max-width: 1100px) {
    width: 40%;
    top: 233px;
    height: 158px;
    left: 32%;
  }
  @media (max-width: 930px) {
    width: 58%;
    top: 156px;
    height: 142px;
    left: 22%;
  }

  @media (max-width: 720px) {
    width: 57%;
    top: 156px;
    height: 107px;
    left: 12%;
  }

  @media (max-width: 440px) {
    width: 57%;
    top: 156px;
    height: 107px;
    left: 12%;
  }
`;

const Response = styled.div`
  width: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  @media (max-width: 1100px) {
    font-size: 21px;
    line-height: 28px;
    width: 90%;
  }
  @media (max-width: 930px) {
    font-size: 21px;
    line-height: 22px;
    width: 90%;
  }

  @media (max-width: 720px) {
    font-size: 17px;
    line-height: 19px;
    width: 90%;
  }

  @media (max-width: 440px) {
    font-size: 17px;
    line-height: 20px;
    width: 90%;
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
    font-size: 13px;
    line-height: 14px;
    width: 31%;
  }
  @media (max-width: 930px) {
    font-size: 13px;
    line-height: 14px;
    width: 32%;
  }

  @media (max-width: 720px) {
    font-size: 13px;
    line-height: 14px;
    width: 43%;
  }

  @media (max-width: 440px) {
    font-size: 13px;
    line-height: 14px;
    width: 43%;
  }
`;
