import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FONTS } from '../constants/FONTS'
import { COLORS } from '../constants/COLORS'
import MButton from '../components/MButton'

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <Header title="AIfolios" />
        <Text style={styles.heading}>Machine aided intelligent investing</Text>
        <View style={styles.middleContainer}>
          <Text style={styles.text}>with multi-asset</Text>
          <View>
            <Text style={styles.boldText}> ETF </Text>
            <Text style={styles.boldText}> ESG </Text>
          </View>
          <Text style={styles.text}>portfolios</Text>
        </View>

      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.createAccountText}>Create Account</Text>

        </TouchableOpacity>
        <MButton title="Login"  />
      </View>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "space-evenly",
    padding: 20,
  },
  heading: {
    fontFamily: FONTS.regular,
    fontSize: 64,
    color: COLORS.gray
  },
  middleContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: FONTS.regular
  },
  boldText: {
    fontSize: 12,
    fontFamily: FONTS.bold
  },
  bottomContainer: {
    alignItems: "flex-end"
  },
  createAccountText: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.5,
    marginBottom: 20,
  }
})