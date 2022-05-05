import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { Header } from "react-native/Libraries/NewAppScreen";
import { Button, Flatlist1, FlatList2, Header1,Header2, Header3 } from "../components/task1Component";
function Task({navigation}){
    const [arr,setarr]= useState([
        {path:require('../assets/vegetable.png'),off:'20%',txt1:'Fruits &',txt2:'Vegetables'},
        {path:require('../assets/food.png'),off:'10%',txt1:'Dairy &',txt2:'Bread'},
        {path:require('../assets/meat.png'),off:'20%',txt1:'Meaty',txt2:'Treats'},
        {path:require('../assets/ramen.png'),off:'15%',txt1:'Instant',txt2:'Food'},
        {path:require('../assets/apple-juice.png'),off:'15%',txt1:'Juiece',txt2:''},
    ])
    const [arr1,setarr1]= useState([
        {path:"https://static.toiimg.com/photo/66178926.cms"},
        {path:"https://c.ndtvimg.com/2019-06/s1vo3be8_thali_625x300_15_June_19.jpg"},
        {path:"https://c.ndtvimg.com/2019-06/s1vo3be8_thali_625x300_15_June_19.jpg"},
        {path:"https://static.toiimg.com/photo/66178926.cms"},
        
    ])
    return(
<View style={{flex:1,backgroundColor:'rgba(0,0,0,0.21'}}>
    <Header1/>
    <ScrollView>
    <Header2/>
    <Image source={require('../assets/icon1.jpg')} style={style.img}/>
   
    <View style={[style.outerview,{backgroundColor:'white',marginTop:10,height:210}]}>
   <FlatList horizontal
   data={arr}
   renderItem={({item,index})=><Flatlist1 path={item.path} off={item.off} txt1={item.txt1} txt2={item.txt2} />}
   />
   <Button onPress={()=>navigation.navigate('Task2')}/>
   </View>
<Header3/>

<View style={[style.outerview,{backgroundColor:'white',marginTop:10,height:130}]}>
   <FlatList horizontal
   data={arr1}
   renderItem={({item,index})=><FlatList2 path={item.path}  />}
   /></View>
</ScrollView>
</View>
    )
}
const style=StyleSheet.create({
    img:{
        height:170,
        width:'94%',
        resizeMode:'contain',
        alignSelf:'center',
        borderWidth:1
    },
    outerview: {
        height: 70,
        backgroundColor: 'white',
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
export default Task