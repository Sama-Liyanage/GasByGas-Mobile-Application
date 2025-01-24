import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  RadioButton,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/color';
import {fonts} from '../utils/font';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const OrderGasScreen = () => {
  const navigation = useNavigation();
  const [selectedOutlet, setSelectedOutlet] = useState('');
  const [gasType, setGasType] = useState('Domestic');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [deliveryPeriod, setDeliveryPeriod] = useState('');
  const [outlets, setOutlets] = useState([
    // Example outlet data based on user location or district
    {id: 1, name: 'Outlet A', district: 'District 1'},
    {id: 2, name: 'Outlet B', district: 'District 2'},
    {id: 3, name: 'Outlet C', district: 'District 3'},
  ]);

  useEffect(() => {
    // Simulating delivery period based on selected outlet
    if (selectedOutlet) {
      setDeliveryPeriod('Pickup in 3–5 days');
      setErrorMessage('');
    } else {
      setDeliveryPeriod('');
      setErrorMessage('No delivery scheduled for this outlet currently.');
    }
  }, [selectedOutlet]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRequestNow = async () => {
    if (!selectedOutlet || !quantity || quantity <= 0) {
      setErrorMessage('Please select an outlet and enter a valid quantity.');
      return;
    }
    setLoading(true);

    try {
      // Simulating API request with timeout
      await new Promise(resolve => setTimeout(resolve, 2000));

      alert(
        `Request placed successfully!\n\nDetails:\nOutlet: ${selectedOutlet}\nGas Type: ${gasType}\nQuantity: ${quantity}\nExpected Delivery: ${deliveryPeriod}`,
      );
    } catch (error) {
      setErrorMessage(
        'There was an error processing your request. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoToTokenStatus = () => {
    navigation.navigate('TokenStatusScreen'); // Navigate to the Token Status Screen
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

      {/* Gas Type Selection (Radio Buttons) */}
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Select Gas Type</Text>

        {/* Custom Radio Button for Domestic */}
        <TouchableOpacity
          style={[
            styles.radioButtonContainer,
            gasType === 'Domestic' && styles.selectedRadioButton,
          ]}
          onPress={() => setGasType('Domestic')}>
          <View
            style={[
              styles.radioCircle,
              gasType === 'Domestic' && styles.selectedCircle,
            ]}
          />
          <Text style={styles.radioButtonText}>Domestic Cylinder</Text>
        </TouchableOpacity>

        {/* Custom Radio Button for Industrial */}
        <TouchableOpacity
          style={[
            styles.radioButtonContainer,
            gasType === 'Industrial' && styles.selectedRadioButton,
          ]}
          onPress={() => setGasType('Industrial')}>
          <View
            style={[
              styles.radioCircle,
              gasType === 'Industrial' && styles.selectedCircle,
            ]}
          />
          <Text style={styles.radioButtonText}>Industrial Cylinder</Text>
        </TouchableOpacity>
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

      {/* Delivery Period */}
      {deliveryPeriod ? (
        <View style={styles.deliveryPeriodContainer}>
          <Text style={styles.deliveryPeriodText}>{deliveryPeriod}</Text>
        </View>
      ) : null}

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
          style={styles.requestButtonWrapper}
          onPress={handleRequestNow}>
          <Text
            onPress={handleGoToTokenStatus}
            style={styles.requestButtonText}>
            Request Now
          </Text>
        </TouchableOpacity>
      )}

      {/* <TouchableOpacity>
        <Text>View Token Status</Text>
      </TouchableOpacity> */}
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
  textInput: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  deliveryPeriodContainer: {
    marginBottom: 20,
  },
  deliveryPeriodText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.success,
  },
  errorMessageContainer: {
    marginBottom: 20,
  },
  errorMessageText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.danger,
  },
  radioButtonText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.primary,
    marginBottom: 10,
  },
  requestButtonWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  requestButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  //
  inputContainer: {
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.secondary,
    marginBottom: 5,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.secondary,
    marginRight: 10,
  },
  selectedCircle: {
    backgroundColor: colors.primary, // Change color when selected
  },
  radioButtonText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  selectedRadioButton: {
    backgroundColor: colors.lightGray, // Optional: Change background when selected
  },
});
