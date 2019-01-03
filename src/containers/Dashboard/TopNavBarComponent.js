import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class DashBoardContainer extends Component{ //component yang sifatnya parent, tempat initial State

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.topNavBar}>
                <View style={styles.border}>
                    <Button
                        title="Button"
                        onPress={() =>this.props.callback()}
                    />
                </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
   topNavBar: {
        flex: 1,
        backgroundColor: '#021233',
        elevation: 3,
    },
    border: {
        marginTop: 10,
        marginRight: 400,
   },



});


