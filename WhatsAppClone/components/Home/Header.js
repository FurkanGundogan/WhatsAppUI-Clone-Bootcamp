import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontisto from 'react-native-vector-icons/Fontisto';
const Header = () => {
  return (
    <View style={styles.container}>
    <View style={styles.topWrapper} >
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>WhatsApp</Text>
      </View>
      <View style={styles.iconWrapper}>
        <IconFontisto style={styles.searchIcon} name="search" size={18} color="white" />
        <IconEntypo name="dots-three-vertical" size={18} color="white" />
      </View>
    </View>
    <Text style={styles.chatListTitle}>CHATS</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#07b93c",
        height:74,
        width:"100%",
        
    },
    topWrapper:{
        alignItems:"center",
        flexDirection:"row",
        height:40,
    },
    titleText:{
        color:"white",
        fontWeight:"600",
        fontSize:18
    },
    titleWrapper:{
        flex:1,
        left:16
    },
    iconWrapper:{
        flexDirection:"row",
        justifyContent:"flex-end",
        flex:1,
        right:16
    },
    searchIcon:{
        left:-16
    },
    chatListTitle:{
        color:"white",
        fontWeight:"800",
        fontSize:14,
        borderBottomColor:"white",
        borderBottomWidth:2,
        textAlign:"center",
        paddingBottom:8
    }
    
});
