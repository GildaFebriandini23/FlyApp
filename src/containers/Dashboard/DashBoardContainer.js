import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TopNavBarComponent from './TopNavBarComponent';
import ContentComponent from './ContentComponent';

export default class DashBoardContainer extends Component{ //component yang sifatnya parent, tempat initial State

    constructor(props){

        super(props);
        this.state = {
            user : {
                username : "Gilda"
            },
            wallet : {
                balance : 100000000000000,
                currency : "IDR"
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TopNavBarComponent callback = {this.callBackNavigate}/>
            <ContentComponent />
            </View>
        );
    }

    callBackNavigate = () => {
        this.props.navigation.navigate('UserFormScreen')
     }
 }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

