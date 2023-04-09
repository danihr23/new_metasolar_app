import React, { useEffect, useState } from "react";
import moment from "moment";
import styled from "styled-components/macro";

const CountdownMonths = () => {
  const targetTime = moment("2023-05-01");
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Title>Countdown to the giveaway</Title>
      <Text>All the Lorem Ipsum generators on the Internet.</Text>
      <TimerWrapper>
        <span>{timeBetween.months()}m </span>
        <span>{timeBetween.days()}d </span>
        <span>{timeBetween.hours()}h </span>
        <span>{timeBetween.minutes()}min </span>
        <span>{timeBetween.seconds()}s </span>
      </TimerWrapper>
    </Wrapper>
  );
};
export default CountdownMonths;
const Wrapper = styled.div`
  box-sizing: border-box;
  align-items: center;
  padding: 10px 20px;
  position: absolute;
  width: 36%;
  height: 163px;
  left: 4%;
  top: 506px;
  background: #daf5d0;
  border: 1px solid #a6cc97;
  border-radius: 20px;
  @media (max-width: 1100px) {
    width: 42%;
    top: 470px;
  }
  @media (max-width: 930px) {
    width: 38%;
    height: 146px;
    top: 450px;
  }

  @media (max-width: 720px) {
    width: 37%;
    top: 402px;
    height: 104px;
  }

  @media (max-width: 440px) {
    width: 40%;
    top: 362px;
    height: 82px;
    left: 2%;
  }
`;
const Title = styled.div`
  width: auto;
  height: 28%;
  margin-top: 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #283447;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 1100px) {
    font-size: 28px;
    line-height: 28px;
    font-weight: 600;
    width: 100%;
    height: auto;
  }
  @media (max-width: 930px) {
    font-size: 20px;
    line-height: 17px;
    font-weight: 600;
    margin-top: 11px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 720px) {
    font-size: 15px;
    line-height: 14px;
    font-weight: 600;
    margin-top: 0;
    width: 100%;
    height: auto;
  }

  @media (max-width: 440px) {
    font-size: 11px;
    line-height: 9px;
    width: 117px;
    font-weight: 600;
    margin-top: 0;
    height: auto;
  }
`;
const Text = styled.div`
  width: auto;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #283447;
  flex: none;
  order: 1;
  flex-grow: 0;
  @media (max-width: 1100px) {
    font-size: 18px;
    line-height: 28px;
    width: 100%;
    margin-top: 8px;
    height: auto;
  }
  @media (max-width: 930px) {
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    margin-top: 8px;
    height: auto;
  }

  @media (max-width: 720px) {
    font-size: 13px;
    line-height: 11px;
    width: 100%;
    margin-top: 8px;
    height: auto;
  }

  @media (max-width: 440px) {
    font-size: 11px;
    line-height: 9px;
    width: 117px;
    margin-top: 8px;
    height: auto;
  }
`;
const TimerWrapper = styled.div`
  width: auto;
  height: 20%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #283447;
  @media (max-width: 1100px) {
    font-size: 34px;
    line-height: 44px;
    width: 100%;
    margin-top: 9px;
    height: auto;
  }
  @media (max-width: 930px) {
    font-size: 24px;
    line-height: 40px;
    width: 100%;
    margin-top: 5px;
    height: auto;
  }

  @media (max-width: 720px) {
    font-size: 14px;
    line-height: 7px;
    width: 100%;
    margin-top: 13px;
    height: auto;
  }

  @media (max-width: 440px) {
    font-size: 11px;
    line-height: 9px;
    width: 117px;
    margin-top: 9px;
    height: auto;
  }
`;
