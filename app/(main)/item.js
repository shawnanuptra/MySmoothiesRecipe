
import { useTheme } from "@react-navigation/native";
import { Icon, Image, Avatar } from "@rneui/themed";
import { Stack, Tabs, useRouter, useSearchParams } from "expo-router"
import { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native"
import { ceil } from "react-native-reanimated";

const ItemPage = () => {
    const { colors } = useTheme();
    const params = useSearchParams();
    console.log(params.name)


    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 30 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 15 }}>
                <Text style={{ fontSize: 24 }}>{params.name}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>

                <Image source={require('../../assets/images/strawberry-smiles.jpg')} style={{ width: 300, height: 300, resizeMode: 'contain' }} />
                {/* change to 'heart' based on favourited */}
                <Avatar
                    rounded
                    size={40}
                    icon={{ name: 'heart-outline', type: 'material-community', color: colors.primary }}
                    containerStyle={{ position: "absolute", bottom: 0, right: 0, borderColor: colors.primary, borderWidth: 1 }}
                />
            </View>
            <View style={{ marginVertical: 15 }}>
                <Text style={{ fontSize: 22 }}>
                    Description
                </Text>
                <Text>
                    {params.description}
                </Text>
            </View>
            <View>
                <Text style={{ fontSize: 22 }}>
                    Ingredients
                </Text>
                <Text>
                    {params.ingredients}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default ItemPage