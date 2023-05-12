import { createSlice } from "@reduxjs/toolkit"


export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkTheme: false,
        isSerif: false,
        fontIsLarge: false,
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.isDarkTheme = !state.isDarkTheme
        },
        toggleIsSerif: (state, action) => {
            state.isSerif = !state.isSerif;
        },
        toggleFontSize: (state, action) => {
            state.fontIsLarge = !state.fontIsLarge;
        }
    }
})
export const { toggleTheme, toggleIsSerif, toggleFontSize } = themeSlice.actions
export default themeSlice.reducer;
export const selectTheme = (state) => state.theme.isDarkTheme
export const selectIsSerif = (state) => state.theme.isSerif
export const selectFontIsLarge = (state) => state.theme.fontIsLarge
