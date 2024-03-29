import { StatusBar } from 'expo-status-bar';
import {
  View, 
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';


// IOs: this view will be mapped to UIView
// Android: View -> AndroidView
export default function App() {
  return <ViewImageScreen/>;
}