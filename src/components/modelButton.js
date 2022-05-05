import React, { useState, useEffect } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image, Modal, TextInput } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";
import { hp, wp } from "../utils/dimension";
import FICE_FONTS from "../utils/fonts";


function OkButton({ press }) {
    return (
        <Pressable style={style.button}
            onPress={press}>


            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}

                colors={['#B1D4E0', '#CBC3E3', '#87CEEB']}

                style={style.button1}
            >
                <Text style={style.text}>
                    OK
                </Text>

            </LinearGradient>

        </Pressable>
    )
}
const style = StyleSheet.create({
    button: {
        height: hp(5.5),
        borderRadius: 10,
        width: wp(25),
        backgroundColor: "lightgrey",
        marginTop: "8%",

    },
    button1: {
        height: "100%",
        borderRadius: 10,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: RFPercentage(4.5),

    }
})
export default OkButton