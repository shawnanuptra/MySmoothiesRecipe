import { createSlice } from "@reduxjs/toolkit"


export const smoothieSlice = createSlice({
    name: 'smoothie',
    initialState: {
        smoothies: []
    },
    reducers: {
        addSmoothie: (state, action) => {
            state.smoothies.push(action.payload)
        }
    }
})
export const { addSmoothie } = smoothieSlice.actions
export default smoothieSlice.reducer;
export const selectSmoothie = (state) => state.smoothie.smoothies
