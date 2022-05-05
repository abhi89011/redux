import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { Header } from "react-native/Libraries/NewAppScreen";
import { Button, Flatlist1, FlatList2, Header1, Header2, Header3 } from "../components/task1Component";
import HeaderSqueez, { } from '../components/header'
import Swiper from "react-native-deck-swiper";
function Task2({ navigation }) {
    const [arr, setarr] = useState([
        require('../assets/men1.jpeg'),
        require('../assets/men1.jpeg'),
        require('../assets/men1.jpeg'),
        require('../assets/men1.jpeg'),



    ])
    const [arr1, setarr1] = useState([
        { path: "https://static.toiimg.com/photo/66178926.cms" },
        { path: "https://c.ndtvimg.com/2019-06/s1vo3be8_thali_625x300_15_June_19.jpg" },
        { path: "https://c.ndtvimg.com/2019-06/s1vo3be8_thali_625x300_15_June_19.jpg" },
        { path: "https://static.toiimg.com/photo/66178926.cms" },

    ])

    function LeftSwipe() {
        return (
            <View style={{ backgroundColor: 'rgba(218,0,235,0.6)', alignItems: 'center', justifyContent: 'center', borderWidth: 2, height: 480, width: '100%', borderRadius: 10, borderColor: 'white' }}>
                <View style={{ height: 90, width: 90, backgroundColor: 'rgba(255,255,255,0.5)', alignItems: 'center', justifyContent: 'center', borderRadius: 70 }}>
                    <Image source={require('../assets/cross.png')} style={{ height: 50, width: 50, resizeMode: 'contain' }}></Image>
                </View>
            </View>
        )
    }
    function RightSwipe() {
        return (
            <View style={{ backgroundColor: 'rgba(49,10,130,0.8)', alignItems: 'center', justifyContent: 'center', borderWidth: 2, height: 480, width: '100%', borderRadius: 10, borderColor: 'white' }}>
                <View style={{ height: 90, width: 90, backgroundColor: 'rgba(255,255,255,0.5)', alignItems: 'center', justifyContent: 'center', borderRadius: 70 }}>
                    <Image source={require('../assets/check.png')} style={{ height: 50, width: 50, resizeMode: 'contain' }}></Image>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.21', alignItems: 'center', borderWidth: 1 }}>

            <Pressable style={{ height: 100, width: 100, backgroundColor: 'red', borderRadius: 10, marginTop: 50, marginBottom: 30, alignSelf: 'center' }}
                onPress={() => alert('pressed')}></Pressable>
            <Swiper
                cards={arr}
                renderCard={(arr) => {
                    return (
                        <ImageBackground source={arr} style={style.img} imageStyle={{ borderRadius: 10 }}>
                            <View style={{ marginLeft: 10, position: 'absolute', bottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={style.name}>Hellow, 21</Text>
                                <Image source={require('../assets/profileIcon.png')} style={{ height: 20, width: 20, resizeMode: 'contain', marginLeft: 10 }}></Image>
                            </View>
                        </ImageBackground>
                    )
                }}
                onSwiped={(cardIndex) => { console.log(cardIndex) }}
                onSwipedAll={() => { console.log('onSwipedAll') }}
                stackSize={5}
                cardIndex={0}
                backgroundColor={'#4FD0E9'}
                overlayLabels={{
                    // bottom: {
                    //     element: <ProfileOverLay/>,
                    // },
                    left: {
                        element: <LeftSwipe />
                    },
                    right: {
                        element: <RightSwipe />
                    }
                }}
            >
                <Button
                    onPress={() => { console.log('oulala') }}
                    title="Press me">
                    You can press me
                </Button>

            </Swiper>


        </View>
    )
}
const style = StyleSheet.create({
    img: {
        height: 480,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
        // borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
    },
    outerview: {
        height: 70,
        backgroundColor: 'white',
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    name: {
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 20,
        color: 'white',

    }
})
export default Task2