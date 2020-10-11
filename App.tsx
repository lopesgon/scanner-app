import React from 'react';
import { Text, View } from 'react-native';
import { ShowNames } from './src/components/show-names.component';
import { styles } from './styles/styles';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from './src/screens/home.screen';
import { ScannerCamera } from './src/components/scanner-camera.component';
import { SettingsScreen } from './src/screens/settings.screen';

const BottomTabs = createBottomTabNavigator();

export class Default extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScannerCamera></ScannerCamera>
      </View>
    )
  }
}

export interface IDefaultProps {
  value: any
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="Home" component={HomeScreen} />
        <BottomTabs.Screen name="Settings" component={SettingsScreen} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}