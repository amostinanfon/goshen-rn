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
    CheckBox
} from 'react-native';

export default class Login extends Component {


    render() {

     //const  login = require('../../assets/images/login.png');

        return (
            <ScrollView style={{padding: 20, marginTop: 10}}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/images/login.png')}
                />

                <Text 
                    style={styles.header}>
                    Mot de Passe oublié
                </Text>
                <View style={styles.textInput}>
                    <TextInput placeholder='Adresse Email' style={styles.text}/>
                </View>
                <View style={{flexDirection:"column"}}>
                    <Text>Saisissez votre adresse email et vous recevrez un</Text>
                    <Text style={{paddingTop:5,marginBottom:10}}>lien  votre pour renitialiser votre mot de passe</Text>
                </View>
                <Button 
                          onPress={() => Alert.alert('Reset Button pressed')}
                          title="Envoyer  le  lien  par  mail"
                          style={{backgroundColor:'blue'}}
                          style={styles.button}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 27,
        marginTop: 10,
        marginLeft: 20,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    textInput: {
        height: 150,
        justifyContent: 'center',
        //textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
 
    },
    text: {
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
    },
    button: {
     paddingTop: 10
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