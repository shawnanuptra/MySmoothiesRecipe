import { createSlice } from "@reduxjs/toolkit"


export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        favourites: []
    },
    reducers: {
        addToFavourites: (state, action) => {
            state.favourites.push(action.payload)
        },
        removeFromFavourites: (state, action) => {
            let index = state.favourites.indexOf(action.payload)
            //remove the specified favourite
            state.favourites.splice(index, 1)
        }
    }
})
export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions
export default favouritesSlice.reducer;