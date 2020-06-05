/*import * as WebBrowser from 'expo-web-browser'; #01233e

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
}); */

import * as React from 'react';
import { Button, View , StyleSheet} from 'react-native';

import { Image } from 'react-native';
const img = require('../../assets/images/logoG.png');


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={img}
      />
      <Button
        //style={styles.button}
        title="Go  To  Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop:5,
   //marginLeft: 20, 
   //marginRight: 20,

  },
  logo: {
    //width: 360,
    //height: 500,
    flex: 1
  },
  button:{
    marginTop: 50
  }
});