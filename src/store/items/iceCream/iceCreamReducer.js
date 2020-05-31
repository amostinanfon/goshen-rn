import { BUY_ICECREAM } from "./iceCreamType"

const initialState = {
    numOfIcecream: 30
}

const IcecreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - 1
            }
        default:
            return state
    }
}


export default IcecreamReducer;