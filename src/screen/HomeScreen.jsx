import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/color'
import { fonts } from '../utils/font'



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/sample.png")} style={styles.logo} />
      <Image source={require("../assets/banner.png")} style={styles.bannerImage} />
      <Text style={styles.title}>Lorem ipsum dolor.</Text>
      <Text style={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore .blaaaa black ship
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: colors.primary },
          ]}
        //   onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButtonWrapper]}
        //   onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
      },
      logo: {
        height: 50,
        width: 150,
        marginVertical: 30,
      },
      bannerImage: {
        marginVertical: 20,
        height: 300,
        width: 500,
      },
      title: {
        fontSize: 40,
        fontFamily: fonts.SemiBold,
        paddingHorizontal: 20,
        textAlign: "center",
        color: colors.primary,
        marginTop: 40,
      },
      subTitle: {
        fontSize: 18,
        paddingHorizontal: 20,
        textAlign: "center",
        color: colors.secondary,
        fontFamily: fonts.Medium,
        marginVertical: 20,
      },
      buttonContainer: {
        marginTop: 20,
        flexDirection: "row",
        borderWidth: 2,
        borderColor: colors.primary,
        width: "80%",
        height: 60,
        borderRadius: 100,
      },
      loginButtonWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        borderRadius: 98,
      },
      loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.SemiBold,
      },
      signupButtonText: {
        fontSize: 18,
        fontFamily: fonts.SemiBold,
      },
})