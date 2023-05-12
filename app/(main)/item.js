
import { useTheme } from "@react-navigation/native";
import { Avatar } from "@rneui/themed";
import { useSearchParams } from "expo-router"
import { SafeAreaView, Text, View } from "react-native"
import { useSelector, useDispatch } from "react-redux";
import { selectSmoothie, toggleAsFav } from "../../redux/smoothieSlice";
import { Divider } from "@rneui/base";
import { selectFontIsLarge, selectIsSerif } from "../../redux/themeSlice";

const ItemPage = () => {
    // try catch because router.back() rerenders the params for some reason
    try {
        const { colors } = useTheme();
        const params = useSearchParams();
        const dispatch = useDispatch();
        const smoothies = useSelector(selectSmoothie)
        const smoothie = smoothies.find(el => el.name === params.name)
        const isSerif = useSelector(selectIsSerif)
        const fontIsLarge = useSelector(selectFontIsLarge)
        return (
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 30 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 15 }}>
                    <Text style={{ fontSize: (fontIsLarge) ? 28 : 24, fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}
                    >{smoothie.name.charAt(0).toUpperCase() + smoothie.name.slice(1)}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>

                    <Avatar
                        onPress={() => dispatch(toggleAsFav(smoothie))}
                        rounded
                        size={40}
                        icon={{ name: (smoothie.favourited) ? 'heart' : 'heart-outline', type: 'material-community', color: 'green' }}
                        containerStyle={{ position: "absolute", bottom: 0, right: 0, borderColor: 'green', borderWidth: 1, backgroundColor: (smoothie.favourited) ? colors.card : colors.background }}
                    />
                </View>
                <Divider />
                <View style={{ marginVertical: 30 }}>
                    <Text style={{ fontSize: (fontIsLarge) ? 26 : 22, fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}>
                        Description
                    </Text>
                    <Text style={{ color: colors.text, fontFamily: (isSerif) ? 'serif' : 'sans-serif', fontSize: (fontIsLarge) ? 18 : 16 }}>
                        {smoothie.description}
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: (fontIsLarge) ? 26 : 22, fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}>
                        Ingredients
                    </Text>
                    <Text style={{ fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text, fontSize: (fontIsLarge) ? 18 : 16 }}>
                        {smoothie.ingredients}
                    </Text>
                </View>
            </SafeAreaView>
        )
    } catch (error) {
        return (<SafeAreaView>
            <Text>{error.toString()}</Text>
        </SafeAreaView>)
    }

}

export default ItemPage