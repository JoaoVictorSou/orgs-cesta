import { Image, StyleSheet, Dimensions } from "react-native"
import TextPurchase from "../../../componet/TextPurchase"

import top from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width


let Top = ({ style }) => {
    return (
        <>
            <Image source = {top} style = {styles.top} />
            <TextPurchase style = {styles.title}>Detalhes da cesta</TextPurchase>
        </>
    )
}

let styles = StyleSheet.create({
    top: {
        width: "100%",
        height: (578/768) * width
    },
    title: {
        fontSize: width/20,
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        lineHeight: width/20,
        color: 'white',
        fontWeight: 'bold',
        padding: width/15
    }
})

export default Top