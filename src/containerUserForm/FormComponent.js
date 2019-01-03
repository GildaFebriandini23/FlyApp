import React, {Component} from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';

import {Card} from 'react-native-elements';

export default class FormComponent extends Component {
    constructor(props) {
        super(props);
         this.state = {text1: '', text2: ''};
    }

    show=()=> {
        Alert.alert('Username : ' + this.state.text1 + '\n' + 'Gender : ' + this.state.text2)
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
                        onChangeText={(text1) => this.setState({text1})}
                    />
                    <Text>
                        {"\n"}
                        Gender :
                        {"\n"}
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder=" Gender"
                        onChangeText={(text2) => this.setState({text2})}
                    />
                    <Text>
                        {"\n"}
                        Full Text :
                    </Text>
                    <Text style={styles.text}>
                        {' Username : ' + this.state.text1 + ' Gender : ' + this.state.text2}
                    </Text>

                    <Button
                        onPress={this.show} title="Submit" color="#115145" />
                </View>
            </View>
        );
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
