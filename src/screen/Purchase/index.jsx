import React from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import Top from './component/Top'
import Details from './component/Details'

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

const width = Dimensions.get('screen').width

const Purchase = () => {
    let [ fontsLoaded ] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold
    })

    if (fontsLoaded) {
        return (
            <> 
                <Top />
                <View style = {styles.purchase}>
                    <Details />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    purchase: {
        paddingVertical: width/40,
        paddingHorizontal: width/25
    }
})

export default Purchase