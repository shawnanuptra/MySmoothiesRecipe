
import { DarkTheme, useTheme } from "@react-navigation/native";
import { Avatar } from "@rneui/themed";
import { useSearchParams } from "expo-router"
import { SafeAreaView, Text, View } from "react-native"
import { useSelector, useDispatch } from "react-redux";
import { selectSmoothie, toggleAsFav } from "../../redux/smoothieSlice";
import { Divider } from "@rneui/base";
import { selectFontIsLarge, selectIsSerif, selectTheme } from "../../redux/themeSlice";
import { MyLightTheme } from "../../util/constants";

const ItemPage = () => {
    // try catch because router.back() rerenders the params for some reason
    try {
        // ListItem has router.push(/items, params). useSearchParams() is used to get the parameters
        const params = useSearchParams();

        const dispatch = useDispatch();
        const smoothies = useSelector(selectSmoothie)
        // get smoothie obj in smoothies[], where its name is same as params.name
        const smoothie = smoothies.find(el => el.name === params.name)

        const isSerif = useSelector(selectIsSerif)
        const fontIsLarge = useSelector(selectFontIsLarge)
        const isDarkTheme = useSelector(selectTheme)
        const { colors } = (isDarkTheme) ? DarkTheme : MyLightTheme;

        return (
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 30, backgroundColor: colors.background }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 15 }}>
                    <Text style={{ fontSize: (fontIsLarge) ? 28 : 24, fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}
                    >
                        {/* Capitalise first letter */}
                        {smoothie.name.charAt(0).toUpperCase() + smoothie.name.slice(1)}
                    </Text>
                </View>
                {/* Change icon style based on if smoothie is favourited */}
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

                {/* DESCRIPTION  */}
                <View style={{ marginVertical: 30 }}>
                    <Text style={{ fontSize: (fontIsLarge) ? 26 : 22, fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}>
                        Description
                    </Text>
                    <Text style={{ color: colors.text, fontFamily: (isSerif) ? 'serif' : 'sans-serif', fontSize: (fontIsLarge) ? 18 : 16 }}>
                        {smoothie.description}
                    </Text>
                </View>

                {/* INGREDIENTS */}
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