import { createSlice } from "@reduxjs/toolkit"


const gptSlice =createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        gptMovies:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearchView:(state)=>{
           state.showGptSearch=!state.showGptSearch
        },
        addGptMovie:(state,action)=>{
            const {movieNames,movieResult}=action.payload
            state.gptMovies=movieResult
            state.movieNames=movieNames
        }
    }
})
export const {toggleGptSearchView,addGptMovie}=gptSlice.actions
export default gptSlice.reducer