let user = {
    email: "",
    password: ""
}

export const getUser = () => {
    return user;
}

export const setUser = (newUser) => {
    user = newUser;
}