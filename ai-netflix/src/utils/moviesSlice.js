import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        popular:null,
        trailer:null,
        trending:null
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload;
    },
        addTrailer:(state,action)=>{
            state.trailer=action.payload;
        },
        addPopular:(state,action)=>{
            state.popular=action.payload;
        },
        addTrending:(state,action)=>{
            state.trending=action.payload
        }
}
})
export const {addNowPlaying,addTrailer,addPopular,addTrending}=moviesSlice.actions;
export default moviesSlice.reducer;