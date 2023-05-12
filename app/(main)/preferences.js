import { ButtonGroup } from "@rneui/themed"
import { SafeAreaView, StyleSheet, Text, View, Switch } from "react-native"
import { Avatar } from "@rneui/base"
import { useState } from "react"
import { useTheme } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { selectFontIsLarge, selectIsSerif, toggleFontSize, toggleIsSerif } from "../../redux/themeSlice"

const Preferences = () => {
    const { colors } = useTheme();

    const [changeFont, setChangeFont] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState();

    const isSerif = useSelector(selectIsSerif);
    const fontIsLarge = useSelector(selectFontIsLarge)
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column" }}>

            <View style={styles.settingItem}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Avatar
                        size={40}
                        rounded
                        icon={{ name: "moon", type: "feather", color: 'green' }}
                        containerStyle={styles.avatarBgColor}
                    />
                    <Text style={{
                        fontSize: (fontIsLarge) ? 20 : 16,
                        fontFamily: (isSerif) ? 'serif' : 'sans-serif',
                    }}>Dark Theme</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{
                        fontSize: (fontIsLarge) ? 20 : 16,
                        fontFamily: (isSerif) ? 'serif' : 'sans-serif'
                    }}>{isDarkTheme ? 'On' : 'Off'}</Text>
                    <Switch value={isDarkTheme} onValueChange={setIsDarkTheme} trackColor={{ true: '#b2ffa8' }} thumbColor={isDarkTheme ? 'green' : 'grey'}></Switch>
                </View>
            </View>
            <View style={styles.settingItem}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Avatar
                        size={40}
                        rounded
                        icon={{ name: "format-font", type: "material-community", color: 'green' }}
                        containerStyle={styles.avatarBgColor}
                    />
                    <Text style={{
                        fontSize: (fontIsLarge) ? 20 : 16,
                        fontFamily: (isSerif) ? 'serif' : 'sans-serif'
                    }}>Change Font</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{
                        fontSize: (fontIsLarge) ? 20 : 16,
                        fontFamily: (isSerif) ? 'serif' : 'sans-serif'
                    }}>{(isSerif) ? 'Professional' : 'Casual'}</Text>
                    <Switch value={isSerif} onValueChange={(value) => dispatch(toggleIsSerif())} trackColor={{ true: '#b2ffa8' }} thumbColor={isSerif ? 'green' : 'grey'}></Switch>
                </View>
            </View>


            <View style={styles.settingItem}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Avatar
                        size={40}
                        rounded
                        icon={{ name: "format-size", type: "material-community", color: 'green' }}
                        containerStyle={styles.avatarBgColor}
                    />
                    <Text style={{
                        fontSize: (fontIsLarge) ? 20 : 16,
                        fontFamily: (isSerif) ? 'serif' : 'sans-serif'
                    }}>Change Font Size</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{
                        fontSize: (fontIsLarge) ? 20 : 16,
                        fontFamily: (isSerif) ? 'serif' : 'sans-serif'
                    }}>{(fontIsLarge) ? 'Large' : 'Normal'}</Text>
                    <Switch value={fontIsLarge} onValueChange={(value) => dispatch(toggleFontSize())} trackColor={{ true: '#b2ffa8' }} thumbColor={fontIsLarge ? 'green' : 'grey'}></Switch>
                </View>
            </View>

        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    settingItem: {
        alignSelf: 'stretch', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10,
        // borderRadius: 30, 
        backgroundColor: '#fff', borderBottomWidth: 0.5, borderBottomColor: 'light-grey'
    },
    avatarBgColor: {
        backgroundColor: '#E1FFD1',
        borderWidth: 1,
        borderColor: 'green'
    }

})

export default Preferences