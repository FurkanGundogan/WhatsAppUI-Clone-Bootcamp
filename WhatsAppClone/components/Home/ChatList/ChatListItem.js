import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
      style={styles.image}
      source={{
        uri:""
      }}
      />
    </View>
      <View style={styles.titleAndTextWrapper}>
        <Text style={styles.titleText}>UserName</Text>
        <Text style={styles.msgText}>Last Text</Text>
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
    paddingBottom:16
  },
  imageWrapper: {},
  titleAndTextWrapper: {
    marginLeft: 16,
  },
  titleText: {
    fontWeight: '800',
  },
  msgText: {},
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'black',
    
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
