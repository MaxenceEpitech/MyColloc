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

//const scanner = new NfcRfidScanner();

class RegisterScreen extends React.Component {
    static navigationOptions = {
        //header: null
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

        //scanner.addListener("salut", this.callback, this.error)

    }

    render() {
        const { navigation } = this.props;
        return (
            <View></View>
        )
    }
}

export default RegisterScreen;