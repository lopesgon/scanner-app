import React, { Props } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../styles/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScannerCamera } from '../components/scanner-camera.component';

class DefaultScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Scann documents"
                    onPress={() => this.props.navigation.navigate('Scanner')}
                />
            </View>
        )
    }
}

export class HomeScreen extends React.Component {
    StackNav: any;

    constructor(props: any) {
        super(props);
        this.state = {}
        this.StackNav = createStackNavigator();
    }

    componentDidMount() {
        console.log("HomeScreen componentDidMount");
    }

    render() {
        return (
            <this.StackNav.Navigator initialRouteName='Home'>
                <this.StackNav.Screen
                    name="Home"
                    component={DefaultScreen}
                />
                <this.StackNav.Screen name="Scanner" component={ScannerCamera} />
            </this.StackNav.Navigator>
        )
    }
}