import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatList = () => {
  return (
    <View >
      <Text style={styles.chat}>ChatList</Text>
      <Text style={styles.chat}>ChatList</Text>
      <Text style={styles.chat}>ChatList</Text>
      <Text style={styles.chat}>ChatList</Text>
      <Text style={styles.chat}>ChatList</Text>
      <Text style={styles.chat}>ChatList</Text>
      <Text style={styles.chat}>ChatList</Text>
    </View>
  )
}

export default ChatList

const styles = StyleSheet.create({
    chat:{
        height:250
    }
})