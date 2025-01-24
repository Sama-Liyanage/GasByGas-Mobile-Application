import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/color';
import { fonts } from '../utils/font';

const TokenStatusScreen = () => {
  const [tokens, setTokens] = useState([
    {
      tokenId: 'T12345',
      outletName: 'Outlet A',
      deliveryDate: '2025-02-10',
      status: 'Pending',
    },
    {
      tokenId: 'T12346',
      outletName: 'Outlet B',
      deliveryDate: '2025-02-12',
      status: 'Confirmed',
    },
    {
      tokenId: 'T12347',
      outletName: 'Outlet C',
      deliveryDate: '2025-02-14',
      status: 'Reallocated',
    },
  ]);

  const handleCancelToken = (tokenId) => {
    Alert.alert(
      'Cancel Token',
      `Are you sure you want to cancel token ID ${tokenId}?`,
      [
        { text: 'No' },
        { text: 'Yes', onPress: () => cancelToken(tokenId) },
      ]
    );
  };

  const cancelToken = (tokenId) => {
    setTokens((prevTokens) =>
      prevTokens.filter((token) => token.tokenId !== tokenId)
    );
  };

  const renderTokenItem = ({ item }) => (
    <View style={styles.tokenItem}>
      <Text style={styles.tokenText}>Token ID: {item.tokenId}</Text>
      <Text style={styles.tokenText}>Outlet: {item.outletName}</Text>
      <Text style={styles.tokenText}>Delivery Date: {item.deliveryDate}</Text>
      <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
        {item.status}
      </Text>
      {item.status === 'Pending' && (
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => handleCancelToken(item.tokenId)}
        >
          <Text style={styles.cancelButtonText}>Cancel Token</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return colors.warning;
      case 'Confirmed':
        return colors.success;
      case 'Delivered':
        return colors.primary;
      case 'Reallocated':
        return colors.danger;
      default:
        return colors.secondary;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Token Status</Text>

      {/* Notifications */}
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>
          * Your token has been reallocated due to an outlet delay. Please check the new delivery date.
        </Text>
      </View>

      {/* Token List */}
      <FlatList
        data={tokens}
        renderItem={renderTokenItem}
        keyExtractor={(item) => item.tokenId}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default TokenStatusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    paddingTop: 40,
  },
  headerText: {
    fontSize: 30,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
  },
  notificationContainer: {
    backgroundColor: colors.warningLight,
    padding: 15,
    marginBottom: 20,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderColor: colors.warning,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  notificationText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.warning,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 40,
  },
  tokenItem: {
    backgroundColor: colors.grayLight,
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tokenText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.primary,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  statusText: {
    fontSize: 16,
    fontFamily: fonts.Bold,
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  cancelButton: {
    backgroundColor: colors.danger,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 4,
  },
  cancelButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.SemiBold,
  },
});
