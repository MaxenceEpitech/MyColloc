import React, { Component } from 'react'

import {
    StyleSheet,
    ImageBackground,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { darkThemeColors } from "../Styles/ScreenStyles";
import images from "../../../assets/Images";

export class Background extends Component {
    render() {
        return (
            <LinearGradient
                colors={darkThemeColors.gradientDark.getTab()}
                style={style.background}
            >
                <ImageBackground
                    resizeMode="cover"
                    source={images.background}
                    style={{ width: '100%', height: '60%' }}
                />
                <KeyboardAvoidingView
                    style={style.wrapper}
                    behavior="padding" enabled
                >
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
                        keyboardDismissMode="interactive"
                    >
                        {this.props.content}
                    </ScrollView>
                </KeyboardAvoidingView>
            </LinearGradient>
        )
    }
}

const style = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%"
    },
    wrapper: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        top: 0,
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
})
