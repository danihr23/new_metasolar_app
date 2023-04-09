import {configureStore} from  '@reduxjs/toolkit'
import userWalletAddresReducer from '../reducers/userWalletAddresReducer'

 export const store = configureStore ({
    reducer:{
        userAddres:userWalletAddresReducer,
     
    }
})
