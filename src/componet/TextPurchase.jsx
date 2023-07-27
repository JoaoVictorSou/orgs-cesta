import { View, Text, StyleSheet } from "react-native";

let TextPurchase = ({children, style}) => {
    let default_style = styles.text

    if (style?.fontWeight === 'bold') { // A interrogação indica que busque o valor de fontWeight se tiver objeto style.
        default_style = styles.text_bold
    }

    return (
        <Text style = {[style, default_style]}>{ children }</Text>
    )
}

styles = StyleSheet.create({
    text: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    text_bold: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal' // A MontserratBold já está em negrido em seu estado normal.
    }
})

export default TextPurchase