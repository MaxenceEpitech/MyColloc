import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";

import { register } from "../../API/Connexion";
import { setUser } from "./User"

import { Background } from "./Background";
import { Header } from "./Header";
import { RegisterForm } from "./RegisterForm";

class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor({ navigation }) {
        super();
        this.state = {
            isRegister: false,
        };
        this.callRegister = this.callRegister.bind(this);
    }

    callRegister = async (user) => {
        setUser(user);
        this.setState({ isRegister: true });
        const response = await register(user);
        this.setState({ isRegister: false });
        console.log(response);
    };

    render() {
        return (
            <View>
                <Background content={
                    <View>
                        <Header />
                        <RegisterForm callRegister={this.callRegister} navigation={this.props.navigation} />
                    </View>
                } screen='register' />
            </View>
        );
    }
}

export default RegisterScreen;
