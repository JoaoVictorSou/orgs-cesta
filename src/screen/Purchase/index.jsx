import React from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import Top from './component/Top'
import Details from './component/Details'
import * as SplashScreen from 'expo-splash-screen'

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

const width = Dimensions.get('screen').width

SplashScreen.preventAutoHideAsync()

const Purchase = ({top, details}) => {
    let [ fontsLoaded ] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold
    })

    if (fontsLoaded) {
        SplashScreen.hideAsync()
        return (
            <> 
                <Top {...top} />
                <View style = {styles.purchase}>
                    <Details {...details} />
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