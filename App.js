import { StatusBar } from 'expo-status-bar';
import {
  View, 
} from 'react-native';


// IOs: this view will be mapped to UIView
// Android: View -> AndroidView
export default function App() {
  return (
    <View 
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View 
        style={{
          backgroundColor: "dodgerblue",
          flex: 1,
        }}
      />
      <View 
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View 
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}