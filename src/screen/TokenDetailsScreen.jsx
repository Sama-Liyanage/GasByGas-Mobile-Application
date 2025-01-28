import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

const TokenDetailsScreen = ({route, navigation}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const {tokenNumber, date, total, paymentMethod, product, billingAddress} =
    route.params || {};

  const handleConfirmOrder = () => {
    // Show an alert when the user confirms the order
    Alert.alert(
      'Order Confirmed',
      'Your order has been successfully confirmed!',
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to the Dashboard screen after confirming the order
            navigation.navigate('DASHBOARD');
          },
        },
      ],
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Order Confirmation</Text>
      </View>

      {/* Order Summary */}
      <View style={styles.detailsCard}>
        <View style={styles.row}>
          <Text style={styles.label}>Token Number:</Text>
          <Text style={styles.value}>{tokenNumber || 'N/A'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{date || 'N/A'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total:</Text>
          <Text style={styles.value}>Rs.{total || '0.00'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Payment Method:</Text>
          <Text style={styles.value}>{paymentMethod || 'N/A'}</Text>
        </View>
      </View>

      <Text style={styles.payMessage}>Pay with cash upon delivery.</Text>

      {/* Token Details */}
      <View style={styles.detailsCard}>
        <Text style={styles.sectionHeader}>Token Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Product:</Text>
          <Text style={styles.value}>{product || 'N/A'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total:</Text>
          <Text style={styles.value}>Rs.{total || '0.00'}</Text>
        </View>
      </View>

      {/* Billing Address */}
      <View style={styles.detailsCard}>
        <Text style={styles.sectionHeader}>Billing Address</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>
            {billingAddress?.firstName + ' ' + billingAddress?.lastName ||
              'N/A'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{billingAddress?.address || 'N/A'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.value}>{billingAddress?.city || 'N/A'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{billingAddress?.phone || 'N/A'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{billingAddress?.email || 'N/A'}</Text>
        </View>
      </View>

      {/* Confirm Order Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmOrder}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TokenDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  detailsCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
  },
  value: {
    fontSize: 14,
    fontWeight: '400',
    color: '#222',
  },
  payMessage: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  confirmButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
