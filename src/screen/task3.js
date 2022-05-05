import React, { useState, useEffect } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image, Modal } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Header } from "react-native/Libraries/NewAppScreen";
import { Button, Flatlist1, FlatList2, Header1, Header2, Header3 } from "../components/task1Component";
import HeaderSqueez, { } from '../components/header'
import Swiper from "react-native-deck-swiper";
import { Calendar } from "react-native-calendars";
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
import ImageCropPicker from "react-native-image-crop-picker";

function Task3({ navigation }) {
    const [date, setDate] = useState('09-10-2021');
    const [visible1, setvisible1] = useState(false)
    const [arr, setarr] = useState([{ path: require('../assets/uploadimage.png'), onPress: () => setvisible1(true) }])
    const [arr1, setarr1] = useState([])
    const [image, setimage] = useState([
        { path: require('../assets/uploadimage.png'), onPress: () => setvisible1(!visible1) }
    ])

    function Modalview() {
        return (
            <Modal transparent={true} visible={visible1} style={{ borderWidth: 1 }}>
                <View style={style.view}>
                    <View style={style.modalview}>
                        <View style={style.innerview}>
                            <Pressable onPress={() => setvisible1(!visible1)}>
                                <Image source={require('../assets/cancel.png')} style={style.cancle} />
                            </Pressable>
                            <Text style={style.uploadimage}>Upload Image</Text>
                            <View style={style.imageouterview}>
                                <View style={style.imageview}>
                                    <Image source={require('../assets/camera.png')} style={style.camera} />
                                    <Text style={style.cameratext}>Camera</Text>
                                </View>
                                <Pressable style={style.imageview} onPress={() => Amage()}>
                                    <Image source={require('../assets/gallery.png')} style={style.camera} />
                                    <Text style={style.cameratext}>Gallery</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    function Amage() {
        return (
            ImageCropPicker.openPicker({
                width: 300,
                height: 400,
                cropping: true
            })
                .then(image => {
                    console.log('Hello')
                    let x = arr1
                    x.push({ path: { uri: image.path } });
                    console.log(x)
                    // setarr1(x)
                    setarr1([...x])
                    // let abc = arr1

                    // let newone = [{ path: { uri: image.path } }].concat(arr)
                    // setarr1([...abc, ...newone])


                    // .then(img => {
                    //     let arr = image
                    //     let newone = [{path:img.path}].concat(arr)
                    //     setimage(newone)
                    //     console.log(newone)
                    setvisible1(false)

                })


        )
    }



    function Camera() {
        return (
            ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
            }).then(image => {
                console.log(image);
            })
        )
    }

    useEffect(() => {

    }, [arr1])
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.21', alignItems: 'center' }}>
            <ScrollView style={{ width: '100%' }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Pressable style={{ height: 100, width: 100, backgroundColor: 'red', borderRadius: 10, marginTop: 50, marginBottom: 30 }}
                        onPress={() => alert('pressed')}></Pressable>

                    <DatePicker
                        style={style.datePickerStyle}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="DD/MM/YYYY"
                        minDate="01-01-1900"
                        maxDate="01-01-2050"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                right: 0,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                borderColor: "gray",
                                alignItems: "flex-start",
                                borderWidth: 0,
                                borderBottomWidth: 0.5,
                            },
                            placeholderText: {
                                fontSize: 20,
                                color: "gray"
                            },
                            dateText: {
                                fontSize: 18,
                                fontFamily: 'Nunito-Bold',
                                color: 'rgba(0,0,0,0.5)'
                            }
                        }}
                        onDateChange={(date) => {
                            setDate(date);
                        }}
                    />

                    <Pressable
                        style={{
                            height: 50, width: 200, justifyContent: 'center',
                            alignItems: "center", borderWidth: 2, borderColor: 'red',
                            marginTop: 10, borderRadius: 10, alignSelf: 'center'
                        }}
                        onPress={() => setvisible1(true)}
                    >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['red', 'green']} style={[style.linearGradient, { borderRadius: 10 }]}>
                            <Text style={{ color: 'white', fontSize: 20 }}>press</Text>

                        </LinearGradient>

                    </Pressable>
                    <Modalview />
                    <View style={{ width: '90%', alignSelf: 'center', maxHeight: 500, marginTop: 10 }}>
                        <FlatList
                            data={arr1.concat(arr)}
                            numColumns={3}
                            renderItem={({ item, index }) => {
                                return (

                                    <Pressable onPress={item.onPress}>
                                        <ImageBackground source={item.path} style={{ height: 155, width: 106, marginRight: 10, borderRadius: 5, }} resizeMode='contain' >
                                            {index == arr1.length ? null :
                                                <Pressable style={style.deleteview}
                                                    onPress={() => {
                                                        arr1.splice(index, 1)
                                                        setarr1([...arr1])
                                                    }}
                                                >
                                                    <MaterialIcons name='delete-forever' size={15} color='#FF5959' />
                                                </Pressable>}
                                        </ImageBackground>
                                    </Pressable>

                                )
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const style = StyleSheet.create({
    img: {
        height: 170,
        width: '94%',
        resizeMode: 'contain',
        alignSelf: 'center',
        borderWidth: 1
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
    linearGradient: {
        height: '100%',
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'

    },
    datePickerStyle: {
        width: 230,
    },
    text: {
        textAlign: 'left',
        width: 230,
        fontSize: 16,
        color: "red"
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
    modalview: {
        width: '85%',
        backgroundColor: 'white',
        height: 170,
        position: 'absolute',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7
    },
    innerview: {
        width: "90%",
        height: '90%',
        //borderWidth:1,

    },
    cancle: {
        height: 21,
        width: 21,
        alignSelf: 'flex-end'
    },
    uploadimage: {
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: "Raleway-Bold",
        color: "#363636",
        marginTop: -10
    },
    imageouterview: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    imageview: {
        alignItems: 'center',

    },
    camera: {
        height: 60,
        width: 60,
    },
    cameratext: {
        alignSelf: 'center',
        fontSize: 12,
        fontFamily: "Raleway-Medium",
        color: "#363636"
    },
    deleteview: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: "white", position: 'absolute',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default Task3