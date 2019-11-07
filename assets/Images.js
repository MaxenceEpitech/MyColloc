import { Image } from 'react-native';

const images = {
    mainIcon: require('./icons/logo.png'),
    profileIcon: require('./icons/profile.png'),
    passwordIcon: require('./icons/password.png'),
    test: require('./icons/2.png'),
    background: require('./images/background.png'),
    background1: require('./images/background1.png'),
};

export function allImages() {
    return Object.keys(images).map(function (key) { return images[key] });
}

export default images;