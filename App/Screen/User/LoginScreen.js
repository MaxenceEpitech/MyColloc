import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";

import { login } from "../../API/Connexion";
import { setUser } from "./User"

import { Background } from "./Background";
import { Header } from "./Header";
import { LoginForm } from "./LoginForm";

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        };
        this.callLogin = this.callLogin.bind(this);
    }

    callLogin = async (user) => {
        setUser(user);
        this.setState({ isLogin: true });
        const response = await login(user);
        this.setState({ isLogin: false });
        console.log(response);
    };

    render() {
        return (
            <View>
                <Background content={
                    <View>
                        <Header />
                        <LoginForm callLogin={this.callLogin} navigation={this.props.navigation} />
                    </View>
                } screen='login' />
            </View>
        );
    }
}

export default LoginScreen;
