import React, { Component, useRef } from 'react'

import {
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    SafeAreaView,
    Keyboard
} from "react-native";
import { darkThemeColors } from "../Styles/ScreenStyles";
import images from "../../../assets/Images";
import { getUser, setUser } from "./User"

const defaultLoginText = "Login";
const faceIdLoginText = "Login with FaceId";
const touchIdLoginText = "Login with TouchId";

export class AutoConnectForm extends Component {
    constructor(props) {
        super();
        this.state = {
            isLogin: false,
            user: {
                email: "",
                password: ""
            },
            passwordPlaceholder: "Password",
            loginButtonText: "Login"
        };
        this.state.user.email = getUser().email;
    }

    async componentDidMount() {
        this.updateLoginButton();
    }

    logOut() {
        this.setState({ user: { email: "", password: "" } });
        setUser(this.state.user);
        this.props.canAutoConnect();
    }

    updateLoginButton() {
        if (this.state.user == undefined || this.state.user.password == undefined || this.state.user.password == '') {
            this.setState({ loginButtonText: faceIdLoginText });
        } else {
            this.setState({ loginButtonText: defaultLoginText });
        }
    }

    render() {
        return (
            <SafeAreaView style={style.formContainer}>
                <Text style={style.welcomeUser}>Hello, {this.state.user.email}</Text>
                <SafeAreaView style={style.formView}>
                    <Image style={style.passwordIcon} source={images.passwordIcon} />
                    <TextInput
                        ref="passwordInput"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        style={style.defaultInput}
                        autoCorrect={false}
                        placeholder={this.state.passwordPlaceholder}
                        text={this.state.user.password}
                        onChangeText={password => this.setState({ user: { ...this.state.user, password: password } })}
                        onFocus={() => {
                            this.setState({ passwordPlaceholder: "" });
                            this.setState({ loginButtonText: defaultLoginText });
                        }}
                        onBlur={() => this.updateLoginButton()}
                        ref={(input) => this.secondTextInput = input}
                        onSubmitEditing={() => this.props.callLogin(this.state.user)}
                        returnKeyType={"done"}
                    />
                </SafeAreaView>
                <TouchableOpacity
                    style={style.loginButton}
                    onPress={() => this.props.callLogin(this.state.user)}
                >
                    <Text style={style.loginButtonText}>{this.state.loginButtonText}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.switchAccount}
                    onPress={() => this.logOut()}
                >
                    <Text style={style.buttonText}>Not your account? </Text>
                    <Text style={[style.buttonText, { fontFamily: "ProximaNovaBold" }]}> Switch Account </Text>
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
        marginTop: "10%",
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
    welcomeUser: {
        color: "white",
        textAlign: "center",
        fontFamily: "ProximaNovaRegular",
        fontSize: 40,
        marginBottom: "2%"
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
    switchAccount: {
        paddingTop: "11%",
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
        paddingTop: "5%",
        height: 50,
        justifyContent: 'center',
    },
})
