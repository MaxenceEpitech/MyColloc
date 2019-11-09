import { asyncStorageGetUser } from '../Utils/AsyncStorage'

export let user = {
    email: "",
    password: ""
}

export const getUser = () => {
    return user;
}

export const setUser = (newUser) => {
    user = newUser;
}

export const retriveUser = async () => {
    user = await asyncStorageGetUser();
}