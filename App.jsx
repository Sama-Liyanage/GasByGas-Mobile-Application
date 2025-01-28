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
import ProfileScreen from './src/screen/ProfileScreen';
import DeliveryDetailsScreen from './src/screen/DeliveryDetailsScreen';
import RescheduleOrderScreen from './src/screen/RescheduleOrderScreen';
import CheckOutScreen from './src/screen/CheckOutScreen';
import TokenDetailsScreen from './src/screen/TokenDetailsScreen';


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
        <Stack.Screen name={'CHECK_OUT'} component={CheckOutScreen} />
        <Stack.Screen name={'TOKEN-DETAILS'} component={TokenDetailsScreen} />

        <Stack.Screen name={'ORDER_HISTORY'} component={OrderHistoryScreen} />     
        <Stack.Screen name={'PROFILE'} component={ProfileScreen} />
     
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
