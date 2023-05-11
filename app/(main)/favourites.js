import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import ListTile from '../../components/ListTile';


const Favourites = () => {
    const smoothies = useSelector((state) => state.smoothie.smoothies);
    return (
        <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
            <FlatList
                data={smoothies.filter(el => el.favourited === true)}
                renderItem={({ item, index }) => <ListTile item={item} />}
                keyExtractor={smoothie => smoothie.name}
            />
        </SafeAreaView>
    )
}

export default Favourites