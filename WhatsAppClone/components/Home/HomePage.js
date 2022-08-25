import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChatList from './ChatList/ChatList';
import Header from './Header/Header';
const HomePage = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <ChatList/>
      </ScrollView>
      <Text>HomePage</Text>
      <Icon name="instagram" size={28} color="#f9524d" />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
