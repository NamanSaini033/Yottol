import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FONTS } from '../constants/FONTS'
import { COLORS } from '../constants/COLORS'
import MButton from '../components/MButton'

const CreateAccount = () => {
    return (
        <View style={styles.container}>
            <View>
                <Header title="Create Account" longLength={true} />
            </View>
            <View>
                <Text style={styles.text}>Simple steps </Text>
                <Text style={styles.heading}>Identity</Text>
                <Text style={styles.heading}>Address</Text>
                <Text style={styles.heading}>Activity.</Text>
            </View>

            <View style={styles.bottomContainer}>
                <MButton title="Let's Go" />
            </View>
        </View>
    )
}

export default CreateAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "space-around",
        padding: 20,
    },
    heading: {
        fontFamily: FONTS.regular,
        fontSize: 38,
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
})