import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Text>Image</Text>
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
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    paddingTop: 16,
    paddingLeft: 16,
  },
  imageWrapper: {},
  titleAndTextWrapper: {
    marginLeft: 16,
  },
  titleText: {
    fontWeight: '800',
  },
  msgText: {},
});
