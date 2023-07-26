import { View, Text, StyleSheet } from "react-native";

let TextPurchase = ({children, style}) => {
    return (
        <Text style = {[style, styles.text]}>{ children }</Text>
    )
}

styles = StyleSheet.create({
    text: {
        fontFamily: 'MontserratRegular'
    }
})

export default TextPurchase