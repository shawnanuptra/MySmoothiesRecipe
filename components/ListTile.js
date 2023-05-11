import { useTheme } from '@react-navigation/native'
import { ListItem, Avatar, Icon, Divider } from '@rneui/themed'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native'

const ListTile = ({ item, imgSource }) => {
  const { colors } = useTheme()
  const router = useRouter();
  return (
    <ListItem containerStyle={{ borderBottomWidth: 1, }} bottomDivider onPress={() => router.push({ pathname: '/item', params: item })}>
      {/* Change  */}
      <Avatar
        size={120}
        source={imgSource} // todo: make this source able to dynamically get pictures, e.g. using URIs
      />
      <ListItem.Content style={{ flexGrow: 1 }}>
        <ListItem.Title>{`${item.name}`}</ListItem.Title>
        <ListItem.Subtitle>{`${item.description}`}</ListItem.Subtitle>
      </ListItem.Content>
      <Divider color="black" orientation="vertical" />
      <Pressable hitSlop={15} onPress={() => { console.log('hitreg') }} style={{ alignSelf: 'stretch', justifyContent: 'center' }}>
        {/* Change Icon to 'heart' if it's favourited */}
        <Icon name="heart-outline" type="material-community" color={colors.primary} />
      </Pressable>
    </ListItem>
  )
}

export default ListTile