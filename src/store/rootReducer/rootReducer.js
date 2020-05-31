import {combineReducers} from 'redux';
import userReducer from '../items/user/userReducer'
import cakeReducer from '../items/cakes/cakeReducer';

import iceCreamReducer from '../items/iceCream/iceCreamReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer;