import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image } from 'react-native';
import {  Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../../components/StyledText';
//import HomeView from '../HomeView';

const img = require('../../assets/images/logoG.png');

export default function HomeScreen() {

  return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={img}
        />
    </View>
   )
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  logo: {
    //width: 360,
    //height: 500,
    flex: 1
  },
});
