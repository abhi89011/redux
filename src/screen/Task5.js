import React, { useState, useEffect } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import HeaderSqueez from "../components/header";

import { Button, Flatlist1, FlatList2, Header1, Header2, Header3 } from "../components/task1Component";
import { getPosts, login } from "../services/api";



function Task5({ navigation }) {
    const [abc, setabc] = useState([])
    const x = []
    const [abc1, setabc1] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        // let result = await getPosts()
        // let array = result?.data?.data

        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];
        //     // console.log(element.email)
        //     x.push(element)
        //     // console.log(x)
        // }
        // setabc([...x])
        let response = await login({ user_type: 'professional', phone: "9915170567", password: "123456" })
        console.log(response.data?.data)
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', borderWidth: 1 }}>
            <HeaderSqueez
                first={<View style={style.firstview}>
                    <Image source={require('../assets/back.png')} style={style.back} />
                </View>}

                second={<View style={style.firstview}>
                    <Image source={require('../assets/logoTransparentBack.png')} style={style.logo} />
                </View>}
            />
            <FlatList 
                data={abc}
                renderItem={({ item, index }) => <Text style={{ fontFamily: 'Nunito-ExtraBold', fontSize: 18, color: 'black' }}>{item.email}{index}</Text>}
            />
            {/* {
                abc.map((i) => {
                    return (
                        <Text>
                            {i.email}
                        </Text>
                    )
                })
            } */}

        </View>
    )
}
const style = StyleSheet.create({
    firstview: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    back: {
        height: '80%',
        width: '80%'
    },
    logo: {
        height: '50%',
        width: '50%'
    }
})
export default Task5