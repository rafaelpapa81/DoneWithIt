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
        alignContent: "center", // alignment of the entire content, not only elements of each line - only works with Wrap
        flexWrap: "wrap",
      }}
    >
      <View 
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
        }}
      />
      <View 
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View 
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
      <View 
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
        }}
      />
      <View 
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}