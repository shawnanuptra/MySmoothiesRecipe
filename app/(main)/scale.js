import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Tabs } from 'expo-router'

const Scale = () => {
    return (
        <SafeAreaView>
            <Tabs.Screen options={{ headerTitle: "Weight Converter" }}>

                <Text>THis is favourites</Text>
            </Tabs.Screen>
        </SafeAreaView>
    )
}

export default Scale