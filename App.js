import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// IOs: this view will be mapped to UIView
// Android: View -> AndroidView
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Raf!</Text>
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
