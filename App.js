import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';
import Authentification from './views/Authentification';
import QRflash from './views/QRflash';
import CodeDetails from './views/CodeDetails';

const Stack = createStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
            component={Home}
            options={{
              headerShown: false
        }}
          />
          <Stack.Screen
            name="Authentification"
            component={Authentification}
            options={{
              headerShown: false
        }}
          />
          <Stack.Screen
            name="QRflash"
            component={QRflash}
            options={{
              headerShown: false
        }}
          />
          <Stack.Screen
            name="CodeDetails"
            component={CodeDetails}
            options={{
              headerShown: false
        }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
});
