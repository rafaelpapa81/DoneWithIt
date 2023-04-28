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
        flexDirection: "row", // horizontal axis is te main
        justifyContent: "center", // center obj at main axis - it depends of flexDirection. Row is horizontal = x
        alignItems: "center", // align items to secondary axis. Row is vertical = y
      }}
    >
      <View 
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View 
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,  // in Reactive Native position relative is default for all components
          top: -20, // same as bottom: 20 (relative to its original position, do not affect the layout around)
        }}
      />
      <View 
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}