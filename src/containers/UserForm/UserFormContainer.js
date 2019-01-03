import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserIconComponent from './UserIconComponent';
import SubmitComponent from './SubmitComponent';

export default class UserFormContainer extends Component { //component yang sifatnya parent, tempat initial State

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                gender: ""
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <UserIconComponent user={this.state.user} handleUsername={this.handleUsername.bind(this)}
                handleGender={this.handleGender.bind(this)} />
            </View>
        )
    }

    handleUsername(e) {
        let that = {
            username: e,
            gender: this.state.user.gender
        }
        this.setState({user: that});
    }

    handleGender(e) {
        this.setState({user: {...this.state.user, gender: e}})
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









