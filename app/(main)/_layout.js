import { Button, Icon } from '@rneui/themed'
import { DarkTheme, ThemeProvider, useTheme } from '@react-navigation/native'
import { Stack, Tabs, useRouter } from 'expo-router'
import { MyLightTheme } from './util/constants'
import { Pressable, useColorScheme } from 'react-native'

const Layout = () => {
    // first, get user's preferences
    const scheme = useColorScheme()
    const router = useRouter()
    const { colors } = useTheme();

    return (
        <ThemeProvider value={(scheme === 'light') ? MyLightTheme : DarkTheme}>
            <Tabs screenOptions={{
                headerTitleAlign: 'center', tabBarIconStyle: { color: colors.primary }
            }}>
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
                    tabBarLabel: "Scale", tabBarIcon: (tabInfo) => {
                        return <Icon name='scale-balance' type='material-community' color={tabInfo.focused ? colors.primary : 'grey'} />
                    },
                }} />
                <Tabs.Screen name='preferences' options={{
                    headerTitle: 'Preferences',
                    tabBarLabel: "Prefs", tabBarIcon: (tabInfo) => <Icon name='tune' type='material' color={tabInfo.focused ? colors.primary : 'grey'} />,
                }} />
                {/* Hides the index and ItemScreen tabs */}
                <Tabs.Screen name='index' options={{ href: null }} />
                <Tabs.Screen name='item' options={{
                    href: null, tabBarStyle: { display: 'none' }, headerTitle: '', headerLeft: () => (
                        <Pressable hitSlop={20} onPress={() => router.back()} style={{ marginLeft: 16 }}>
                            <Icon name='arrow-back' type='material' color='black' />
                        </Pressable>
                    )
                }} />
            </Tabs>
        </ThemeProvider>
    )
}

export default Layout