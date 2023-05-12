import { Icon } from '@rneui/themed'
import { DarkTheme, ThemeProvider, useTheme } from '@react-navigation/native'
import { Tabs, useRouter } from 'expo-router'
import { MyLightTheme } from './util/constants'
import { Pressable, useColorScheme, Text } from 'react-native'
import { Provider, useSelector } from 'react-redux'
import store, { persistor } from '../../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'
import { useCallback, useEffect } from 'react'
import { selectIsSerif } from '../../redux/themeSlice'



const Layout = () => {
    // first, get user's preferences
    const scheme = useColorScheme()
    const router = useRouter()
    const { colors } = useTheme();



    return (
        <Provider store={store}>
            <PersistGate loading={<Text>Loading..</Text>} persistor={persistor}>

                <ThemeProvider value={(scheme === 'light') ? MyLightTheme : DarkTheme}>
                    <Tabs screenOptions={{
                        headerTitleAlign: 'center', tabBarIconStyle: { color: colors.primary },
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
                                <Pressable hitSlop={20} onPress={() => router.replace('/')} style={{ marginLeft: 16 }}>
                                    <Icon name='arrow-back' type='material' color='black' />
                                </Pressable>
                            )
                        }} />
                        <Tabs.Screen name='add' options={{
                            href: null, tabBarStyle: { display: 'none' }, headerTitle: 'Add Smoothie', headerLeft: () => (
                                <Pressable hitSlop={20} onPress={() => router.back()} style={{ marginLeft: 16 }}>
                                    <Icon name='arrow-back' type='material' color='black' />
                                </Pressable>
                            )
                        }} />
                    </Tabs>
                </ThemeProvider>
            </PersistGate>

        </Provider >
    )
}

export default Layout