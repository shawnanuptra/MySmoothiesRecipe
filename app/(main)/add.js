import { DarkTheme, useTheme } from "@react-navigation/native"
import { Input, Button } from "@rneui/themed"
import { useRouter } from "expo-router"
import { useState } from "react"
import { SafeAreaView, ScrollView } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { addSmoothie, selectSmoothie } from "../../redux/smoothieSlice"
import { selectFontIsLarge, selectIsSerif, selectTheme } from "../../redux/themeSlice"
import { MyLightTheme } from "../../util/constants"

const Add = () => {
    const router = useRouter();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState('')
    const isSerif = useSelector(selectIsSerif)
    const fontIsLarge = useSelector(selectFontIsLarge)
    const isDarkTheme = useSelector(selectTheme)
    const { colors } = (isDarkTheme) ? DarkTheme : MyLightTheme;
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={{ flex: 1, padding: 30, backgroundColor: colors.background }}>
            {/* Scroll View, just in case the form gets too long */}
            <ScrollView>

                <Input
                    onChangeText={val => setName(val)}
                    defaultValue={''}
                    value={name}
                    label='Name'
                    labelStyle={{ fontSize: (fontIsLarge) ? 26 : 22, fontWeight: 'normal', color: 'black', fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}
                    inputStyle={{ fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text, fontSize: (fontIsLarge) ? 22 : 18 }}
                />

                <Input
                    onChangeText={val => setDescription(val)}
                    defaultValue={''}
                    value={description}
                    multiline
                    numberOfLines={3}
                    label='Description'
                    labelStyle={{ fontSize: (fontIsLarge) ? 26 : 22, fontWeight: 'normal', color: 'black', fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}
                    inputStyle={{ fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text, fontSize: (fontIsLarge) ? 22 : 18 }}
                />

                <Input
                    onChangeText={val => setIngredients(val)}
                    defaultValue={''}
                    value={ingredients}
                    multiline
                    numberOfLines={5}
                    label='Ingredients'
                    labelStyle={{ fontSize: (fontIsLarge) ? 26 : 22, fontWeight: 'normal', color: 'black', fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}
                    inputStyle={{ fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text, fontSize: (fontIsLarge) ? 22 : 18 }}
                />


                <Button
                    title={'Add Smoothie'}
                    titleStyle={{
                        fontFamily: (isSerif) ? 'serif' : 'sans-serif',
                        fontSize: (fontIsLarge) ? 20 : 16
                    }}
                    color={'green'}
                    containerStyle={{ borderRadius: 50 }}
                    buttonStyle={{ padding: 20 }}
                    onPress={() => {
                        // Save smoothie to redux, then go back to /browse
                        dispatch(addSmoothie({ 'name': name, 'description': description, 'ingredients': ingredients, 'favourited': false }));
                        router.back()
                    }}
                    style={{ marginTop: 50 }}
                />
            </ScrollView>

        </SafeAreaView >
    )
}

export default Add