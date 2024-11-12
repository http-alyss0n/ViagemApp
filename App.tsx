import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen.tsx';
import HistoryScreen from './src/screens/HistoryScreen.tsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tela Inicial' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registrar Deslocamento' }} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'Histórico de Deslocamento' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
