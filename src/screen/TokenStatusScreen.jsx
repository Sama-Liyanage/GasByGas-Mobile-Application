import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../utils/color';
import {fonts} from '../utils/font';
import {useNavigation} from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

const TokenStatusScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRedeem = () => {
    navigation.navigate('DELIVERY_DETAILS');  // Navigate to the DeliveryDetailsScreen
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
      <Text style={styles.title}>Your token is ready to use</Text>
      <Text style={styles.subtitle}>
        You have 45 minutes to redeem your token. {'\n'}Each token can only be
        used once.
      </Text>

      <View style={styles.tokenContainer}>
        <Text style={styles.label}>Token</Text>
        <View style={styles.tokenRow}>
          <Text style={styles.token}>HJF4GK</Text>
          <TouchableOpacity style={styles.copyButton}>
            <Text style={styles.copyButtonText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tokenContainer}>
        <Text style={styles.label}>Expires in</Text>
        <View style={styles.tokenRow}>
          <Text style={styles.token}>45 minutes</Text>
          <TouchableOpacity style={styles.copyButton}>
            <Text style={styles.copyButtonText}>Set reminder</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.redeemButton} onPress={handleRedeem}>
        <Text style={styles.redeemButtonText}>Redeem token</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: colors.primary,
    fontFamily: fonts.Bold,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.gray,
    marginBottom: 20,
    fontFamily: fonts.Regular,
  },
  tokenContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: colors.secondary,
    fontFamily: fonts.Medium,
  },
  tokenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.grayLight,
    padding: 10,
    borderRadius: 8,
  },
  token: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    fontFamily: fonts.SemiBold,
  },
  copyButton: {
    backgroundColor: colors.gray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  copyButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
    fontFamily: fonts.Medium,
  },
  redeemButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  redeemButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: fonts.Bold,
  },
});

export default TokenStatusScreen;
