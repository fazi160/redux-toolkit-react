import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count1 : 0
}
const couterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment:(state,action)=>{
            state.count1 = state.count1 + 1
        },

        decrement:(state,action)=>{
            state.count1 = state.count1 - 1
        }
    }
})

export default couterSlice.reducer
export const {increment, decrement} = couterSlice.actions