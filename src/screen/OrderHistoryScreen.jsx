import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/color';
import { fonts } from '../utils/font';
import { useNavigation } from '@react-navigation/native';
const OrderHistoryScreen = () => {
  const navigation = useNavigation();

  const [orders, setOrders] = useState([
    {
      id: '1',
      type: 'Domestic Cylinder',
      quantity: 2,
      status: 'Delivered',
      date: '2025-01-15',
    },
    {
      id: '2',
      type: 'Commercial Cylinder',
      quantity: 1,
      status: 'Pending',
      date: '2025-01-10',
    },
    {
      id: '3',
      type: 'Industrial Cylinder',
      quantity: 3,
      status: 'Delivered',
      date: '2025-01-05',
    },
  ]);

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>

      <Text style={styles.headerText}>Order History</Text>

      <FlatList
        data={orders}
        renderItem={({item}) => (
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Type: {item.type}</Text>
            <Text style={styles.orderText}>Quantity: {item.quantity}</Text>
            <Text style={styles.orderText}>Status: {item.status}</Text>
            <Text style={styles.orderText}>Date: {item.date}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    marginVertical: 20,
    textAlign: 'center',
  },
  orderCard: {
    backgroundColor: colors.lightGray,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  orderText: {
    fontSize: 16,
    color: colors.primary,
    fontFamily: fonts.Regular,
    marginBottom: 5,
  },
});
