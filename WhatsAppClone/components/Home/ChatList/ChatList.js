import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatListItem from './ChatListItem'

const ChatList = () => {
  return (
    <View style={styles.container}>
      <ChatListItem/>
      <ChatListItem/>
      <ChatListItem/>
      <ChatListItem/>
      <ChatListItem/>
      <ChatListItem/>
    </View>
  )
}

export default ChatList

const styles = StyleSheet.create({
    container:{
      backgroundColor:"white"
    }
})