import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const Chat = () => {
    const route=useRoute()
    const {receiver,messages}=route?.params
    alert(messages[0].text)
  return (
    <View>
      <Text>Chat</Text>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})