import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Purchase from './src/screen/Purchase';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Purchase />
    </SafeAreaView>
  );
}

