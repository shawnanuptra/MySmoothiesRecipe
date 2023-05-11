import smoothieReducer from "./smoothieSlice";
import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favouritesSlice";
import themeReducer from './themeSlice'

export default configureStore({
    reducer: {
        smoothie: smoothieReducer,
        favourites: favouritesReducer,
        theme: themeReducer,
    },
})