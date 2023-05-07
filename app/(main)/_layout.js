import { Tabs } from 'expo-router'

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='browse' options={{ tabBarLabel: "Browse" }} />
            <Tabs.Screen name='favourites' options={{ tabBarLabel: "Favourites" }} />
            <Tabs.Screen name='scale' options={{ tabBarLabel: "Scale" }} />
            <Tabs.Screen name='preferences' options={{ tabBarLabel: "Prefs" }} />
            {/* Hides the index tab */}
            <Tabs.Screen name='index' options={{ href: null }} />
        </Tabs>
    )
}

export default Layout