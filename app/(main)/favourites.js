import { Tabs } from 'expo-router'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

const Favourites = () => {
    return (
        <SafeAreaView>
            <Tabs.Screen options={{ headerTitle: "Favourites" }}>

                <Text>THis is favourites</Text>
            </Tabs.Screen>
        </SafeAreaView>
    )
}

export default Favourites