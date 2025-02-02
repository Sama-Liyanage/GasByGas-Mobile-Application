import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/color';
import {fonts} from '../utils/font';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const OrderGasScreen = () => {
  const navigation = useNavigation();
  const [selectedOutlet, setSelectedOutlet] = useState('');
  const [selectedGasType, setSelectedGasType] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [includeRefill, setIncludeRefill] = useState(false);
  const [needNewCylinder, setNeedNewCylinder] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [deliveryPeriod, setDeliveryPeriod] = useState('');

  const outlets = [
    { id: 1, name: 'Galle Main Outlet', district: 'Galle' },
    { id: 2, name: 'Unawatuna Gas Point', district: 'Galle' },
    { id: 3, name: 'Hikkaduwa LP Gas Center', district: 'Galle' },
    { id: 4, name: 'Ambalangoda Gas Depot', district: 'Galle' },
  ];

  const gasTypes = [
    {id: 1, weight: '2.3kg', price: 694, image: require('../assets/gas_1.png')},
    {id: 2, weight: '5kg', price: 1482, image: require('../assets/gas_2.png')},
    {id: 3, weight: '12.5kg', price: 3690, image: require('../assets/gas_3.png')},
  ];

  const cylinderCost = 2500; // Example cost for a new cylinder

  const calculateTotalCost = () => {
    if (!selectedGasType) return 0;
    const gasCost = selectedGasType.price * quantity;
    const refillTotal = includeRefill ? gasCost : 0; // Weight-based refill calculation
    const cylinderTotal = needNewCylinder ? cylinderCost * quantity : 0;
    return refillTotal + cylinderTotal;
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCheckout = () => {
    if (!selectedOutlet || !selectedGasType || quantity <= 0) {
      setErrorMessage('Please complete all fields.');
      return;
    }
    setLoading(true);
  
    setTimeout(() => {
      setLoading(false);
  
      // Navigate to the Checkout screen with order details
      navigation.navigate('CHECK_OUT', {
        cartItem: {
          name: selectedGasType.weight,  // Send gas type as the product name
          price: selectedGasType.price,   // Send the price for the selected gas type
          quantity,
        },
        outlet: selectedOutlet,
        gasType: selectedGasType.weight,
        quantity,
        includeRefill,
        needNewCylinder,
        totalCost: calculateTotalCost(),
        deliveryPeriod,
      });
    }, 2000);
  };
  
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>

      {/* Screen Header */}
      <Text style={styles.headerText}>Request Gas Cylinder</Text>

      {/* Outlet Dropdown */}
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Select Gas Outlet</Text>
        <Picker
          selectedValue={selectedOutlet}
          style={styles.picker}
          onValueChange={itemValue => setSelectedOutlet(itemValue)}>
          <Picker.Item label="Select an outlet" value="" />
          {outlets.map(outlet => (
            <Picker.Item
              key={outlet.id}
              label={outlet.name}
              value={outlet.name}
            />
          ))}
        </Picker>
      </View>

      {/* Gas Type Selection */}
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Select Gas Type</Text>
        <FlatList
          horizontal
          data={gasTypes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.gasTypeContainer,
                selectedGasType?.id === item.id && styles.selectedGasType,
              ]}
              onPress={() => setSelectedGasType(item)}>
              <Image source={item.image} style={styles.gasImage} />
              <Text style={styles.gasTypeText}>
                {item.weight} - Rs. {item.price}
              </Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Quantity Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Number of Cylinders</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          value={quantity.toString()}
          onChangeText={text => setQuantity(Number(text))}
        />
      </View>

      {/* Refill Toggle */}
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.refillToggle}
          onPress={() => setIncludeRefill(!includeRefill)}>
          <Ionicons
            name={includeRefill ? 'checkbox' : 'square-outline'}
            size={24}
            color={colors.primary}
          />
          <Text style={styles.refillText}>
            Include Cylinder Refill (Weight-based pricing)
          </Text>
        </TouchableOpacity>
      </View>

      {/* New Cylinder Toggle */}
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.refillToggle}
          onPress={() => setNeedNewCylinder(!needNewCylinder)}>
          <Ionicons
            name={needNewCylinder ? 'checkbox' : 'square-outline'}
            size={24}
            color={colors.primary}
          />
          <Text style={styles.refillText}>
            Need New Cylinder (+Rs. {cylinderCost}/cylinder)
          </Text>
        </TouchableOpacity>
      </View>

      {/* Total Cost Display */}
      <View style={styles.totalCostContainer}>
        <Text style={styles.totalCostText}>
          Total Cost: Rs. {calculateTotalCost()}
        </Text>
      </View>

      {/* Error Message */}
      {errorMessage ? (
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
        </View>
      ) : null}

      {/* Request Now Button */}
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default OrderGasScreen;

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
  inputContainer: {
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.secondary,
    marginBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    backgroundColor: colors.gray,
  },
  gasTypeContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  selectedGasType: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 5,
  },
  gasImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  gasTypeText: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  refillToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  refillText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  totalCostContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  totalCostText: {
    fontSize: 18,
    fontFamily: fonts.Bold,
    color: colors.primary,
  },
  errorMessageContainer: {
    marginBottom: 20,
  },
  errorMessageText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.danger,
  },
  checkoutButton: {
    backgroundColor: colors.success,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.Bold,
  },
});
