import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter";

function ReduxScreen() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View>
            <Pressable style={style.button}
                onPress={() => dispatch(increment())}>
                <Text>increment</Text>
            </Pressable>
            <Pressable style={style.button}
                onPress={() => dispatch(decrement())}>
                <Text>decrement</Text>
            </Pressable>
            <Text>{count}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    button: {
        height: 50, width: 150,
        backgroundColor: 'red',
        marginTop: 20
    }
})
export default ReduxScreen