import { View, Image, StyleSheet, Dimensions } from "react-native"
import TextPurchase from "../../../componet/TextPurchase"
import purchase from "../../../mocks/purchase"

const width = Dimensions.get('screen').width

const Details = (props) => {
    return (
        <>
            <TextPurchase style = {styles.purchase_name}>{purchase.details.name}</TextPurchase>
            <View style = {styles.seller_logo_area}>
                <Image source = {purchase.seller_logo} style = {styles.seller_logo} />
                <TextPurchase style = {styles.seller_name}>{purchase.details.seller_name}</TextPurchase>
            </View>
            <TextPurchase style = {styles.description}>
                {purchase.details.description}
            </TextPurchase>
            <TextPurchase style = {styles.price}>R$ {purchase.details.price}</TextPurchase>
        </>
    )
}

const styles = StyleSheet.create({
    purchase_name: {
        fontSize: width/15,
        lineHeight: width/8,
        color: '#464646',
        fontWeight: 'bold'
    },
    seller_logo_area: {
        flexDirection: 'row',
        paddingVertical: width/40
    },
    seller_logo: {
        width: 32,
        height: 32
    },
    seller_name: {
        fontSize: width/25,
        lineHeight: width/15,
        marginLeft: width/40,
        fontFamily: 'MontserratRegular'
    },
    description: {
        color: '#A3A3A3',
        fontSize: width/25,
        lineHeight: width/15
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: width/15,
        lineHeight: width/8,
        marginTop: width/40

    }
})

export default Details