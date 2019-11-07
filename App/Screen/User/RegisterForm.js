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

export class RegisterForm extends Component {
    constructor({ navigation }) {
        super();
        this.state = {
            isLogin: false,
            user: {
                email: "",
                password: "",
                passwordConfirm: ""
            },
            emailPlaceholder: "Email",
            passwordPlaceholder: "Password",
            confirmPasswordPlaceholder: "Confirm Password"
        };
    }

    render() {
        return (
            <SafeAreaView style={style.formContainer}>
                <SafeAreaView style={style.formView}>
                    <Image style={style.profileIcon} source={images.profileIcon} />
                    <TextInput
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
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        style={style.defaultInput}
                        autoCorrect={false}
                        placeholder={this.state.passwordPlaceholder}
                        text={this.state.user.password}
                        onChangeText={password => this.setState({ user: { ...this.state.user, password: password } })}
                        onFocus={() => this.setState({ passwordPlaceholder: "" })}
                    />
                </SafeAreaView>
                <SafeAreaView style={style.formView}>
                    <Image style={style.passwordIcon} source={images.passwordIcon} />
                    <TextInput
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        style={style.defaultInput}
                        autoCorrect={false}
                        placeholder={this.state.confirmPasswordPlaceholder}
                        text={this.state.user.passwordConfirm}
                        onChangeText={passwordConfirm => this.setState({ user: { ...this.state.user, passwordConfirm: passwordConfirm } })}
                        onFocus={() => this.setState({ confirmPasswordPlaceholder: "" })}
                    />
                </SafeAreaView>
                <TouchableOpacity
                    style={style.loginButton}
                    onPress={() => this.props.callRegister(this.state.user)}
                >
                    <Text style={style.loginButtonText}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.registerButton}
                    onPress={() => this.props.navigation.navigate("Login")}
                >
                    <Text style={style.buttonText}>Already have an account? </Text>
                    <Text style={[style.buttonText, { fontFamily: "ProximaNovaBold" }]}> Login Now</Text>
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
