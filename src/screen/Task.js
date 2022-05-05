import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image, onPress, Dimensions } from "react-native"
import HeaderSqueez from "../components/header";
function Task10() {
    return (

        <View style={style.mainView}>
            <View>

                <HeaderSqueez
                   
                    second={<Image source={require("../assets/logoTransparentBack.png")} style={[style.img,{alignSelf:'center',width:'50%',height:30}]}></Image>}
                    first={<Image source={require("../assets/icon.png")} style={[style.img,{alignSelf:'flex-end',marginRight:10,height:70,width:70,resizeMode:'contain'}]}></Image>}

                >

                </HeaderSqueez>


            </View>

        </View>
    )
}
const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "white",
        alignItems:'center'
    },
    img: {
        height: 40,
        width: 40,


    }
}
)
export default Task10