
import { useTheme } from "@react-navigation/native";
import { Avatar } from "@rneui/themed";
import { useSearchParams } from "expo-router"
import { SafeAreaView, Text, View } from "react-native"
import { useSelector, useDispatch } from "react-redux";
import { selectSmoothie, toggleAsFav } from "../../redux/smoothieSlice";
import { Divider } from "@rneui/base";

const ItemPage = () => {
    // try catch because router.back() rerenders the params for some reason
    try {
        const { colors } = useTheme();
        const params = useSearchParams();
        const dispatch = useDispatch();
        const smoothies = useSelector(selectSmoothie)
        const smoothie = smoothies.find(el => el.name === params.name)
        return (
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 30 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 15 }}>
                    <Text style={{ fontSize: 24, fontFamily: (isSerif) ? 'serif' : 'sans-serif' }}
                    >{smoothie.name.charAt(0).toUpperCase() + smoothie.name.slice(1)}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>

                    <Avatar
                        onPress={() => dispatch(toggleAsFav(smoothie))}
                        rounded
                        size={40}
                        icon={{ name: (smoothie.favourited) ? 'heart' : 'heart-outline', type: 'material-community', color: colors.primary }}
                        containerStyle={{ position: "absolute", bottom: 0, right: 0, borderColor: colors.primary, borderWidth: 1, backgroundColor: (smoothie.favourited) ? colors.card : colors.background }}
                    />
                </View>
                <Divider />
                <View style={{ marginVertical: 30 }}>
                    <Text style={{ fontSize: 22, fontFamily: (isSerif) ? 'serif' : 'sans-serif' }}>
                        Description
                    </Text>
                    <Text>
                        {smoothie.description}
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 22, fontFamily: (isSerif) ? 'serif' : 'sans-serif' }}>
                        Ingredients
                    </Text>
                    <Text style={{ fontFamily: (isSerif) ? 'serif' : 'sans-serif' }}>
                        {smoothie.ingredients}
                    </Text>
                </View>
            </SafeAreaView>
        )
    } catch (error) {
        return (<SafeAreaView>
            <Text>LOL</Text>
        </SafeAreaView>)
    }

}

export default ItemPage