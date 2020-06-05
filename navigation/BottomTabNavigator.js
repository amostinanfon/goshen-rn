/*import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../src/screens/HomeScreen';
import LinksScreen from '../src/screens/LinksScreen';
import LoginScreen from '../src/screens/LoginScreen';
import ResetScreen from '../src/screens/ResetScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home Page',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-checkmark-circle" />,
        }}
      />
      <BottomTab.Screen
        name="Reset"
        component={ResetScreen}
        options={{
          title: 'Reset Password',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-checkmark-circle" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'splashscreen';
    case 'Links':
      return 'Links to learn more';
    case 'Login':
      return 'Login Page';
    case 'Reset':
      return 'Reset Password Page';
  }
}
 */

import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';

const Stack = createStackNavigator();


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../src/screens/HomeScreen';
import LinksScreen from '../src/screens/LinksScreen';
import LoginScreen from '../src/screens/LoginScreen';
import ResetScreen from '../src/screens/ResetScreen';


export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomePage" 
        component={HomeScreen} 
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Reset" component={ResetScreen} />
    </Stack.Navigator>
  );
}


function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'splashscreen';
    case 'Links':
      return 'Links to learn more';
    case 'Login':
      return 'Login Page';
    case 'Reset':
      return 'Reset Password Page';
  }
}