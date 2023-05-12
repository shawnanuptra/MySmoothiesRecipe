import { Icon, withTheme } from '@rneui/themed'
import { DarkTheme, ThemeProvider, useTheme } from '@react-navigation/native'
import { Tabs, useRouter } from 'expo-router'
import { MyLightTheme } from './util/constants'
import { Pressable, useColorScheme, Text } from 'react-native'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store, { persistor } from '../../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'
import { useCallback, useEffect } from 'react'
import { selectIsSerif } from '../../redux/themeSlice'
import { color } from '@rneui/base'



const Layout = () => {
    // first, get user's preferences
    const scheme = useColorScheme()
    const router = useRouter()
    const { dark, colors } = useTheme();

    return (
        <Provider store={store}>
            <PersistGate loading={<Text>Loading..</Text>} persistor={persistor}>
                <ThemeProvider value={(scheme === 'dark') ? DarkTheme : MyLightTheme}>
                    <Tabs screenOptions={{
                        headerTitleAlign: 'center',
                        tabBarStyle: { backgroundColor: 'green', borderTopWidth: 0 },
                        headerStyle: { backgroundColor: 'green' },
                        headerTitleStyle: { color: 'white' },
                        tabBarLabelStyle: { color: 'black' },
                        tabBarActiveBackgroundColor: '#E1FFD1',
                        tabBarActiveTintColor: 'black',
                        tabBarInactiveBackgroundColor: 'green',
                        tabBarInactiveTintColor: 'white'

                    }}>
                        <Tabs.Screen name='browse' options={{
                            headerTitle: 'Browse',
                            tabBarLabel: ({ color }) => <Text style={{ color: color, fontSize: 10 }}>Browse</Text>,

                            tabBarIcon: ({ color }) => <Icon name='search' type='material' color={color} />,
                        }} />
                        <Tabs.Screen name='favourites' options={{
                            headerTitle: 'Favourites',
                            tabBarLabel: ({ color }) => <Text style={{ color: color, fontSize: 10 }}>Favourites</Text>,
                            tabBarIcon: ({ color }) => <Icon name='star-outline' type='material-community' color={color} />,
                        }} />
                        <Tabs.Screen name='scale' options={{
                            headerTitle: 'Weight Converter',
                            tabBarLabel: ({ color }) => <Text style={{ color: color, fontSize: 10 }}>Scale</Text>,
                            tabBarIcon: ({ color }) => {
                                return <Icon name='scale-balance' type='material-community' color={color} />
                            },
                        }} />
                        <Tabs.Screen name='preferences' options={{
                            headerTitle: 'Preferences',
                            tabBarLabel: ({ color }) => <Text style={{ color: color, fontSize: 10 }}>Prefs</Text>,
                            tabBarIcon: ({ color }) => <Icon name='tune' type='material' color={color} />,
                        }} />
                        {/* Hides the index and ItemScreen tabs */}
                        <Tabs.Screen name='index' options={{ href: null }} />
                        <Tabs.Screen name='item' options={{
                            href: null, tabBarStyle: { display: 'none' }, headerTitle: '', headerLeft: () => (
                                <Pressable hitSlop={20} onPress={() => router.replace('/')} style={{ marginLeft: 16, }}>
                                    <Icon name='arrow-back' type='material' color={colors.text} />
                                </Pressable>
                            )
                        }} />
                        <Tabs.Screen name='add' options={{
                            href: null, tabBarStyle: { display: 'none' }, headerTitle: 'Add Smoothie', headerLeft: () => (
                                <Pressable hitSlop={20} onPress={() => router.back()} style={{ marginLeft: 16 }}>
                                    <Icon name='arrow-back' type='material' color={'black'} />
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