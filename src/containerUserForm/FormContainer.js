import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormComponent from './FormComponent';

export default class FormContainer extends Component{ //component yang sifatnya parent, tempat initial State

    render() {
        return (
            <View style={styles.container}>
                <FormComponent />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0C7C68',
        padding:20,
    },
});

