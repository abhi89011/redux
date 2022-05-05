import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image, onPress, Dimensions } from "react-native"
import { hp, wp } from "../utils/dimension";

function HeaderSqueez({ first, second, third, flexDirection, marginLeft, marginRight, alignitem1, alignitem2, alignitem3, marginTop, width }) {
    return (
        <View style={[style.view, { width }]}>
            {/* <Image source={require('../assets/logoTransparentBack.png')}/>
            <Text>Skip</Text> */}
            <View style={{
                flex: 1, height: '100%', alignItems: 'center',
                justifyContent: 'center', flexDirection: flexDirection,
                marginLeft: marginLeft, marginRight: marginRight, marginTop: marginTop
            }}>
                {first}
            </View>
            <View style={{
                flex: 2, height: '100%', alignItems: alignitem2,
                justifyContent: 'center', flexDirection: flexDirection,
                marginLeft: marginLeft, marginRight: marginRight
            }}>
                {second}
            </View>
            <View style={{
                flex: 1, height: '100%', alignItems: alignitem3,
                justifyContent: 'center', flexDirection: flexDirection,
                marginLeft: marginLeft, marginRight: marginRight,
            }}>
                {third}
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        height: hp('10'),
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: "transparent",
        borderColor: 'green',

    }
})
export default HeaderSqueez