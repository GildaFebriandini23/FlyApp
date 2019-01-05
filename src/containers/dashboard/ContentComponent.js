import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button} from "react-native-elements";

export default class ContentComponent extends Component{ //component yang sifatnya parent, tempat initial State

    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                {/*<ScrollView>*/}
                    {/*{*/}
                        {/*this.props.customers.map((customer, index) => (*/}
                            {/*<View key = {customer.customerNumber} style = {styles.item} >*/}
                                {/*<Text>{customer.firstName}</Text>*/}
                            {/*</View>*/}
                        {/*))*/}
                    {/*}*/}
                {/*</ScrollView>*/}
                <Button title={"show"} onPress={()=>{this.props.Data()}} style={styles.input}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 9,
        backgroundColor: '#fff'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor : '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    },
    input:{
        backgroundColor:'#fff'
    }
});


