import { createSlice } from "@reduxjs/toolkit"


export const smoothieSlice = createSlice({
    name: 'smoothie',
    initialState: {
        smoothies: [
            { name: 'Blue Monday', description: 'Fight the Monday Blues with this refreshing, fruity smoothie!', favourited: false, ingredients: 'apple juice (3cups) \n strawberries (50g) \n raspberry (65g) \n blueberries (to taste)' },
            { name: 'Coco for Coconut', description: 'Using coconut milk, make a very nice, creamy, tropical smoothie!', favourited: false, ingredients: 'Coconut milk (500ml) \n pineapple (50g) \n tequila (50ml) \n water (20mL)' },
            { name: 'Green Jersey', description: 'A fresh, green smoothie that helps you overcome the Blues', favourited: false, ingredients: 'Apple juice (300ml) \n kiwi (2pcs) \n coconut (30g) \n lime (1pc)' },
        ]
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
