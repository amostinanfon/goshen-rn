import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { buyiceCream } from '../redux';


function HookCakeContainer() {

    const dispatch = useDispatch()
    const numOfIcecream = useSelector(state => state.iceCream.numOfIcecream)

    return (
        <div>
            <h2>Num of IceCreams: {numOfIcecream}</h2>
            <button onClick={() => dispatch(buyiceCream())}>Buy Icecreams</button>
        </div>
    )
}

export default HookCakeContainer;
