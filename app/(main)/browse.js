import { useTheme } from "@react-navigation/native"
import { Icon } from "@rneui/base"
import { ListItem, Avatar, Divider } from "@rneui/themed"
import { Link, Tabs } from "expo-router"
import { useState } from "react"
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native"
import ListTile from "../../components/ListTile"

const Browse = () => {
    const { colors } = useTheme();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* FlatList from storage of 'Menu Items' */}
            {/* Sort/Filter -- OPTIONAL */}
            {/* FAB for Add Recipe */}
            <View style={{}}>
                <ListTile></ListTile>
            </View>

        </SafeAreaView>
    )
}

export default Browse