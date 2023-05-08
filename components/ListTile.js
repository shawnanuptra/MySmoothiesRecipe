import { useTheme } from '@react-navigation/native'
import { ListItem, Avatar, Icon, Divider } from '@rneui/themed'
import React from 'react'
import { Pressable } from 'react-native'

const ListTile = () => {
  const { colors } = useTheme()
  return (
    <ListItem bottomDivider onPress={() => { console.log('list item') }}>
      {/* Change  */}
      <Avatar
        size={120}
        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
      />
      <ListItem.Content style={{ flexGrow: 1 }}>
        <ListItem.Title>Blue Monday</ListItem.Title>
        <ListItem.Subtitle>Very lemony very cool mango too nice</ListItem.Subtitle>
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