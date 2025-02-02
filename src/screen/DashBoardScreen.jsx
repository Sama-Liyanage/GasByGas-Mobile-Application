import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from "react-native-vector-icons/Ionicons";
import {colors} from '../utils/color';
import {fonts} from '../utils/font';

const DashboardScreen = () => {
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
      <Text style={styles.welcomeText}>Welcome to GasByGas!</Text>

      <View style={styles.cardContainer}>
        <DashboardCard
          title="Order Gas Cylinder"
          icon="local-gas-station"
          color={colors.primary}
          onPress={() => navigation.navigate('ORDER_GAS')}
        />

        <DashboardCard
          title="Token Status"
          icon="check-circle"
          color={colors.secondary}
          onPress={() => navigation.navigate('ORDER_HISTORY')}
        />

        <DashboardCard
          title="Account Details"
          icon="account-circle"
          color={colors.tertiary}
          onPress={() => navigation.navigate('PROFILE')}
        />
      </View>
    </View>
  );
};

const DashboardCard = ({title, icon, color, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: color}]}
      onPress={onPress}>
      <Icon name={icon} size={28} color={colors.white} style={styles.icon} />
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    alignItems: 'center',
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 26,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    marginVertical: 20,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    marginRight: 15,
  },
  cardText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.Medium,
  },
});

export default DashboardScreen;
