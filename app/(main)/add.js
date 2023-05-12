import { useTheme } from "@react-navigation/native"
import { Input, Button } from "@rneui/themed"
import { useRouter } from "expo-router"
import { useState } from "react"
import { SafeAreaView, ScrollView } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { addSmoothie } from "../../redux/smoothieSlice"
import { selectIsSerif } from "../../redux/themeSlice"

const Add = () => {
    const { colors } = useTheme();
    const router = useRouter();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState('')
    const isSerif = useSelector(selectIsSerif)
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={{ flex: 1, padding: 30 }}>
            <ScrollView>

                <Input
                    onChangeText={val => setName(val)}
                    defaultValue={''}
                    value={name}
                    label='Name'
                    labelStyle={{ fontSize: 24, fontWeight: 'normal', color: 'black', fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}
                    inputStyle={{ fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}

                />

                <Input
                    onChangeText={val => setDescription(val)}
                    defaultValue={''}
                    value={description}
                    multiline
                    numberOfLines={3}
                    label='Description'
                    labelStyle={{ fontSize: 24, fontWeight: 'normal', color: 'black', fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}
                    inputStyle={{ fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}

                />

                <Input
                    onChangeText={val => setIngredients(val)}
                    defaultValue={''}
                    value={ingredients}
                    multiline
                    numberOfLines={5}
                    label='Ingredients'
                    labelStyle={{ fontSize: 24, fontWeight: 'normal', color: 'black', fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}
                    inputStyle={{ fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}
                />


                <Button title={'Add Smoothie'}
                    titleStyle={(isSerif) ? 'serif' : 'sans-serif'}
                    color={colors.primary} containerStyle={{ borderRadius: 50 }} buttonStyle={{ padding: 20 }}
                    onPress={() => { dispatch(addSmoothie({ 'name': name, 'description': description, 'ingredients': ingredients, 'favourited': false })); router.back() }}
                    style={{ marginTop: 50 }}
                />
            </ScrollView>

        </SafeAreaView >
    )
}

export default Add