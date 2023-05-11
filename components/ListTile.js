import { useTheme } from '@react-navigation/native'
import { ListItem, Icon, Divider } from '@rneui/themed'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAsFav } from '../redux/smoothieSlice'

const ListTile = ({ item }) => {
  const { colors } = useTheme()
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <ListItem containerStyle={{ borderBottomWidth: 1, }} bottomDivider onPress={() => router.push({ pathname: 'item', params: { name: item.name } })}>

      <ListItem.Content style={{ flexGrow: 1 }}>
        <ListItem.Title style={{ fontWeight: 'bold', fontSize: 22 }}>{`${item.name}`}</ListItem.Title>
        <ListItem.Subtitle style={{ fontSize: 16 }}>{`${item.description}`}</ListItem.Subtitle>
      </ListItem.Content>
      <Divider color="black" orientation="vertical" />
      <Pressable hitSlop={15} onPress={() => dispatch(toggleAsFav(item))} style={{ alignSelf: 'stretch', justifyContent: 'center' }}>
        {/* Change Icon to 'heart' if it's favourited */}
        <Icon name={(item.favourited) ? 'heart' : 'heart-outline'} type="material-community" color={colors.primary} />
      </Pressable>
    </ListItem>
  )
}

export default ListTile