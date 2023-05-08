import { Icon } from '@rneui/base'
import { DarkTheme, ThemeProvider, useTheme } from '@react-navigation/native'
import { Tabs } from 'expo-router'
import { MyLightTheme } from './util/constants'
import { useColorScheme } from 'react-native'

const Layout = () => {
    // first, get user's preferences
    const scheme = useColorScheme()

    const { colors } = useTheme();

    return (
        <ThemeProvider value={(scheme === 'light') ? MyLightTheme : DarkTheme}>
            <Tabs screenOptions={{ tabBarActiveTintColor: "#123456", tabBarIconStyle: { color: '#123456' }, headerTitleAlign: 'center' }}>
                <Tabs.Screen name='browse' options={{
                    headerTitle: 'Browse',
                    tabBarLabel: "Browse",
                    tabBarIcon: (tabInfo) => <Icon name='search' type='material' color={tabInfo.focused ? colors.primary : 'grey'} />,
                }} />
                <Tabs.Screen name='favourites' options={{
                    headerTitle: 'Favourites',

                    tabBarLabel: "Favourites", tabBarIcon: (tabInfo) => <Icon name='star-outline' type='material-community' color={tabInfo.focused ? colors.primary : 'grey'} />,
                }} />
                <Tabs.Screen name='scale' options={{
                    headerTitle: 'Weight Converter',

                    tabBarLabel: "Scale", tabBarIcon: (tabInfo) => <Icon name='scale-balance' type='material-community' color={tabInfo.focused ? colors.primary : 'grey'} />,
                }} />
                <Tabs.Screen name='preferences' options={{
                    headerTitle: 'Preferences',
                    tabBarLabel: "Prefs", tabBarIcon: (tabInfo) => <Icon name='tune' type='material' color={tabInfo.focused ? colors.primary : 'grey'} />,
                }} />
                {/* Hides the index tab */}
                <Tabs.Screen name='index' options={{ href: null }} />
            </Tabs>
        </ThemeProvider>
    )
}

export default Layout