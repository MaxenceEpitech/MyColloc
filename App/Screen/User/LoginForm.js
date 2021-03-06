import React, { Component } from 'react'

import {
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    SafeAreaView
} from "react-native";
import { darkThemeColors } from "../Styles/ScreenStyles";
import images from "../../../assets/Images";

export class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: false,
            user: {
                email: "",
                password: ""
            },
            emailPlaceholder: "Email",
            passwordPlaceholder: "Password"
        };
    }

    render() {
        return (
            <SafeAreaView style={style.formContainer}>
                <SafeAreaView style={style.formView}>
                    <Image style={style.profileIcon} source={images.profileIcon} />
                    <TextInput
                        ref={(input) => { this.secondTextInput = input; }}
                        onSubmitEditing={() => this.secondTextInput.focus()}
                        returnKeyType={"next"}
                        keyboardType="email-address"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        style={style.defaultInput}
                        autoCorrect={false}
                        placeholder={this.state.emailPlaceholder}
                        text={this.state.user.email}
                        onChangeText={email => this.setState({ user: { ...this.state.user, email: email } })}
                        onFocus={() => this.setState({ emailPlaceholder: "" })}
                    />
                </SafeAreaView>
                <SafeAreaView style={style.formView}>
                    <Image style={style.passwordIcon} source={images.passwordIcon} />
                    <TextInput
                        ref={(input) => this.secondTextInput = input}
                        onSubmitEditing={() => this.props.callLogin(this.state.user)}
                        returnKeyType={"done"}
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        style={style.defaultInput}
                        autoCorrect={false}
                        placeholder={this.state.passwordPlaceholder}
                        text={this.state.user.password}
                        onChangeText={password => this.setState({ user: { ...this.state.user, password: password } })}
                        onFocus={() => this.setState({ passwordPlaceholder: "" })}
                    />
                </SafeAreaView>
                <TouchableOpacity
                    style={style.loginButton}
                    onPress={() => this.props.callLogin(this.state.user)}
                >
                    <Text style={style.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.registerButton}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={style.buttonText}>Don't have an account? </Text>
                    <Text style={[style.buttonText, { fontFamily: "ProximaNovaBold" }]}> Sign Up Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.forgotPasswordButton}
                    onPress={() => this.props.navigation.navigate("ResetPassword", { user: this.state.user })}
                >
                    <Text style={[style.buttonText, { fontFamily: "ProximaNovaBold" }]}>Forgot Password?</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    formContainer: {
        flexDirection: 'column',
        marginBottom: "10%",
        marginLeft: "8%",
        marginRight: "8%",
        marginTop: "15%",
    },
    formView: {
        flexDirection: 'row',
        maxHeight: 50,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.1)",
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: "5%",
    },
    defaultInput: {
        flex: 1,
        height: 50,
        fontFamily: "ProximaNovaRegular",
        textAlign: "center",
        fontSize: 20,
        color: "white",
        paddingRight: "12%",
    },
    filledInput: {
        fontFamily: "ProximaNovaRegular"
    },
    profileIcon: {
        alignSelf: 'center',
        marginLeft: '4%',
        height: 30,
        width: 30,
    },
    passwordIcon: {
        alignSelf: 'center',
        marginLeft: '4%',
        height: 30,
        width: 30,
    },
    loginButton: {
        marginTop: "2%",
        height: 50,
        justifyContent: 'center',
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: 30,
    },
    loginButtonText: {
        color: darkThemeColors.gradientDark.dark,
        fontFamily: "ProximaNovaAltBold",
        textAlign: "center",
        fontSize: 20,
        textAlignVertical: "center",
    },
    registerButton: {
        paddingTop: "8%",
        height: 50,
        justifyContent: 'center',
        flexDirection: "row"
    },
    buttonText: {
        color: "white",
        fontFamily: "ProximaNovaAltLight",
        textAlign: "center",
        fontSize: 15,
        textAlignVertical: "center",
    },
    forgotPasswordButton: {
        paddingTop: "11%",
        height: 50,
        justifyContent: 'center',
    },
})
