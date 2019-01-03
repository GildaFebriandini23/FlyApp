import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ListComponent from "./ListComponent";

export default class DashBoardContainer extends Component{ //component yang sifatnya parent, tempat initial State

    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.content}>
                {/*<ListComponent/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 9,
        backgroundColor: '#fff'
    }
});


