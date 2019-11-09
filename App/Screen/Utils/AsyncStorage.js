import { AsyncStorage } from 'react-native';

const userLoginId = 'userLoginTest';

export const asyncStorageSetUser = async (user) => {
    try {
        await AsyncStorage.setItem(userLoginId, JSON.stringify(user));
    } catch (error) {
        console.log("Error : asyncStorageSetUser : An errror has occured while saving user data");
    }
}

export const asyncStorageGetUser = async () => {
    try {
        return JSON.parse(await AsyncStorage.getItem(userLoginId));
    } catch (error) {
        console.log("Error : asyncStorageGetUser : An errror has occured while saving user data");
    }
    return {};
}