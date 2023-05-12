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

    return (
        // Redux provider
        <Provider store={store}>
            {/* Redux Persist provider */}
            <PersistGate loading={null} persistor={persistor}>
                {/* Tabs layout */}
                {/* Should probably be a <Stack />, and use another _layout for <Tabs> */}
                {/* Just so nested navigation is possible, which makes the code cleaner */}
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
                    {/* Hides the index, Item, and Add tabs */}
                    <Tabs.Screen name='index' options={{ href: null }} />
                    <Tabs.Screen name='item' options={{
                        href: null, tabBarStyle: { display: 'none' }, headerTitle: '', headerLeft: () => (
                            <Pressable hitSlop={20} onPress={() => router.replace('/')} style={{ marginLeft: 16, }}>
                                <Icon name='arrow-back' type='material' color={'white'} />
                            </Pressable>
                        )
                    }} />
                    <Tabs.Screen name='add' options={{
                        href: null, tabBarStyle: { display: 'none' }, headerTitle: 'Add Smoothie', headerLeft: () => (
                            <Pressable hitSlop={20} onPress={() => router.back()} style={{ marginLeft: 16 }}>
                                <Icon name='arrow-back' type='material' color='white' />
                            </Pressable>
                        )
                    }} />
                </Tabs>
            </PersistGate>

        </Provider >
    )
}

export default Layout