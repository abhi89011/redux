import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image, BackHandler,onPress } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Header1 = () => {
    return (
        <View style={style.outerview}>
            <View style={[style.justifydirection, { width: '90%' }]}>
                <View style={style.firstview}>
                    <View style={style.simpledirection}>
                        <Ionicons name="location-outline" size={20} color='black' />
                        <Text style={style.industrial}>Industrial Area</Text>
                    </View>
                    <Text style={{ color: 'black', fontFamily: 'Roboto-Regular', fontSize: 12 }}>Sachtech Solutions, Phase 8B, Industrial Area,Sect...</Text>
                </View>
                <View style={style.simpledirection}>
                    <MaterialCommunityIcons name="brightness-percent" size={20} color='black' />
                    <Text style={style.offer}>Offers</Text>
                </View>

            </View>
        </View>
    )
}
const Header2 = () => {
    return (
        <View style={[style.outerview,{backgroundColor:'transparent',elevation:0,marginTop:10}]}>
            <View style={[style.justifydirection, { width: '90%' ,borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.2)'}]}>
            <View style={style.simpledirection}>
                    <Text style={style.instamart}>instamart</Text>
                </View>
                <View style={style.simpledirection}>
                    <MaterialCommunityIcons name={'lightning-bolt'} size={25} color={'#770737'}/>
                    <View>
                        <Text style={style.grocery}>GROCERY DELIVERED</Text>
                        <Text style={style.inmin}>IN MINUTS</Text>
                    </View>
                </View>
               

            </View>
        </View>
    )
}

const Flatlist1 = ({path,off,txt1,txt2}) => {
    return (
        <View style={{alignItems:'center',marginLeft:15,marginTop:10}}>
        <View style={style.singleview}>
        <Image source={path} style={style.icon}/>
        <View style={style.offerview}>
            <Text style={style.upto}>UPTO</Text>
            <Text style={style.off}>{off} OFF</Text>
        </View>
                    </View>
                   <Text style={[style.fruits,{marginTop:10}]}>{txt1}</Text>
                   <Text style={[style.fruits,{marginTop:-4}]}>{txt2}</Text>
                   </View>
    )
}
const Button = ({onPress}) => {
    return (
        <Pressable style={{height:50,width:'90%',backgroundColor:'#770737',borderRadius:10,
                   alignItems:'center',justifyContent:'center',marginBottom:10,}}
                   onPress={onPress}>
       <Text style={{fontFamily:'Nunito-Regular',fontSize:18,color:'white'}}>Browse more on <Text style={{fontFamily:'Nunito-ExtraBold',fontSize:24,color:'white'}}>instamart</Text></Text>
                   </Pressable>
    )
}

const Header3 = () => {
    return (
        <View style={[style.outerview,{elevation:0,marginBottom:-10,marginTop:10}]}>
            <View style={[style.justifydirection, { width: '90%' }]}>
                <View style={style.firstview}>
                    <View style={style.simpledirection}>
                        <MaterialCommunityIcons name="home-lightning-bolt-outline" size={20} color='black' />
                        <Text style={[style.industrial,{marginLeft:3}]}>In the Spotlight!</Text>
                    </View>
                    <Text style={{ color: 'black', fontFamily: 'Roboto-Regular', fontSize: 12,color:'rgba(0,0,0,.4)' ,letterSpacing:0.2}}>Explore sponsored partner brands</Text>
                </View>
                <View style={[style.simpledirection,{marginTop:-5}]}>
                <Text style={[style.offer,{marginRight:5,color:'rgba(0,0,0,.9)'}]}>SEE ALL</Text>
                    <AntDesign name="rightcircle" size={20} color='#cc7000' />
                    
                </View>

            </View>
        </View>
    )
}

const FlatList2=({path})=>{
    return(
        <View>
        <ImageBackground source={{uri:(path)}} 
        imageStyle={{borderRadius:10}} style={style.image}>
            <View style={style.offerview1}>
            
            <Text style={[style.off,{fontWeight:'bold',fontSize:12}]}> 60% OFF <Text style={[style.upto,{fontFamily:"Nunito-Regular",fontSize:12,}]}>UPTO ₹120</Text></Text>
            </View>
        </ImageBackground>
        <Text style={style.name}>Katani Dhaba /Phase 3</Text>
        </View>
    )
}

const style = StyleSheet.create({
    outerview: {
        height: 70,
        backgroundColor: 'white',
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    simpledirection: {
        flexDirection: "row",
        alignItems: 'center'
    },
    justifydirection: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    innerview: {
        borderWidth: 1,
        width: '95%',
        height: 60
    },
    industrial: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Nunito-ExtraBold',

    },
    offer: {
        color: 'black',
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 15,
        marginLeft: 10
    },
    instamart:{
        fontSize:27,
        fontFamily: 'Nunito-ExtraBold',
        color: '#770737',
    },
    grocery:{
        fontSize:10,
        fontFamily: 'Nunito-Bold',
        color: '#770737',
    },
    inmin:{
        fontSize:14,
        fontFamily: 'Nunito-ExtraBold',
        color: '#770737',
        letterSpacing:3.1,
        marginTop:-3
    },
    singleview:{
        height:80,
        width:80,
        backgroundColor:'pink',
        borderRadius:45,
        alignItems:'center'
    },
    icon:{
        height:40,
        width:40,
        marginTop:20
    },
    offerview:{
        height:28,
        width:80,
        backgroundColor:'#ffe5b4',
        borderRadius:7,
        alignItems:'center',
        borderWidth:2,
        borderColor:'#cc7000',
        justifyContent:'center'
    },
    upto:{
        color:'#cc7000',
        fontSize:10
    },
    off:{
        color:'#cc7000',
        fontSize:10,
        fontFamily: 'Nunito-ExtraBold',
        marginTop:-3
    },
    fruits:{
        color:'black',
        fontFamily:'Nunito-Regular'
    },
    image:{
        height:100,
        width:160,
        borderRadius:20,
        justifyContent:'flex-end',
        marginLeft:20
    },
    offerview1:{
        height:30,
        width:'85%',
        backgroundColor:'white',
        borderRadius:7,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:5,
        marginLeft:-5
    },
    name:{
        fontSize:15,
        fontFamily:"Nunito-ExtraBold",
        color:'black',
        marginTop:3,
        marginLeft:20
    }

})
export { Header1,Header2 ,Flatlist1,Button,Header3,FlatList2}