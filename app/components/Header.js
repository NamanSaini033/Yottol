import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/COLORS'
import { FONTS } from '../constants/FONTS'

const Header = ({ title,longLength }) => {
    return (
        <>
            <Text style={styles.heading}>{title}</Text>
            <View style={longLength? styles.longUnderline :styles.underline}>
                <View style={styles.circle}></View>
            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    heading: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        lineHeight: 22,
        color: COLORS.gray,
    },
    longUnderline:{
        borderBottomWidth: 2,
        borderBottomColor: COLORS.pink,
        width: "35%",
        marginTop: 5,
    },
    underline: {
        borderBottomWidth: 2,
        borderBottomColor: COLORS.pink,
        width: "17%",
        marginTop: 5,
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: COLORS.pink,
        alignSelf: "flex-end",
        position: "absolute",
        bottom: -6,
        right: -10
    }
})