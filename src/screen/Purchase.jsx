import React from 'react'
import { Text, Image, StyleSheet, Dimensions, View } from 'react-native'

import top from '../../assets/topo.png'

const width = Dimensions.get('screen').width

let Purchase = () => {
    return (
        <> 
            <Image source = {top} style = {styles.top} />
            <Text style = {styles.title}>Detalhes da cesta</Text>

            <View style = {styles.purchase}>
                <Text style = {styles.purchase_name}>Cesta de Verduras</Text>
                <Text>Jenny Jack Farm</Text>
                <Text>
                    Uma cesta com produtos selecionados
                    cuidadosamente da fazenda direto para
                    sua cozinha.
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
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
    },
    purchase: {
        paddingVertical: width/40,
        paddingHorizontal: width/25
    },
    purchase_name: {
        fontSize: width/15,
        lineHeight: width/8,
        color: '#464646',
        fontWeight: 'bold'
    }
})

export default Purchase