import React, { Component, Fragment } from "react";

import { StackedAreaChart } from "react-native-svg-charts";
import { LinearGradient } from "expo-linear-gradient";
import * as shape from "d3-shape";

import {
    AlertIOS,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import { darkThemeColors } from "./Styles/ScreenStyles";

import * as LocalAuthentication from 'expo-local-authentication';
import Biometrics from 'react-native-biometrics'

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam("title", "Home"),
        headerStyle: {
            backgroundColor: "#273"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    });

    clickHandler = async () => {

    }
    componentDidMount = async () => {
        let ret1 = await LocalAuthentication.supportedAuthenticationTypesAsync();
        console.log(ret1);
        let ret2 = await LocalAuthentication.isEnrolledAsync();
        console.log(ret2);
        let ret3 = await LocalAuthentication.authenticateAsync({ fallbackLabel: "YYYY", promptMessage: "UUUUU" });
        console.log(ret3);

        /*
        Biometrics.isSensorAvailable()
            .then((biometryType) => {
                if (biometryType === Biometrics.TouchID) {
                    console.log('TouchID is supported')
                } else if (biometryType === Biometrics.FaceID) {
                    console.log('FaceID is supported')
                } else {
                    console.log('Biometrics not supported')
                }
            })*/
    }

    constructor() {
        super()

        this.state = {
            touchIdType: false,
            faceIdType: false,
            biometryType: null,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.btn}
                    onPress={this.clickHandler}
                    underlayColor="#0380BE"
                    activeOpacity={1}
                >
                    <Text style={{
                        color: '#fff',
                        fontWeight: '600'
                    }}>
                        {"Authenticate with"}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    btn: {
        borderRadius: 3,
        marginTop: 200,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#0391D7'
    }
});

export default HomeScreen;
