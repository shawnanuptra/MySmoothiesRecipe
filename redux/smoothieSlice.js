import { createSlice } from "@reduxjs/toolkit"


export const smoothieSlice = createSlice({
    name: 'smoothie',
    initialState: {
        smoothies: []
    },
    reducers: {
        addSmoothie: (state, action) => {
            state.smoothies.push(action.payload)
        },
        toggleAsFav: (state, action) => {
            const index = state.smoothies.findIndex((smoothie) => smoothie.name === action.payload.name);
            state.smoothies[index] = {
                ...state.smoothies[index],
                favourited: !state.smoothies[index].favourited
            }
        },
    }
})
export const { addSmoothie, toggleAsFav } = smoothieSlice.actions
export default smoothieSlice.reducer;
export const selectSmoothie = (state) => state.smoothie.smoothies
