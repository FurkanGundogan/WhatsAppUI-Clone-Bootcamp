import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from './Header'

const Chat = () => {
    const route=useRoute()
    const {receiver,messages}=route?.params
    alert(messages[0].text)
  return (
    <View>
      <Header receiver={receiver}/>
      <Text>Chat</Text>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})