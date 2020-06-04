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
                    <Text style={{paddingTop:5,paddingLeft: 25, fontWeight: 'bold'}}>Mot de passe oublie ?</Text>
                </View>
                <Button 
                          onPress={() => Alert.alert('Right button pressed')}
                          title="Connection"
                          style={{backgroundColor:'blue'}}
                          style={styles.button}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 37,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
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
        borderColor: 'gray',
        borderWidth: 1,
    },
    button: {
     paddingTop: 20
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