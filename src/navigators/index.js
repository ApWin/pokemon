import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Launch, Main} from '../screens/index';
import {TransitionPresets} from '@react-navigation/stack';
import Result from '../screens/Result';

const Stack = createStackNavigator();

const options = {
  headerShown: false,
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
};

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={options} initialRouteName="launch">
      <Stack.Screen name="launch" component={Launch} />
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="result" component={Result} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
