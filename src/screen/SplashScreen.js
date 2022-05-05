import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image, Dimensions } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { Header } from "react-native/Libraries/NewAppScreen";
import { useEffect } from "react/cjs/react.development";
import { Button, Flatlist1, FlatList2, Header1,Header2, Header3 } from "../components/task1Component";
function SplashScreen({navigation}){
  
   
        useEffect(() => {
          const timer = setTimeout(()=>{
            navigation.navigate('Task2')
          }, 2000);
        })
    return(
<View style={{flex:1,backgroundColor:'white'}}>
   <ImageBackground source={require('../assets/splash1.png')} style={style.image}></ImageBackground>

   
</View>
    )
}
const style=StyleSheet.create({
   image:{
     width: Dimensions. get('window'). width,
     height: Dimensions. get('window'). height
      
   }
})
export default SplashScreen