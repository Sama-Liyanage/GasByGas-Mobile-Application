import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import LogInScreen from './src/screen/LogInScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import DashBoardScreen from './src/screen/DashBoardScreen';
import OrderGasScreen from './src/screen/OrderGasScreen';
import OrderHistoryScreen from './src/screen/OrderHistoryScreen';
import TokenStatusScreen from './src/screen/TokenStatusScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import DeliveryDetailsScreen from './src/screen/DeliveryDetailsScreen';

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
        <Stack.Screen name={'ORDER_GAS'} component={OrderGasScreen} />
        <Stack.Screen name={'ORDER_HISTORY'} component={OrderHistoryScreen} />
        <Stack.Screen name={'TokenStatusScreen'} component={TokenStatusScreen} />
        <Stack.Screen name={'PROFILE'} component={ProfileScreen} />
        <Stack.Screen name={'DELIVERY_DETAILS'} component={DeliveryDetailsScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
