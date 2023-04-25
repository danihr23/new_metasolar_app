import Web3 from "web3";
import MetaSolarNFT from "../assets/MetaSolarNFT.json";

import { useDispatch } from "react-redux";
import { setGetOwnedTokenIds } from "../reducers/userWalletAddresReducer";
const useGetOwnedTokenIds = () => {
  const dispatch = useDispatch();

  const getOwnedTokenIds = async (userAddress, nftCount) => {
    try {
      const web3 = new Web3(window.ethereum);
      const contractAddress = "0xb764fC41c0E4e67c29D18bd5EFFE187688d6060C";
      const contractAbi = MetaSolarNFT.abi;
      const contract = new web3.eth.Contract(contractAbi, contractAddress);

      const tx = await contract.methods
        .onwedTokens(userAddress)
        .call({ from: userAddress });

      dispatch(setGetOwnedTokenIds(tx));
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  return { getOwnedTokenIds };
};

export default useGetOwnedTokenIds;
