import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store/store'
import UserContainer from './components/UserContainer';
//import HookCakeContainer from './components/HookCakeContainer'
//import CakeContainer from './components/CakeContainer'
//import './App.css';
import { View, Text } from 'react-native';
//import NewCakeContainer from './components/NewCakeContainer';
//import ItemContainer from './components/ItemContainer';

function HomeView() {
  return (
    <Provider store={store}>
      <View>
      <UserContainer />
       {/*<ItemContainer />
        <ItemContainer cake/>
        <HookCakeContainer />
        <UserContainer />
        <CakeContainer />
        <NewCakeContainer /> */}
      </View>
    </Provider>
     )
}

export default HomeView;
