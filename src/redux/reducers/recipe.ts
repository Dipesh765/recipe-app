import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  id: "",
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setIdOfRecipe : (state, action)=>{
        state.id = action.payload 
    }
  },
})

export const {setIdOfRecipe} = recipeSlice.actions

export default recipeSlice.reducer