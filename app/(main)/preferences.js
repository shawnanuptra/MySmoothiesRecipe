import { Link, Tabs } from "expo-router"
import { SafeAreaView, Text, View } from "react-native"

const Preferences = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
            <Tabs.Screen
                options={
                    {
                        headerTitle: "Preferences",
                        headerShadowVisible: false,
                    }
                }
            >
                <View>
                    <Text>Pref Screen</Text>
                </View>
            </Tabs.Screen>
        </SafeAreaView>
    )
}

export default Preferences