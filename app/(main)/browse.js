import { useTheme } from "@react-navigation/native"
import { Icon } from "@rneui/base"
import { ListItem, Avatar, Divider } from "@rneui/themed"
import { Link, Tabs, useRouter } from "expo-router"
import { useState } from "react"
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native"
import ListTile from "../../components/ListTile"
import { Smoothie } from "./util/constants"
import { TouchableOpacity } from "react-native-gesture-handler"

const Browse = () => {
    const { colors } = useTheme();
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* FlatList from storage of 'Menu Items' */}
            {/* Sort/Filter -- OPTIONAL */}
            {/* FAB for Add Recipe */}
            <View>
                <ListTile item={

                    { name: 'Strawberry Smiles', description: 'Refreshing strawberry smoothie with apple', imageUrl: 'strawberry-smiles.jpg', ingredients: ['strawberry (500g)', 'apple juice (3 cups)', '1 frozen banana'], favourited: false }

                } imgSource={require('../../assets/images/strawberry-smiles.jpg')}></ListTile>
            </View>

        </SafeAreaView >
    )
}

export default Browse