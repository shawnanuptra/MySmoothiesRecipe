export const SCAFFOLD_BG_COLOR_LIGHT = '#E1FFD1'
export const MyLightTheme = {
    dark: false,
    colors: {
        primary: 'green',
        background: 'white',
        card: '#E1FFD1',
        text: 'black',
        border: '#93ff96',
        notification: 'red',
    }
}

// would rather use interface; but only available in TypeScript
export const Smoothie = {
    name: null,
    description: null,
    imageUrl: null,
    ingredients: null,
    favourited: false
}