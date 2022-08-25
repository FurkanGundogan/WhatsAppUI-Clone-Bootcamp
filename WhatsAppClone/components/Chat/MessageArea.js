import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MessageArea = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.dialog}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet
            consectetur adipistia.</Text>
      </View>
      <View style={styles.dialog}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Ipsa accusantium saepe magnam mollitia.</Text>
      </View>
      <View style={styles.dialog}>
        <Text style={styles.text}>Lorem ip.</Text>
      </View>
      <View style={styles.dialog}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet
            consectetur adipisicing elit.</Text>
      </View>
      
    </ScrollView>
  );
};

export default MessageArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor:"#f2eee8"
  },
  dialog: {
    paddingLeft: 16,
    maxWidth: '50%',
    backgroundColor: "white",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    marginTop:8,
    
  },
  text:{
    padding:4
  }
});
