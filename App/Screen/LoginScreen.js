import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";

import { login } from "../API/Connexion";
import { LinearGradient } from "expo-linear-gradient";
import { darkThemeColors } from "./Styles/ScreenStyles";
import images from "../../assets/Images";
import { SafeAreaView } from "react-navigation";

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
        title: "Login"
    };

    constructor({ navigation }) {
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

    callLogin = async () => {
        console.log("Start");
        this.setState({ isLogin: true });
        const response = await login(this.state.user);
        this.setState({ isLogin: false });
        console.log("End");
        console.log(response);
    };

    render() {
        const { navigation } = this.props;
        return (
            <LinearGradient
                colors={darkThemeColors.gradientDark.getTab()}
                style={style.background}
            >
                <KeyboardAvoidingView
                    style={style.wrapper}
                    behavior="padding" enabled
                >
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
                        keyboardDismissMode="interactive"
                    >
                        <SafeAreaView
                            style={style.header}
                        >
                            <Image source={images.mainIcon} style={style.logo} />
                            <Text style={style.appName}>MyColloC</Text>
                            <Text style={style.slogan}> Let's part expenses </Text>
                        </SafeAreaView>

                        <SafeAreaView style={style.formContainer}>
                            <SafeAreaView style={style.formView}>
                                <Image style={style.profileIcon} source={images.profileIcon} />
                                <TextInput
                                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                                    style={style.defaultInput}
                                    autoCorrect={false}
                                    placeholder={this.state.emailPlaceholder}
                                    text={this.state.user.email}
                                    onChangeText={email =>
                                        this.setState({ user: { ...this.state.user, email: email } })}
                                    onFocus={() =>
                                        this.setState({ emailPlaceholder: "" })
                                    }
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
                            <TouchableOpacity
                                style={style.loginButton}
                                onPress={() => this.callLogin()}
                            >
                                <Text style={style.loginButtonText}>LOGIN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.registerButton}
                                onPress={() => this.props.navigation.navigate("Register", { user: this.state.user })}
                            >
                                <Text style={style.buttonText}>Don't have an account? </Text>
                                <Text style={[style.buttonText, { fontFamily: "ProximaNova-Bold" }]}> Sign Up Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.forgotPasswordButton}
                                onPress={() => this.props.navigation.navigate("ResetPassword", { user: this.state.user })}
                            >
                                <Text style={[style.buttonText, { fontFamily: "ProximaNova-Bold" }]}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </ScrollView>
                </KeyboardAvoidingView>
            </LinearGradient>
        );
    }
}

const style = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%"
    },
    header: {
        marginBottom: "15%"
    },
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    logo: {
        flex: 1,
        marginBottom: "5%",
        borderRadius: 60,
        resizeMode: "cover",
        width: 230,
        height: 230,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        alignContent: "center",
        alignSelf: "center"
    },
    appName: {
        color: darkThemeColors.gradientDark.light,
        textAlign: "center",
        fontFamily: "Elianto",
        fontSize: 40,
        marginBottom: "2%"
    },
    slogan: {
        color: darkThemeColors.gradientDark.dark,
        textAlign: "center",
        fontFamily: "ProximaNova-Bold"
    },
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
        fontFamily: "ProximaNova-Regular",
        textAlign: "center",
        fontSize: 20,
        color: "white",
        paddingRight: "12%",
    },
    filledInput: {
        fontFamily: "ProximaNova-Regular"
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
        fontFamily: "ProximaNova-Alt-Bold",
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
        fontFamily: "ProximaNova-Alt-Light",
        textAlign: "center",
        fontSize: 15,
        textAlignVertical: "center",
    },
    forgotPasswordButton: {
        paddingTop: "11%",
        height: 50,
        justifyContent: 'center',
    },
});

export default LoginScreen;
