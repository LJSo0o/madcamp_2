import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerInclude from './HomeScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={DrawerInclude} />
    </Stack.Navigator>
  );
}