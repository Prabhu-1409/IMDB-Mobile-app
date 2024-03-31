/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Home from './Pages/Homepage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Start from './Pages/Startpage';
import Single from './Pages/Singlepage';
import Category from './Pages/Category';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {
  
const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='start' screenOptions={
        {
          headerShown:false
        }
      }>
        <Stack.Screen name='start' component={Start}></Stack.Screen>
        <Stack.Screen name='home' component={Home}></Stack.Screen>
        <Stack.Screen name='single' component={Single}></Stack.Screen>
        <Stack.Screen name='category' component={Category}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
