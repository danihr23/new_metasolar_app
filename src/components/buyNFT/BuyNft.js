import React, { useState } from "react";
import styled from "styled-components/macro";
import nft from "../assets/nft.png";
import { useSelector } from "react-redux";
import useBuyToken from "../hook/useBuyToken";
import useTruncatedAddress from "../hook/useTruncatedAddress";
import { useDispatch } from "react-redux";
import { setResponseHandler } from "../reducers/userWalletAddresReducer";
const BuyNft = ({ myRef }) => {
  const dispatch = useDispatch();
  const [totalNft, setTotalNft] = useState(0);
  const { buyToken } = useBuyToken();
  const { connectWallet } = useTruncatedAddress();
  const userAddres = useSelector((state) => state.userAddres.value);
  const onClickIncrease = () => {
    if (totalNft >= 50) {
      return;
    } else {
      setTotalNft((prev) => prev + 1);
    }
  };
  const onClickDecrease = () => {
    if (totalNft <= 0) {
      return;
    } else {
      setTotalNft((prev) => prev - 1);
    }
  };

  const totalPrice = totalNft * 0.1;

  const onHandlerBuy = () => {
    userAddres
      ? totalNft > 0
        ? buyToken(userAddres, totalNft)
        : dispatch(
            setResponseHandler("Please select how many NFT you want to buy!")
          )
      : connectWallet();
  };

  return (
    <Wrapper ref={myRef}>
      <Title>Get your MetaSolar NFT</Title>
      <Text>Enter how many NFTs you would like tomint here</Text>
      <NftImgWrapper>
        <Image />
        <PriceText>
          Price per MetaSolar 0.01 BNB Public sale available 12.04.2022
        </PriceText>
      </NftImgWrapper>
      <AmountWrapper>
        <AmountConteiner>
          <AmountText>Amount</AmountText>
          <Input
            placeholder="50 max"
            disabled
            value={totalNft > 0 ? totalNft : ""}
          />
        </AmountConteiner>
        <ButtonsConteiner>
          <IncreaseButton onClick={onClickIncrease}>+</IncreaseButton>
          <DecreaaseButton onClick={onClickDecrease}>-</DecreaaseButton>
        </ButtonsConteiner>
      </AmountWrapper>
      <ToralPriceWrapper>
        <Price>Price</Price>
        <PriceIput> {totalPrice.toFixed(2)} BNB</PriceIput>
      </ToralPriceWrapper>
      <BuyBtn onClick={onHandlerBuy}>Buy</BuyBtn>
    </Wrapper>
  );
};
export default BuyNft;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  gap: 17px;
  z-index: 3;
  position: absolute;
  width: 27%;
  height: 67%;
  left: 51%;
  top: 29%;

  background: #ffffff;
  box-shadow: -10.8571px 9.04762px 10.8571px rgba(40, 52, 71, 0.05);
  border-radius: 10.8571px;

  @media (max-width: 1100px) {
    height: 59%;
    left: 49%;
    top: 30%;
    width: 23%;
    padding: 21px;
  }

  @media (max-width: 720px) {
    height: 56%;
    left: 48%;
    top: 22%;
    width: 21%;
    padding: 21px;
  }

  @media (max-width: 440px) {
    height: 43%;
    left: 44%;
    top: 16%;
    width: 19%;
    padding: 21px;
  }
`;
const Title = styled.div`
  width: 80%;
  height: 7%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  @media (max-width: 1100px) {
    font-size: 15px;
    line-height: 13px;
    width: 170px;
    font-weight: 600;
  }

  @media (max-width: 720px) {
    font-size: 11px;
    line-height: 9px;
    width: 125px;
    font-weight: 600;
  }

  @media (max-width: 440px) {
    font-size: 9px;
    line-height: 12px;
    width: 101px;
    font-weight: 600;
  }
`;
const Text = styled.div`
  width: 90%;
  height: 8%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
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

const NftImgWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18.0952px;
  gap: 9.05px;

  width: 93%;
  height: 21%;

  background: #ffffff;
  border: 0.904762px solid #969fa5;
  border-radius: 9.04762px;

  @media (max-width: 1100px) {
    height: 15%;
    padding: 10px;
    gap: 6px;
  }

  @media (max-width: 720px) {
    height: 13%;
    padding: 5px;
    gap: 3px;
  }

  @media (max-width: 440px) {
    height: 12%;
    padding: 5px;
    gap: 3px;
    position: relative;
    top: 11px;
  }
`;
const Image = styled.div`
  width: 24%;
  height: 65px;
  background: transparent url(${nft}) top center no-repeat;
  background-size: contain;
  @media (max-width: 1100px) {
    height: 45px;
    width: 100px;
  }

  @media (max-width: 720px) {
    height: 25px;
    width: 80px;
  }

  @media (max-width: 440px) {
    height: 15px;
    width: 60px;
  }
`;
const PriceText = styled.div`
  width: 73%;
  height: 62%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;

  color: #021018;
  @media (max-width: 1100px) {
    font-size: 11px;
    line-height: 13px;
    width: 111px;
    height: auto;
  }
  @media (max-width: 930px) {
    font-size: 10px;
    line-height: 11px;
    width: 111px;
    height: auto;
  }

  @media (max-width: 720px) {
    font-size: 5px;
    line-height: 8px;
    width: 80px;
    height: auto;
  }

  @media (max-width: 440px) {
    font-size: 4px;
    line-height: 5px;
    width: 60px;
    height: auto;
  }
