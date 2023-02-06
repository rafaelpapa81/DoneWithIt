import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaViewBase, Alert, Button, Platform} from 'react-native';
import Constants from 'expo-constants';

// IOs: this view will be mapped to UIView
// Android: View -> AndroidView
export default function App() {
  const handlePress = () => Alert.alert("My title", "My message", [
    {text: "Yes", onPress: () => console.log("Yes") },
    {text: "No", onPress: () => console.log("No")},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      
      <View 
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: 70,
        }}
      ></View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //the entirely screen
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight:0,
  },
});
