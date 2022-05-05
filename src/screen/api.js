import React, { useState, useEffect } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image, Modal, TextInput } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Header, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { Button, Flatlist1, FlatList2, Header1, Header2, Header3 } from "../components/task1Component";
import HeaderSqueez, { } from '../components/header'
import Swiper from "react-native-deck-swiper";
import { Calendar } from "react-native-calendars";
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
import ImageCropPicker from "react-native-image-crop-picker";
import { getData, UpdateData } from "../apimanage/services";
//mobimed@yopmail.com
//123456

function Api({ navigation }) {

    const [data, setdata] = useState([])
    const [name, setname] = useState()
    const [job, setjob] = useState()
    const [aa, setaa] = useState(false)


    // async function Abc() {
    //     let response = null
    //     response = await getData()
    //     //console.log(response.data.data, 'responeseeeeeeee')
    //     setdata(response.data.data)
    //    // console.log(data, 'dataaaaa')
    // }
    async function _Update() {

        let response = await UpdateData(name, job)
        //console.log(response.data.data, 'responeseeeeeeee')dskjfh
        //setdata(response.data.data)
        console.log(response.ok)
        if(response.ok){
if(response.data.status){
    navigation.navigate('Task')
}
else(
    alert(response.data.message)
)
        }
        else{
            alert('Network ERROR')
        }
        //response.data.status ? navigation.navigate('Task') : alert(response.data.message)

    }
    // useEffect(
    //     () => {
    //         console.log(data, 'useEffectttttt')
    //     }, [data])

    // function RenderItem({ i }) {
    //     return (
    //         <View style={{ backgroundColor: 'blue', height: 30, justifyContent: 'center', alignItems: 'center', width: 300, borderRadius: 10, marginTop: 10 }}>
    //             <Text style={{ color: 'white', fontWeight: 'bold' }}>{i.email}</Text>
    //         </View>
    //     )
    // }
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.21', alignItems: 'center' }}>
            <ScrollView style={{ width: '100%' }} keyboardShouldPersistTaps='handled'>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Pressable style={{ height: 100, width: 100, backgroundColor: 'red', borderRadius: 10, marginTop: 50, marginBottom: 30 }}
                        onPress={() => alert('pressed')}></Pressable>
                    <TextInput style={{ borderWidth: 2, width: '80%' }} placeholder='Enter your Name'
                        onChangeText={(i) => setname(i)}
                    ></TextInput>
                    <TextInput style={{ borderWidth: 2, width: '80%', marginTop: 10 }} placeholder='Enter your Job'
                        onChangeText={(i) => setjob(i)}
                    ></TextInput>
                    <Pressable
                        style={{
                            height: 50, width: 200, justifyContent: 'center',
                            alignItems: "center", borderWidth: 2, borderColor: 'red',
                            marginTop: 10, borderRadius: 10, alignSelf: 'center'
                        }}
                        onPress={() => _Update()}
                    >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['red', 'green']} style={[style.linearGradient, { borderRadius: 10 }]}>
                            <Text style={{ color: 'white', fontSize: 20 }}>press</Text>

                        </LinearGradient>

                    </Pressable>

                    {/* <FlatList
                        data={data}
                        renderItem={({ item, index }) => <RenderItem i={item} />}
                    /> */}
                    {
                        Object.keys(data).map((i) => {
                            return (<Text>{data[i]}</Text>)
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}
const style = StyleSheet.create({

})
export default Api