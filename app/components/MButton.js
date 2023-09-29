import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/COLORS';
import { FONTS } from '../constants/FONTS';

const MButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MButton

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: COLORS.pink,
        paddingVertical: 8,
        paddingHorizontal: 38,
        borderRadius: 40,
    },
    btnText: {
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: COLORS.white
    }
})