`;
const AmountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 93%;
  height: 16%;
  @media (max-width: 1100px) {
    height: 18%;

    width: 100%;
  }

  @media (max-width: 720px) {
    height: 14%;

    width: 100%;
  }

  @media (max-width: 440px) {
    height: 18%;
    width: 100%;
    position: relative;
    top: 13px;
  }
`;

const DecreaaseButton = styled.div`
  position: relative;
  width: 50px;
  height: 26px;

  background: #fff1f1;
  border: 1px solid #a82c43;
  border-radius: 7.2381px 7.2381px 0px 0px;
  transform: rotate(-180deg);

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 23.5238px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  color: #a82c43;
  @media (max-width: 1100px) {
    font-size: 15px;
    line-height: 25px;
    width: 55px;
    height: 20px;
  }

  @media (max-width: 720px) {
    font-size: 12px;
    line-height: 24px;
    width: 37px;
    height: 15px;
  }

  @media (max-width: 440px) {
    font-size: 10px;
    line-height: 19px;
    width: 29px;
    height: 15px;
  }
`;
const IncreaseButton = styled.div`
  position: relative;
  width: 50px;
  height: 26px;

  background: #f4fff1;
  /* secondary button */

  border: 1px solid #3a712d;
  border-radius: 7.2381px 7.2381px 0px 0px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 23.5238px;
  line-height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  /* secondary button */

  color: #3a712d;
  @media (max-width: 1100px) {
    font-size: 15px;
    line-height: 25px;
    width: 55px;
    height: 20px;
  }

  @media (max-width: 720px) {
    font-size: 12px;
    line-height: 24px;
    width: 37px;
    height: 15px;
  }

  @media (max-width: 440px) {
    font-size: 10px;
    line-height: 19px;
    width: 29px;
    height: 15px;
  }
`;
const ButtonsConteiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  justify-content: center;
`;
const AmountConteiner = styled.div`
  position: relative;
  width: 81%;
  height: 100%;
  @media (max-width: 1100px) {
    position: relative;
    top: 5px;
    height: 84%;
    width: 135px;
  }

  @media (max-width: 930px) {
    position: relative;
    top: 5px;
    height: 84%;
    width: 107px;
  }

  @media (max-width: 720px) {
    position: relative;
    top: 1px;
    height: 92%;
    width: 84px;
    left: -4px;
  }

  @media (max-width: 440px) {
    position: relative;
    top: 0px;
    left: -4px;
    height: 100%;
    width: 55px;
  }
`;
const AmountText = styled.div`
  position: absolute;
  left: 0%;
  right: 80.22%;
  bottom: 81.81%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #acb5bd;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 25px;
  @media (max-width: 1100px) {
    font-size: 11px;
    line-height: 25px;
    width: 111px;
    height: auto;
  }
  @media (max-width: 930px) {
    font-size: 11px;
    line-height: 25px;
    width: 111px;
    height: auto;
  }

  @media (max-width: 720px) {
    font-size: 12px;
    line-height: 24px;
    width: 80px;
    height: auto;
  }

  @media (max-width: 440px) {
    font-size: 8px;
    line-height: 20px;
    width: 60px;
    height: auto;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 76%;
  top: 13%;
  background: #ffffff;
  border: 0.904762px solid #969fa5;
  border-radius: 7.2381px;
  padding: 10px;
  ::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height */

    color: #969fa5;
  }

  @media (max-width: 440px) {
    padding: 0;
  }
`;

const ToralPriceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 93%;
  height: 16%;
`;
const Price = styled.div`
  position: absolute;
  left: 0%;
  right: 88%;
  top: 0%;
  bottom: 81.81%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #acb5bd;
  @media (max-width: 1100px) {
    font-size: 11px;
    line-height: 25px;
    width: 111px;
    height: auto;
  }
  @media (max-width: 840px) {
    font-size: 11px;
    line-height: 25px;
    width: 111px;
    height: auto;
  }

  @media (max-width: 720px) {
    font-size: 12px;
    line-height: 24px;
    width: 80px;
    height: auto;
  }

  @media (max-width: 440px) {
    font-size: 8px;
    line-height: 20px;
    width: 60px;
    height: auto;
  }
`;

const PriceIput = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 87%;
  top: 23%;
  background: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 0.904762px solid #969fa5;
  border-radius: 7.2381px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  padding: 12px;
  /* identical to box height */

  color: #021018;

  @media (max-width: 1100px) {
    font-size: 13px;
    line-height: 25px;
    width: 100%;

    top: 21px;
    height: auto;
  }
  @media (max-width: 930px) {
    font-size: 14px;
    line-height: 25px;
    top: 23px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 720px) {
    font-size: 13px;
    line-height: 24px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 440px) {
    font-size: 8px;
    line-height: 20px;
    width: 100%;
    top: 18px;
    height: 33px;
  }
`;
const BuyBtn = styled.div`
  width: 48%;
  height: 10%;
  position: relative;
  top: 4%;
  background: #ff9920;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7.2381px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 1100px) {
    font-size: 13px;
    line-height: 25px;
    width: 50%;

    top: 21px;
    height: auto;
  }
  @media (max-width: 930px) {
    font-size: 14px;
    line-height: 25px;
    top: 23px;
    width: 53%;
    height: auto;
  }

  @media (max-width: 720px) {
    font-size: 13px;
    line-height: 24px;
    width: 58%;
    height: auto;
  }

  @media (max-width: 440px) {
    font-size: 8px;
    line-height: 20px;
    width: 78%;
    top: 7px;
    height: 22px;
  }
`;
