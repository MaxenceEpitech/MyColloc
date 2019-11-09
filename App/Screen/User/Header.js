import React, { Component } from 'react'

import {
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    Animated,
} from "react-native";
import { darkThemeColors } from "../Styles/ScreenStyles";
import images from "../../../assets/Images";

export class Header extends Component {
    constructor() {
        super();
        this.state = {
            logoSlide: new Animated.Value(0),
        }
    }

    Animation = () => {
        return (
            Animated.timing(this.state.logoSlide, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            })
        ).start();
    }

    componentDidMount() {
        this.Animation();
    }

    render() {
        let { logoSlide } = this.state;
        return (
            <SafeAreaView
                style={style.header}
            >
                <Animated.Image source={images.mainIcon}
                    style={[style.logo, {
                        transform: [
                            {
                                translateX: logoSlide.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-600, 0]
                                })
                            }
                        ],
                    }
                    ]} />
                <Text style={style.appName}>MyColloC</Text>
                <Text style={style.slogan}>Let's part expenses</Text>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    header: {
        marginTop: "5%",
    },
    logo: {
        marginBottom: "5%",
        borderRadius: 60,
        width: 230,
        height: 230,
        backgroundColor: "rgba(255, 255, 255, 0.3)",

        alignSelf: "center"
    },
    appName: {
        color: darkThemeColors.gradientMain[0],
        textAlign: "center",
        fontFamily: "Elianto",
        fontSize: 40,
        marginBottom: "2%"
    },
    slogan: {
        color: darkThemeColors.gradientMain[0],
        textAlign: "center",
        fontFamily: "ProximaNovaBold"
    },
})
