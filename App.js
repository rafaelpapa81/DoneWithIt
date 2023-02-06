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
        backgroundColor: "dodgerblue",
        flex: 0.5,
      }}
    >
      <StatusBar style="auto" />
    </View>
  );
}