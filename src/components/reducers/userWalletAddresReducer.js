import {createSlice} from  '@reduxjs/toolkit'



const wallet = {
    userAddres:'',
    resHandler:'',
}

export const counterSlice=createSlice({
    name:'userWalletAddres',
     initialState:wallet,
    reducers:{
        setUserAddres:(state,actions)=>{
            state.value =actions.payload 
        },
        setResponseHandler:(state,actions)=>{
            state.resHandler=actions.payload
        }
        
    }
})
export const {setUserAddres,setResponseHandler}= counterSlice.actions;
export default counterSlice.reducer;