import Web3 from "web3";
import MetaSolarNFT from "../assets/MetaSolarNFT.json";

import { useDispatch } from "react-redux";
import { setResponseHandler } from "../reducers/userWalletAddresReducer";
const useBuyToken = () => {
  const dispatch = useDispatch();

  const buyToken = async (userAddress, nftCount) => {
    try {
      const web3 = new Web3(window.ethereum);
      const contractAddress = "0x6364Cc28fe3A66e83f8ff6B6e15001a6AC556611";
      const contractAbi = MetaSolarNFT.abi;
      const contract = new web3.eth.Contract(contractAbi, contractAddress);
      const mintQuantity = nftCount;
      const price = (0.1 * nftCount).toString();
      const valueToSend = web3.utils.toWei(price, "ether");

      const tx = await contract.methods
        .buyTokens(userAddress, mintQuantity)
        .send({ from: userAddress, value: valueToSend });

      dispatch(setResponseHandler(tx.message));
    } catch (err) {
      console.error("Error:", err.message);
      dispatch(setResponseHandler(err.message));
    }
  };

  return { buyToken };
};

export default useBuyToken;
