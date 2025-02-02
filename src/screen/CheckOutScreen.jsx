import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {colors} from '../utils/color';
import Ionicons from "react-native-vector-icons/Ionicons";

const CheckOutScreen = ({route}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const {cartItem, outlet, gasType, quantity, totalCost, deliveryPeriod} =
    route.params;

  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    email: '',
  });

  const [notes, setNotes] = useState('');

  const handlePlaceOrder = () => {
    const {firstName, lastName, address, city, phone, email} =
      billingDetails;

    if (
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !phone ||
      !email
    ) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    // Show a confirmation alert before placing the order
    Alert.alert(
      'Confirm Order',
      'Are you sure you want to place this order?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            // Navigate to the TOKEN-DETAILS screen after confirming the order
            const tokenNumber = 'TOKEN123456'; // Dummy token number for now
            const date = new Date().toLocaleDateString();
            navigation.navigate('TOKEN-DETAILS', {
              tokenNumber,
              date,
              total: totalCost,
              paymentMethod: 'Cash on Delivery',
              product: cartItem.name,
              billingAddress: billingDetails,
            });

            Alert.alert(
              'Order Placed',
              'Your order has been successfully placed.',
            );
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>
      {/* Billing Details Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Billing Details</Text>

        <TextInput
          style={styles.input}
          placeholder="First Name *"
          value={billingDetails.firstName}
          onChangeText={text =>
            setBillingDetails({...billingDetails, firstName: text})
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name *"
          value={billingDetails.lastName}
          onChangeText={text =>
            setBillingDetails({...billingDetails, lastName: text})
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Street Address *"
          value={billingDetails.address}
          onChangeText={text =>
            setBillingDetails({...billingDetails, address: text})
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Town / City *"
          value={billingDetails.city}
          onChangeText={text =>
            setBillingDetails({...billingDetails, city: text})
          }
        />
        {/* <TextInput
          style={styles.input}
          placeholder="Postcode / ZIP *"
          keyboardType="numeric"
          value={billingDetails.zipCode}
          onChangeText={text =>
            setBillingDetails({...billingDetails, zipCode: text})
          }
        /> */}
        <TextInput
          style={styles.input}
          placeholder="Phone *"
          keyboardType="phone-pad"
          value={billingDetails.phone}
          onChangeText={text =>
            setBillingDetails({...billingDetails, phone: text})
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address *"
          keyboardType="email-address"
          value={billingDetails.email}
          onChangeText={text =>
            setBillingDetails({...billingDetails, email: text})
          }
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Order Notes (optional)"
          multiline
          numberOfLines={4}
          value={notes}
          onChangeText={setNotes}
        />
      </View>

      {/* Order Summary Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Your Order</Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Product</Text>
          <Text style={styles.summaryValue}>
            {cartItem.name} × {quantity}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>
            Rs.{cartItem.price * quantity}.00
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total</Text>
          <Text style={styles.summaryValue}>Rs.{totalCost}.00</Text>
        </View>
      </View>

      {/* Payment Method Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Cash on Delivery</Text>
        <Text style={styles.paymentNote}>Pay with cash upon delivery.</Text>
      </View>

      {/* Place Order Button */}
      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderButtonText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#ddd',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryValue: {
    fontSize: 16,
  },
  paymentNote: {
    fontSize: 14,
    color: '#555',
  },
  placeOrderButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  placeOrderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
