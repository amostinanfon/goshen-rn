//#01233e


import React, { Component } from 'react';

import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button ,
    Alert ,
    StyleSheet,
    Image ,
    CheckBox , 
} from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View>
            <ScrollView style={{padding: 20, marginTop: 10}}>
            <Image 
                style={styles.image}
                source={require('../../assets/images/login.png')}
            />

            <Text 
                style={styles.header}>
                Connectez-vous
            </Text>
            <View style={styles.textInput}>
                <TextInput placeholder='Username' style={styles.text}/>
                <TextInput placeholder='Password' style={styles.text}/>
            </View>
            <View style={{flexDirection:"row"}}>
                <CheckBox 
                    //style={styles.button2}
                    checkedIcon='dot-circle-o'
                />
                <Text style={{paddingTop: 5}}> Se souvenir de moi</Text>
                <Text style={{paddingTop:5,paddingLeft: 25, fontWeight: 'bold'}}>Mot de passe oublié?</Text>
            </View>
            <Button 
                    onPress={() => Alert.alert('Right button pressed')}
                    title="Connection"
                    //style={styles.button}
            />
            
        </ScrollView>
        <View style={{margin:20, paddingTop:20, Color:'#01233e'}}>
            <Button  title="Go back" onPress={() => navigation.goBack()} />
        </View>
     </View>
    );
  }


  const styles = StyleSheet.create({
    header: {
        fontSize: 35,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 27,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    textInput: {
        height: 100,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
 
    },
    text: {
        width: '90%',
        height: 34,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center'
    },
    button: {
     paddingTop: 20 ,
     backgroundColor: '#021f35'
    },
    image: {
        //flex:1,
        width:300,
        height: 60
    },
    button2: {
        marginTop: 10,
        marginBottom: 10,    
    }

})