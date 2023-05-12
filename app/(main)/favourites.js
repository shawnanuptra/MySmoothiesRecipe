import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import ListTile from '../../components/ListTile';
import { DarkTheme } from '@react-navigation/native';
import { MyLightTheme } from '../../util/constants';
import { selectTheme } from '../../redux/themeSlice';


const Favourites = () => {
    const smoothies = useSelector((state) => state.smoothie.smoothies);
    const isDarkTheme = useSelector(selectTheme)
    const { colors } = (isDarkTheme) ? DarkTheme : MyLightTheme;

    return (
        <SafeAreaView style={{ flex: 1, flexGrow: 1, backgroundColor: colors.background }}>
            <FlatList
                // only use smoothies where 'favourited' = true;
                data={smoothies.filter(el => el.favourited === true)}
                renderItem={({ item }) => <ListTile item={item} />}
                keyExtractor={smoothie => smoothie.name}
            />
        </SafeAreaView>
    )
}

export default Favourites