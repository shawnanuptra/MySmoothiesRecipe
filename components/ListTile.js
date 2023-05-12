import { DarkTheme, useTheme } from '@react-navigation/native'
import { ListItem, Icon, Divider } from '@rneui/themed'
import { useRouter } from 'expo-router'
import React from 'react'
import { Alert, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAsFav } from '../redux/smoothieSlice'
import { selectFontIsLarge, selectIsSerif, selectTheme } from '../redux/themeSlice'
import { MyLightTheme } from '../app/(main)/util/constants'

const ListTile = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isSerif = useSelector(selectIsSerif)
  const fontIsLarge = useSelector(selectFontIsLarge)
  const isDarkTheme = useSelector(selectTheme)
  const { colors } = (isDarkTheme) ? DarkTheme : MyLightTheme;

  return (
    <ListItem containerStyle={{ borderBottomWidth: 1, backgroundColor: colors.card }} bottomDivider onPress={() => router.push({ pathname: 'item', params: { name: item.name } })}>

      <ListItem.Content style={{ flexGrow: 1, }}>
        <ListItem.Title style={{ fontWeight: 'bold', fontSize: (fontIsLarge) ? 26 : 22, fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}>{item.name}</ListItem.Title>
        <ListItem.Subtitle style={{ fontSize: (fontIsLarge) ? 20 : 16, fontFamily: (isSerif) ? 'serif' : 'sans-serif', color: colors.text }}>{item.description}</ListItem.Subtitle>
      </ListItem.Content>
      <Divider color={colors.text} orientation="vertical" />
      <Pressable hitSlop={15}
        onPress={() => {
          // Alert for action confirmation
          if (item.favourited) { Alert.alert('Removed from Favourites', `${item.name} has been removed from your favourites`) } else {
            Alert.alert('Added to Favourites', `${item.name} has been added to your Favourites`)
          }
          // update in Redux
          dispatch(toggleAsFav(item))
        }} style={{ alignSelf: 'stretch', justifyContent: 'center' }}>
        {/* Change Icon to 'heart' if it's favourited */}
        <Icon name={(item.favourited) ? 'heart' : 'heart-outline'} type="material-community" color={'green'} />
      </Pressable>
    </ListItem>
  )
}

export default ListTile