import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import { Divider } from '@rneui/base'
import { Button } from '@rneui/themed'
import { DarkTheme, useTheme } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectFontIsLarge, selectIsSerif, selectTheme } from '../../redux/themeSlice'
import { MyLightTheme } from '../../util/constants'
const Scale = () => {
    // multiplier to convert lbs to grams
    const multiplier = 453.59237;

    // to determine which way to convert
    const [gToLbs, setGToLbs] = useState(true)
    function convert(gToLbs) {
        if (gToLbs) {
            let value = grams / multiplier
            let lbs = Math.trunc(value);
            let oz = ((value - lbs) * 16).toFixed(1)

            setLbs(lbs)
            setOz(oz)
        } else {
            setGrams((((oz / 16) + lbs * 1) * multiplier).toFixed(1))
        }
    }

    //so won't display NaN
    // doesn't filter alphabet, because mobile users will be forced to use decimal pad
    function cleanInput(value) {
        if (value.length == 0) { value = 0 }
        else {
            value = value.replace(' ', "")
            value = value.replace(/^0+/, "")
        }
        return value;
    }

    const [grams, setGrams] = useState(0)
    const [lbs, setLbs] = useState(0)
    const [oz, setOz] = useState(0)

    const isSerif = useSelector(selectIsSerif)
    const fontIsLarge = useSelector(selectFontIsLarge)
    const isDarkTheme = useSelector(selectTheme)
    const { colors } = (isDarkTheme) ? DarkTheme : MyLightTheme;


    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        fontSize: (fontIsLarge) ? 28 : 24,
                        fontFamily: (isSerif) ? 'serif' : 'sans-serif',
                        color: colors.text
                    }}>Grams</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>

                        <TextInput
                            style={{
                                fontSize: (fontIsLarge) ? 52 : 48,
                                fontFamily: (isSerif) ? 'serif' : 'sans-serif', fontWeight: 'bold', borderBottomWidth: 1,
                                borderColor: colors.text,
                                color: colors.text

                            }}
                            onChangeText={val => {
                                let value = cleanInput(val);
                                setGrams(value);
                                setGToLbs(true)
                            }}
                            defaultValue={'0'}
                            keyboardType='decimal-pad'
                            value={grams.toString()}
                        />
                        <Text style={{
                            fontSize: (fontIsLarge) ? 28 : 24,
                            fontFamily: (isSerif) ? 'serif' : 'sans-serif',
                            color: colors.text

                        }}>g</Text>
                    </View>
                </View>
                <Divider
                    style={{ margin: 20, alignSelf: 'stretch' }}
                    color={colors.text}

                    width={1}
                    orientation="horizontal"

                />
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        fontSize: (fontIsLarge) ? 28 : 24,
                        fontFamily: (isSerif) ? 'serif' : 'sans-serif',
                        color: colors.text
                    }}>Lbs & Oz</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <TextInput
                            style={{
                                fontSize: (fontIsLarge) ? 52 : 48,
                                fontFamily: (isSerif) ? 'serif' : 'sans-serif', fontWeight: 'bold', borderBottomWidth: 1,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            onChangeText={val => {
                                let value = cleanInput(val);
                                setLbs(value)
                                setGToLbs(false)
                            }}
                            defaultValue={'0'}
                            keyboardType='decimal-pad'
                            value={lbs.toString()}
                        />
                        <Text style={{
                            fontSize: (fontIsLarge) ? 28 : 24,
                            fontFamily: (isSerif) ? 'serif' : 'sans-serif',
                            color: colors.text
                        }}>lbs</Text>
                        <TextInput
                            style={{
                                fontSize: (fontIsLarge) ? 52 : 48,
                                fontFamily: (isSerif) ? 'serif' : 'sans-serif', fontWeight: 'bold', borderBottomWidth: 1,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            onChangeText={val => {
                                let value = cleanInput(val);
                                setOz(value)
                                setGToLbs(false)
                            }}
                            defaultValue={'0'}
                            keyboardType='numeric'
                            value={oz.toString()}
                        />
                        <Text style={{
                            fontSize: (fontIsLarge) ? 28 : 24,
                            fontFamily: (isSerif) ? 'serif' : 'sans-serif',
                            color: colors.text
                        }}>oz</Text>
                    </View>
                </View>

            </View>
            <View style={{ flex: 4 / 5 }}>
                <Button
                    size='lg'
                    buttonStyle={{ backgroundColor: 'green', borderRadius: 50 }}
                    containerStyle={{ width: '60%', alignSelf: 'center', borderRadius: 50 }}
                    onPress={() => convert(gToLbs)}
                    titleStyle={{ fontFamily: (isSerif) ? 'serif' : 'sans-serif', fontSize: (fontIsLarge) ? 20 : 16 }}
                >Convert</Button>
            </View>
        </SafeAreaView >
    )
}

export default Scale