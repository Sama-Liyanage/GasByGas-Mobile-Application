import { Image, StyleSheet, Text, View } from 'react-native'
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
        tempor incididunt ut labore et dolore .blaaaa
      </Text>
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
})