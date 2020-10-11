import React, { Props } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles';

export class SettingsScreen extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Todo settings</Text>
            </View>
        )
    }
}