import { configureStore } from "@reduxjs/toolkit";
import  recipeSlice from "./reducers/recipe";
export const store = configureStore({
    reducer: {
        recipe: recipeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch