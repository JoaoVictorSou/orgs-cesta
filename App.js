import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Purchase from './src/screen/Purchase';

import mock from './src/mocks/purchase'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Purchase {...mock}/>
    </SafeAreaView>
  );
}

