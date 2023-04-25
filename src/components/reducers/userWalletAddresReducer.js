import { createSlice } from "@reduxjs/toolkit";

const wallet = {
  userAddres: "",
  resHandler: "",
  ownedTokenIds: [],
};

export const counterSlice = createSlice({
  name: "userWalletAddres",
  initialState: wallet,
  reducers: {
    setUserAddres: (state, actions) => {
      state.value = actions.payload;
    },
    setResponseHandler: (state, actions) => {
      state.resHandler = actions.payload;
    },
    setGetOwnedTokenIds: (state, actions) => {
      state.ownedTokenIds = actions.payload;
    },
  },
});
export const { setUserAddres, setResponseHandler, setGetOwnedTokenIds } =
  counterSlice.actions;
export default counterSlice.reducer;
