import React, { useState, useEffect } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image, Modal, TextInput } from "react-native"
import { CalendarSchedule, FiceTV, MenuHome, ProfileSetup } from "../components/modelComponent";
import { hp } from "../utils/dimension";

function ShowModel() {
    const [visible1, setvisible1] = useState(false)
    const [visible2, setvisible2] = useState(false)
    const [visible3, setvisible3] = useState(false)
    const [visible4, setvisible4] = useState(false)
    return (
        <View style={style.mainview}>
            <Pressable style={style.button}
                onPress={() => setvisible1(true)}
            >
                <Text style={style.btntext}>ProfileSetup</Text>
            </Pressable>
            <Pressable style={style.button}
                onPress={() => setvisible2(true)}
            >
                <Text style={style.btntext}>FiceTV</Text>
            </Pressable>
            <Pressable style={style.button}
                onPress={() => setvisible3(true)}
            >
                <Text style={style.btntext}>CalendarSchedule</Text>
            </Pressable>
            <Pressable style={style.button}
                onPress={() => setvisible4(true)}
            >
                <Text style={style.btntext}>MenuHome</Text>
            </Pressable>
            <ProfileSetup visible1={visible1} press={()=>setvisible1(false)} />
            <FiceTV visible={visible2} press={()=>setvisible2(false)} />
            <CalendarSchedule visible={visible3} press={()=>setvisible3(false)} />
            <MenuHome visible={visible4} press={()=>setvisible4(false)} />
        </View>
    )
}
const style = StyleSheet.create({
    mainview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: "8%",
        width: '60%',
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    btntext: {
        color: 'white',
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 18,

    }

})
export default ShowModel