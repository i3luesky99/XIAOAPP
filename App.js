import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './Component/Login';
import Register from './Component/Register';
import OTP from './Component/OTP';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default  App = ({navigation}) =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name ='Login' component={Login}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name ='Register' component={Register}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name ='OTP' component={OTP}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
