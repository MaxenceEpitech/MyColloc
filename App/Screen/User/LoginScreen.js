import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";

import { login } from "../../API/Connexion";
import { asyncStorageSetUser } from "../Utils/AsyncStorage";
import { setUser, getUser } from "./User";

import { Background } from "./Background";
import { Header } from "./Header";
import { LoginForm } from "./LoginForm";
import { AutoConnectForm } from "./AutoConnectForm"

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            canAutoConnect: false,
        };
        this.state.canAutoConnect = this.canAutoConnect();

        this.callLogin = this.callLogin.bind(this);
        this.callLoginBiometric = this.callLoginBiometric.bind(this);
        this.updateAutoConnect = this.updateAutoConnect.bind(this);
    }

    callLogin = async (user) => {
        console.log("Call Login");
        setUser(user);
        this.setState({ isLogin: true });
        //const response = await login(user);
        //if (typeof (response) !== 'undefined') {
        asyncStorageSetUser(user);
        //}
        this.setState({ isLogin: false });
    };

    callLoginBiometric = async () => {

    }

    updateAutoConnect = () => {
        this.setState({ canAutoConnect: false });
    }
    canAutoConnect = () => {
        const currentUser = getUser();
        if (currentUser != null && currentUser.email != null && currentUser.email != '') {
            return true;
        }
        return false;
    }

    render() {
        return (
            <View>
                <Background content={
                    <View>
                        <Header />
                        {this.state.canAutoConnect
                            ? <AutoConnectForm canAutoConnect={this.updateAutoConnect} callLoginBiometric={this.callLoginBiometric} navigation={this.props.navigation} />
                            : <LoginForm callLogin={this.callLogin} navigation={this.props.navigation} />}
                    </View>
                } screen='login' />
            </View>
        );
    }
}

export default LoginScreen;
