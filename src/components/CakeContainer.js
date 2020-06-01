import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

 function CakeContainer(props) {
    return (
        <View>
            <Text>My Number of cakes: {props.numOfCakes}</Text>
            <Button onPress={props.buyCake}
                    title="Press Me"
            > Buy Cake !!!</Button>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)