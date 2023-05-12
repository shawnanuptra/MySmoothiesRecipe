import { createSlice } from "@reduxjs/toolkit"


export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light',
        isSerif: false,
        fontIsLarge: false,
    },
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload
        },
        toggleIsSerif: (state, action) => {
            state.isSerif = !state.isSerif;
        },
        toggleFontSize: (state, action) => {
            state.fontIsLarge = !state.fontIsLarge;
        }
    }
})
export const { changeTheme, toggleIsSerif, toggleFontSize } = themeSlice.actions
export default themeSlice.reducer;
export const selectTheme = (state) => state.theme.theme
export const selectIsSerif = (state) => state.theme.isSerif
export const selectFontIsLarge = (state) => state.theme.fontIsLarge
