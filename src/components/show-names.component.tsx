import React from 'react';

import { View, Button, Text } from "react-native";
import { styles } from "../../styles/styles";
import { formatText } from "../services/utils/formatters.service";

interface IShowNamesProps {
    names?: string[],
    btnTitle: string
}

interface IShowNamesState {
    names: string[]
}

export class ShowNames extends React.Component<IShowNamesProps, IShowNamesState> {
    constructor(props: IShowNamesProps) {
        super(props);
        if (!props.btnTitle) {
            throw new Error('ShowNames: rops.btnTitle must have a value');
        }
        this.state = {
            names: props.names ? props.names : []
        }
    }

    add = () => {
        this.state.names.push('B');
        this.setState({
            names: this.state.names
        });
        // alert('Names values is now: ' + names);
    }

    render() {
        return (
            <View style={styles.horizontalAlign}>
                <Text>{formatText(this.state.names)}</Text>
                <Button title={this.props.btnTitle} onPress={this.add} />
            </View>
        );
    }
}
