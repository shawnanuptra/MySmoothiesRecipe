import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import { Divider } from '@rneui/base'
import { Button } from '@rneui/themed'
import { useTheme } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectIsSerif } from '../../redux/themeSlice'
const Scale = () => {
    const { colors } = useTheme()
    const multiplier = 453.59237;

    const [gToLbs, setGToLbs] = useState(true)
    function convert(gToLbs) {
        if (gToLbs) {
            let value = grams / multiplier
            let lbs = Math.trunc(value);
            let oz = ((value - lbs) * 16).toFixed(2)

            setLbs(lbs)
            setOz(oz)
        } else {
            setGrams((((oz / 16) + lbs * 1) * multiplier).toFixed(2))
        }
    }

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

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 24,
                        fontFamily: (isSerif) ? 'serif' : 'sans-serif'
                    }}>Grams</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>

                        <TextInput
                            style={{
                                fontSize: 48,
                                fontFamily: (isSerif) ? 'serif' : 'sans-serif', fontWeight: 'bold', borderBottomWidth: 1
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
                            fontSize: 24,
                            fontFamily: (isSerif) ? 'serif' : 'sans-serif'
                        }}>g</Text>
                    </View>
                </View>
                <Divider
                    style={{ margin: 20, alignSelf: 'stretch' }}
                    color="#000"
                    width={1}
                    orientation="horizontal"

                />
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 24,
                        fontFamily: (isSerif) ? 'serif' : 'sans-serif'
                    }}>Lbs & Oz</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <TextInput
                            style={{
                                fontSize: 48,
                                fontFamily: (isSerif) ? 'serif' : 'sans-serif', fontWeight: 'bold', borderBottomWidth: 1
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
                            fontSize: 24,
                            fontFamily: (isSerif) ? 'serif' : 'sans-serif'
                        }}>lbs</Text>
                        <TextInput
                            style={{
                                fontSize: 48,
                                fontFamily: (isSerif) ? 'serif' : 'sans-serif', fontWeight: 'bold', borderBottomWidth: 1
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
                            fontSize: 24,
                            fontFamily: (isSerif) ? 'serif' : 'sans-serif'
                        }}>oz</Text>
                    </View>
                </View>

            </View>
            <View style={{ flex: 4 / 5 }}>
                <Button
                    size='lg'
                    buttonStyle={{ backgroundColor: colors.primary, borderRadius: 50 }}
                    containerStyle={{ width: '30%', alignSelf: 'center' }}
                    onPress={() => convert(gToLbs)}
                >Convert</Button>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    customInputField: {
        fontSize: 48,
        fontWeight: 'bold',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 24
    },
    unit: {
        fontSize: 24
    }
})

export default Scale