import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserIconComponent from './UserIconComponent';

export default class UserFormContainer extends Component { //component yang sifatnya parent, tempat initial State
   shouldComponentUpdate(nextProps, nextState, nextContext) {
       console.log("UserFormContainer  - component shouldComponentUpdate dipanggil");
   }

    componentDidMount() {
        console.log("UserFormContainer - component Didmount dipanggil");
    }

   componentDidUpdate(prevProps, prevState, snapshot) {
       console.log("UserFormContainer - component Didupdate dipanggil");
   }

    componentWillMount() {
        console.log("UserFormContainer - componentWiiUnmount Didmount dipanggil");
    }
    constructor(props) {
        console.log("UserFormContainer  - contructor dipanggil");
        super(props);
        this.state = {
            user: {
                username: "",
                gender: ""
            }
        }
    }

    render() {
        console.log("UserIconContainer  - render dipanggil");
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









