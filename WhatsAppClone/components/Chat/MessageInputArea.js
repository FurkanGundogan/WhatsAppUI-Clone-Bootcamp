import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const MessageInputArea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.input}>MessageInputArea</Text>
      </View>
      <View style={styles.iconWrapper}>
      <Ionicons
              style={styles.backIcon}
              name="send"
              size={24}
              color="black"
            />
      </View>
    </View>
  );
};

export default MessageInputArea;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  inputBox: {
    flexDirection:"row",
    justifyContent:"center"
  },
  input: {
    
    borderWidth:1,
    borderColor:"black",
    borderRadius:8,
    padding:8,
    width:"90%"
    
  },
  iconWrapper: {
    width:"10%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    right:8
  },
});
