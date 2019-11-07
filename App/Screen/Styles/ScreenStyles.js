import { StyleSheet } from "react-native";

export const screenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 20,
        textAlign: "center"
    }
});

export const darkThemeColors = {
    gradientDark: {
        dark: "#1D2226",
        light: "#63ADE6",
        getTab: function () {
            return ([this.light, this.dark]);
        }
    },
    gradientMain: [
        "#63ADE6", "#235E8B", "#32404B", "#052D4E", "#1D2226"
    ],
    gradientPink: {
        dark: "#F04B93",
        light: "#FC75B0",
    },
    gradientPurlple: {
        dark: "#9153CF",
        light: "#997FEB",
    },
    lightBlue: "#00C4E2",
    lightGreen: "#23D7B8",
};
