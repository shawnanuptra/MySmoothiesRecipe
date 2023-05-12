import { useTheme } from "@react-navigation/native"
import { FAB } from "@rneui/themed"
import { useRouter } from "expo-router"
import { FlatList, SafeAreaView, View, Text } from "react-native"
import ListTile from "../../components/ListTile"
import { useSelector } from "react-redux"
import { selectSmoothie } from "../../redux/smoothieSlice"

const Browse = () => {
    const router = useRouter();
    const smoothies = useSelector(selectSmoothie);
    const { dark, colors } = useTheme();
    return (
        <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
            {/* FlatList from storage of 'Menu Items' */}
            <View>
                <FlatList
                    data={smoothies}
                    renderItem={({ item, index }) => <ListTile item={item} />}
                    keyExtractor={smoothie => smoothie.name}
                />
            </View>
            <FAB
                icon={{ name: 'add', color: 'white' }}
                size="large"
                style={{ position: "absolute", bottom: 30, right: 30 }}
                onPress={() => router.push('/add')}
                color={dark ? 'green' : ''}
            />
        </SafeAreaView >
    )
}

export default Browse