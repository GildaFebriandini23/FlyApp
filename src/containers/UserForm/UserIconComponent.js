import React, {Component} from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import SubmitComponent from "./SubmitComponent";

export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : {
                username : props.user.username,
                gender : props.user.gender
            }
        }
    }

    render() {
        return (
            <View>
                <View style={styles.bingkai}>
                    <View style={styles.round}/>
                    <Text>
                        {"\n"}
                        Username :
                        {"\n"}
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder=" Username"
                        value = {this.props.user.username}
                        onChangeText ={(text)=>{this.props.handleUsername(text)}}
                    />
                    <Text>
                        {"\n"}
                        Gender :
                        {"\n"}
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder=" Gender"
                        value = {this.props.user.gender}
                        onChangeText = {(text) => {this.props.handleGender(text)}}

                    />
                    <Button
                        title="Submit" color="#115145" onPress={this.setButton}
                    />
                    <SubmitComponent
                        user = {this.state.user}   />
                </View>
            </View>
        );
    }

    setButton= ()=>{
        console.log(this.props.user);
        this.setState({user: {...this.state.user, username: this.props.user.username, gender: this.props.user.gender }})
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        height: 40,
        borderColor: 'black',
    },
    round: {
        marginTop: 10,
        marginLeft: 140,
        width : 100,
        height: 100,
        backgroundColor: '#03231D',
        borderRadius : 50,
        elevation: 2,
    },
    text: {
        padding: 10,
        fontSize: 10
    },
    bingkai: {
        padding: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
});
