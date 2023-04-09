import Web3 from "web3";
import { useDispatch } from "react-redux";
import {
  setUserAddres,
  setResponseHandler,
} from "../reducers/userWalletAddresReducer";

const useTruncatedAddress = () => {
  const dispatch = useDispatch();

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        // Prompt user to connect wallet
        await window.ethereum.enable();
        // Get user account address
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();

        // Dispatch the user's account address
        dispatch(setUserAddres(accounts[0]));
      } else {
        window.location.href = "https://metamask.io/download.html";
      }
    } catch (err) {
      console.error(err);
      dispatch(setResponseHandler(err.message));
    }
  };

  return { connectWallet };
};

export default useTruncatedAddress;
