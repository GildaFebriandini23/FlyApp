import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SubmitComponent extends Component { //component yang sifatnya parent, tempat initial State

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>
                    Username : {this.props.user.username}
                </Text>
                <Text>
                    Gender: {this.props.user.gender}
                </Text>
            </View>
        )


    }

}