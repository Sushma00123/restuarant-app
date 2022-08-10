
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name='Business Search' component={SearchScreen}/>
  <Stack.Screen component={ResultShowScreen} name="details"/>
</Stack.Navigator>
</NavigationContainer>
  );
}


