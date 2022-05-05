import React, { useState, useEffect } from "react";
import { Pressable, Text, View, StyleSheet, FlatList, ImageBackground, ScrollView, Image, Modal, TextInput } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";
import { hp, wp } from "../utils/dimension";
import FICE_FONTS from "../utils/fonts";



function ProfileSetup({ visible1, press }) {
    return (
        <Modal visible={visible1} transparent={true}>
            <View style={[style.mainview, { justifyContent: 'center', }]}>

                <Text style={style.profile}>ProfileSetup</Text>
                <Text style={style.uppertext}>Add a profile picture, create a bio, link you {'\n'}website & social media</Text>
                <Text style={style.passage}>Add a profile picture, create a bio, link your {'\n'}
                    website & social media. add your services,{'\n'}
                    description of services & price of each. Link {'\n'}
                    your account to Stripe to start getting paid{'\n'}
                    for your services. </Text>
                <OkButton btnpress={press} />
            </View>
        </Modal>
    )
}
function OkButton({ btnpress, marginRight, alignSelf }) {
    return (
        <Pressable style={[style.button, { alignSelf: alignSelf, marginRight: marginRight }]}
            onPress={btnpress}>

            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}

                colors={['#CBC3E3', "#1e81b0", '#87CEEB']}

                style={style.button1}
            >
                <Text style={style.text}>
                    OK
                </Text>

            </LinearGradient>

        </Pressable>
    )
}
function FiceTV({ visible, press }) {
    return (
        <Modal visible={visible} transparent={true}>
            <View style={[style.mainview]}>

                <Text style={[style.profile, { marginTop: hp(15) }]}>FiceTV</Text>
                <Text style={style.uppertext}>Stream original shows based on your {'\n'}website & category of interest.</Text>

                <OkButton btnpress={press} />
            </View>
        </Modal>
    )
}
function CalendarSchedule({ visible, press }) {
    return (
        <Modal visible={visible} transparent={true}>

            <View style={[style.mainview]}>
                <View style={style.calenderview}>
                    <Text style={[style.profile, { marginTop: hp(15) }]}>Calendar/Schedule</Text>
                    <Text style={style.uppertext}>Keep track of pending, ongoing & {'\n'}completed appointments.</Text>

                    <OkButton btnpress={press} />
                </View>
            </View>

        </Modal>
    )
}

function MenuHome({ visible, press }) {
    return (
        <Modal visible={visible} transparent={true}>
            <View style={[style.mainview, { justifyContent: 'center', }]}>
                <View style={style.calenderview}>
                    <Text style={style.profile}>Menu/Home</Text>
                    <Text style={style.uppertext}>Create & manage appointments, view{'\n'}messages & notifications. Adjust settings.</Text>
                    <Text style={style.passage}>Search jobs, collaborate with artist, manage {'\n'}
                        appointments, view messages & notifications Adjust{'\n'}
                        settings. {'\n'}
                    </Text>
                    <OkButton btnpress={press} alignSelf='flex-end' marginRight={wp(9)} />
                </View>
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',


    },
    profile: {
        color: 'white',
        fontFamily: FICE_FONTS.SFUIText_LightItalic,
        fontSize: RFPercentage(5),
    },
    uppertext: {
        color: 'white',
        fontFamily: FICE_FONTS.SFUIText_Semibold,
        fontSize: RFPercentage(2.5),
        textAlign: 'center',
        marginTop: hp(2.5)
    },
    passage: {
        color: 'white',
        fontFamily: FICE_FONTS.SFUIText_Semibold,
        fontSize: RFPercentage(2.5),
        textAlign: 'center',
        marginTop: hp(3)
    },
    button: {
        height: hp(5.5),
        borderRadius: 10,
        width: wp(25),
        backgroundColor: "lightgrey",
        marginTop: hp(4),

    },
    button1: {
        height: "100%",
        borderRadius: 10,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: RFPercentage(4),
        color: 'white'
    },
    calenderview: {
        alignItems: 'center',
        position: 'absolute',
        bottom: hp(10),
       
    }

})
export { ProfileSetup, FiceTV, CalendarSchedule, MenuHome }