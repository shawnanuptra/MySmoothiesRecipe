import { DarkTheme, useTheme } from "@react-navigation/native"
import { FAB } from "@rneui/themed"
import { useRouter } from "expo-router"
import { FlatList, SafeAreaView, View, Text } from "react-native"
import ListTile from "../../components/ListTile"
import { useSelector } from "react-redux"
import { selectSmoothie } from "../../redux/smoothieSlice"
import { selectTheme } from "../../redux/themeSlice"
import { MyLightTheme } from "./util/constants"

const Browse = () => {
    const router = useRouter();
    const smoothies = useSelector(selectSmoothie);
    const isDarkTheme = useSelector(selectTheme);
    const { colors } = (isDarkTheme) ? DarkTheme : MyLightTheme;

    return (
        <SafeAreaView style={{ flex: 1, flexGrow: 1, backgroundColor: colors.background }}>
            <View>
                <FlatList
                    data={smoothies}
                    renderItem={({ item }) => <ListTile item={item} />}
                    keyExtractor={smoothie => smoothie.name}
                />
            </View>
            <FAB
                icon={{ name: 'add', color: 'white' }}
                size="large"
                style={{ position: "absolute", bottom: 30, right: 30 }}
                onPress={() => router.push('/add')}
                color={isDarkTheme ? 'green' : ''}
            />
        </SafeAreaView >
    )
}

export default Browse