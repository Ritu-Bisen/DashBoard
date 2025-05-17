import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGymMemberApi } from "../../Api/gymApi/gymMemberApi";

export const getGymMember=createAsyncThunk("member/fetch",async (sellerDetails)=>{
    const gymMember = await fetchGymMemberApi(sellerDetails);
    return gymMember;
})

const gymMemberSlice = createSlice({
    name:"member",
    initialState:{
        member:[],
        loading:false,
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getGymMember.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getGymMember.fulfilled,(state,action)=>{
        state.member=action.payload;
       })
       .addCase(getGymMember.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default gymMemberSlice.reducer;