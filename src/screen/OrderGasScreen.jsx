import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/color';
import {fonts} from '../utils/font';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const OrderGasScreen = () => {
  const navigation = useNavigation();
  const [typeOrWeight, setTypeOrWeight] = useState('Domestic');
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleOrderSubmit = () => {
    if (!address.trim()) {
      alert('Please enter your delivery address.');
      return;
    }
    alert(
      `Order placed successfully!\n\nDetails:\nType or Weight: ${typeOrWeight}\nQuantity: ${quantity}\nAddress: ${address}`,
    );
    // Here you can integrate the API call to submit the order
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
      <Text style={styles.headerText}>Order Gas Cylinder</Text>

      {/* Type or Weight Picker */}
      <View style={styles.pickerContainer}>
        <Text style={styles.labelText}>Select Type or Weight</Text>
        <Picker
          selectedValue={typeOrWeight}
          style={styles.picker}
          onValueChange={itemValue => setTypeOrWeight(itemValue)}>
          <Picker.Item label="Domestic Cylinder (12.5kg)" value="Domestic" />
          <Picker.Item label="Commercial Cylinder (37.5kg)" value="Commercial" />
          <Picker.Item label="Industrial Cylinder (50kg)" value="Industrial" />
        </Picker>
      </View>

      {/* Quantity Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Quantity</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          value={quantity.toString()}
          onChangeText={text => setQuantity(Number(text))}
        />
      </View>

      {/* Delivery Address Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Delivery Address</Text>
        <TextInput
          style={[styles.textInput, styles.textArea]}
          placeholder="Enter your address"
          placeholderTextColor={colors.secondary}
          multiline
          value={address}
          onChangeText={setAddress}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.orderButtonWrapper}
        onPress={handleOrderSubmit}>
        <Text style={styles.orderButtonText}>Place Order</Text>
      </TouchableOpacity>
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
  pickerContainer: {
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
  inputContainer: {
    marginBottom: 20,
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
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  orderButtonWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  orderButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
});
