import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
const ChatListItem = ({chat}) => {
  const {id, receiver, messages} = chat;
  const navigation=useNavigation()
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('Chat',{
        receiver,messages
      })
      }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: receiver?.profileImgUrl,
            }}
          />
        </View>
        <View style={styles.titleAndTextWrapper}>
            <View style={styles.titleWrapper}>

            
          <Text style={styles.titleText}>
            {receiver?.firstName} {receiver?.lastName}
          </Text>
          <Text style={styles.titleTime}>
          {new Date (messages[messages?.length - 1]?.datetime).getHours()}:
          {new Date (messages[messages?.length - 1]?.datetime).getMinutes()}
          </Text>
          </View>
          <Text style={styles.msgText}>
            {messages[messages?.length - 1]?.text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    alignItems: 'center',
  },
  imageWrapper: {},
  titleWrapper:{
    flexDirection:"row",
  },
  titleAndTextWrapper: {
    marginLeft: 16,
    width:"100%"
  },
  titleText: {
    fontWeight: '800',
    color: 'black',
    fontSize: 16,
    flex:1
  },
  titleTime:{
    flex:1,
    right:-48
  },
  msgText: {
    fontSize: 14,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gray',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
