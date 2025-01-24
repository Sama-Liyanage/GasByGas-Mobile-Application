import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/color';
import {fonts} from '../utils/font';
import {useNavigation} from '@react-navigation/native';

const DeliveryDetailsScreen = () => {
  const navigation = useNavigation();

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

      <Text style={styles.successMessage}>Token redeemed successfully</Text>

      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Delivery date</Text>
          <Ionicons name="calendar-outline" size={20} color={colors.black} />
        </View>
        <Text style={styles.value}>Jan 1, 2022</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Delivery time</Text>
          <Ionicons name="time-outline" size={20} color={colors.black} />
        </View>
        <Text style={styles.value}>9:00 AM - 10:00 AM</Text>
      </View>

      <Text style={styles.description}>
        What's next? We'll send you a reminder the day before your delivery. You
        can also update your order or cancel it at any time.
      </Text>

      <View style={styles.nextStepsContainer}>
        {/* <Image source={require('../assets/next.png')} style={styles.icon} /> */}
        <View>
          <Text style={styles.nextStepsTitle}>Next steps</Text>
          <Text style={styles.nextStepsText}>
            Please hand over the empty cylinder and payment at the specified
            outlet on the scheduled date
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}></Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successMessage: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    color: colors.black,
    marginBottom: 20,
    marginVertical: 20,
  },
  infoContainer: {
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    color: colors.black,
  },
  value: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.black,
  },
  description: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.black,
    marginTop: 10,
    marginBottom: 20,
  },
  nextStepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grayLight,
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  nextStepsTitle: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    color: colors.black,
  },
  nextStepsText: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fonts.Bold,
    color: colors.white,
  },
});
