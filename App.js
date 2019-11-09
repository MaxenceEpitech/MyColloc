import React from "react";

import { createAppContainer } from "react-navigation";
import AppNavigator from "./App/Screen/AppNavigator";
import { AppLoading } from 'expo';

import { retriveUser } from "./App/Screen/User/User";
import { Asset } from 'expo-asset';
import { allImages } from './assets/Images';
import * as Font from "expo-font";

const AppContainer = createAppContainer(AppNavigator);

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

_loadAssetsAsync = async () => {
    await Font.loadAsync({
        Elianto: require("./assets/fonts/Elianto-Regular.ttf"),
        Digital: require("./assets/fonts/Digital.ttf"),
        Blanka: require("./assets/fonts/Blanka-Regular.ttf"),
        Beams: require("./assets/fonts/Beams.ttf"),
        Anurati: require("./assets/fonts/Anurati-Regular.otf"),
        Mylodon: require("./assets/fonts/Mylodon-Light.otf"),
        ProximaNovaAltBold: require("./assets/fonts/ProximaNova-Alt-Bold.otf"),
        ProximaNovaAltLight: require("./assets/fonts/ProximaNova-Alt-Light.otf"),
        ProximaNovaAltThin: require("./assets/fonts/ProximaNova-Alt-Thin.otf"),
        ProximaNovaBlack: require("./assets/fonts/ProximaNova-Black.otf"),
        ProximaNovaBold: require("./assets/fonts/ProximaNova-Bold.otf"),
        ProximaNovaExtrabold: require("./assets/fonts/ProximaNova-Extrabold.otf"),
        ProximaNovaRegular: require("./assets/fonts/ProximaNova-Regular.otf"),
        ProximaNovaThin: require("./assets/fonts/ProximaNova-Thin.otf"),
    });
    const imageAssets = cacheImages(allImages());

    await Promise.all([...imageAssets]);
}

_loadApp = async () => {
    await retriveUser();
    await _loadAssetsAsync();
}

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
        };
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={_loadApp}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }
        return (
            <AppContainer />
        );
    }
}