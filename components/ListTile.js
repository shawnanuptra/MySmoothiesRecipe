import { useTheme } from '@react-navigation/native'
import { ListItem, Icon, Divider } from '@rneui/themed'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAsFav } from '../redux/smoothieSlice'
import { selectFontIsLarge, selectIsSerif } from '../redux/themeSlice'

const ListTile = ({ item }) => {
  const { colors } = useTheme()
  const router = useRouter();
  const dispatch = useDispatch();
  const isSerif = useSelector(selectIsSerif)
  const fontIsLarge = useSelector(selectFontIsLarge)
  return (
    <ListItem containerStyle={{ borderBottomWidth: 1, }} bottomDivider onPress={() => router.push({ pathname: 'item', params: { name: item.name } })}>

      <ListItem.Content style={{ flexGrow: 1, }}>
        <ListItem.Title style={{ fontWeight: 'bold', fontSize: (fontIsLarge) ? 26 : 22, fontFamily: (isSerif) ? 'serif' : 'sans-serif' }}>{item.name}</ListItem.Title>
        <ListItem.Subtitle style={{ fontSize: (fontIsLarge) ? 20 : 16, fontFamily: (isSerif) ? 'serif' : 'sans-serif' }}>{item.description}</ListItem.Subtitle>
      </ListItem.Content>
      <Divider color="black" orientation="vertical" />
      <Pressable hitSlop={15} onPress={() => dispatch(toggleAsFav(item))} style={{ alignSelf: 'stretch', justifyContent: 'center' }}>
        {/* Change Icon to 'heart' if it's favourited */}
        <Icon name={(item.favourited) ? 'heart' : 'heart-outline'} type="material-community" color={'green'} />
      </Pressable>
    </ListItem>
  )
}

export default ListTile