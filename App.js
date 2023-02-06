import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaViewBase, Button } from 'react-native';

// IOs: this view will be mapped to UIView
// Android: View -> AndroidView
export default function App() {
  const handlePress = () => console.log("Button tapped");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Raf!</Text>
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image 
          source={{
            width: 200,
            height: 300, 
            uri: "https://picsum.photos/200/300",
            }} 
        />
      </TouchableOpacity>
      <Button title='Click Me' onPress={handlePress}/>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //the entirely screen
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
