import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/color';
import {fonts} from '../utils/font';

const ProfileScreen = () => {
  const navigation = useNavigation();

  // User Details
  const [name, setName] = useState('John Doe');
  const [phone, setPhone] = useState('+1 234 567 890');
  const [email, setEmail] = useState('john.doe@example.com');
  const [nic, setNic] = useState('123456789V');

  // Delivery Address
  const [address, setAddress] = useState('123 Main Street, City, Country');

  // State for password change
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdateProfile = () => {
    // Add logic to update user profile
    Alert.alert('Profile updated successfully!');
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    // Add logic to change password
    Alert.alert('Password changed successfully!');
  };

  const handleLogOut = () => {
    // Add logic to log the user out (e.g., clearing authentication token)
    Alert.alert('Logged out successfully');
    // Redirect to login or home screen after logout
    navigation.replace('LoginScreen');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButtonWrapper}
          onPress={() => navigation.goBack()}>
          <Ionicons
            name={'arrow-back-outline'}
            color={colors.primary}
            size={25}
          />
        </TouchableOpacity>

        {/* Screen Header */}
        <Text style={styles.headerText}>Profile</Text>

        {/* User Details */}
        <View style={styles.section}>
          <Text style={styles.labelText}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.labelText}>Phone</Text>
          <TextInput
            style={styles.textInput}
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.labelText}>NIC</Text>
          <TextInput
            style={styles.textInput}
            value={nic}
            onChangeText={setNic}
          />
        </View>

        {/* Update Profile Button */}
        <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>

        {/* Change Password Section */}
        <View style={styles.section}>
          <Text style={styles.labelText}>Old Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry
            value={oldPassword}
            onChangeText={setOldPassword}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.labelText}>New Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.labelText}>Confirm New Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>

        {/* Delivery Address */}
        <View style={styles.section}>
          <Text style={styles.labelText}>Delivery Address</Text>
          <TextInput
            style={styles.textInput}
            value={address}
            onChangeText={setAddress}
          />
        </View>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogOut}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

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
  section: {
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.secondary,
    marginBottom: 5,
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
  button: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
});

export default ProfileScreen;
