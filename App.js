import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import icon from './assets/amongus.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={{width: 100, height: 100}} />
      <Text
      selectable={true}
      selectionColor="red"
      numberOfLines={6}
      ellipsizeMode='middle'
      
      >SUS</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
