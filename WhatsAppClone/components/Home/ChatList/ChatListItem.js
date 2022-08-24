import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChatListItem = ({chat}) => {
  const {id,receiver,messages} = chat
 
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
      style={styles.image}
      source={{
        uri:receiver?.profileImgUrl
      }}
      />
    </View>
      <View style={styles.titleAndTextWrapper}>
        <Text style={styles.titleText}>{receiver?.firstName} {receiver?.lastName}</Text>
        <Text style={styles.msgText}>{messages[messages?.length-1]?.text}</Text>
      </View>
    </View>
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
    paddingBottom:16,
    alignItems:"center"
  },
  imageWrapper: {},
  titleAndTextWrapper: {
    marginLeft: 16,
  },
  titleText: {
    fontWeight: '800',
    color:"black",
    fontSize:16
  },
  msgText: {
    fontSize:14
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
