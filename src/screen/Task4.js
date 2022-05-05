import React, { useState, useEffect } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { Header } from "react-native/Libraries/NewAppScreen";
import { Button, Flatlist1, FlatList2, Header1, Header2, Header3 } from "../components/task1Component";
import HeaderSqueez, { } from '../components/header'
import Swiper from "react-native-deck-swiper";
import { getPosts } from "../services/api";
function Task4({ navigation }) {
    const [post, setPost] = useState([])
    const [abc, setabc] = useState([{ name: 'abhi' }])
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        let result = await getPosts()
        // console.log(result.data.tested)
        let array = result?.data?.tested
        console.log(array)
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
            console.log(element.firstdoseadministered, 'Tested')
        }
       
        // return array;
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', borderWidth: 1 }}>
            {/* {
                abc.map((i) => {
                    return (
                        <Text>{i}</Text>
                    )
                })
            } */}
        </View>
    )
}
const style = StyleSheet.create({

})
export default Task4