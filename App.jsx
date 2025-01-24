import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import LogInScreen from './src/screen/LogInScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import DashBoardScreen from './src/screen/DashBoardScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer
     >
      <Stack.Navigator  screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={'HOME'} component={HomeScreen} />
        <Stack.Screen name={'LOGIN'} component={LogInScreen} />
        <Stack.Screen name={'SIGNUP'} component={SignUpScreen} />
        <Stack.Screen name="DASHBOARD" component={DashBoardScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
