import React from "react";
import {
    Text,
    View,
    Button,
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

                        <SafeAreaView>
                            <View style={[style.formView, style.emailView]}>
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
                            </View>
                            <View style={[style.formView, style.passwordView]}>
                                <TextInput
                                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                                    style={style.defaultInput}
                                    autoCorrect={false}
                                    placeholder={this.state.passwordPlaceholder}
                                    text={this.state.user.password}
                                    onChangeText={password => this.setState({ user: { ...this.state.user, password: password } })}
                                    onFocus={() => this.setState({ passwordPlaceholder: "" })}
                                />
                            </View>
                        </SafeAreaView>
                        <Button
                            title="Login"
                            onPress={() =>
                                this.props.navigation.navigate("Home", { Id: 5 })
                            } //this.callLogin("a", "b")}
                        />
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
    logo: {
        marginBottom: "5%",
        borderRadius: 60,
        resizeMode: "contain",
        width: 230,
        height: 230,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
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
    wrapper: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center"
    },
    defaultText: {
        fontSize: 20,
        fontFamily: "Elianto",
        color: "white"
    },
    defaultInput: {
        fontFamily: "ProximaNova-Regular",
        textAlign: "center",
        minHeight: 45,
        fontSize: 20,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 30,
        color: "white",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.1)"
    },
    filledInput: {
        fontFamily: "ProximaNova-Regular"
    },
    emailView: {},
    passwordView: {},
    formView: {
        marginBottom: "6%",
        marginLeft: "8%",
        marginRight: "8%"
    }
});

export default LoginScreen;
