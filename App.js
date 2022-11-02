import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import Route from './src/Route';

export default function App() {

  useEffect(()=> {
    AsyncStorage.setItem("userId", 1002);
  })

  return (
   <Route />
  );
}
