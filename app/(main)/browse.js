import { Link, Tabs } from "expo-router"
import { SafeAreaView, Text, View } from "react-native"

const Browse = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
            <Tabs.Screen
                options={
                    {
                        headerTitle: "Browse",
                        headerShadowVisible: false,
                    }
                }
            >
                <View>
                    <Text>Testing pls</Text>
                </View>
            </Tabs.Screen>
        </SafeAreaView>
    )
}

export default Browse