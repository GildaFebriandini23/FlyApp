import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class ListComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
       let people = {
            names : [
                {'name' : 'a', 'id': 1},
                {'name' : 'b', 'id': 2},
                {'name' : 'c', 'id': 3},
                {'name' : 'd', 'id': 4},
                {'name' : 'e', 'id': 5},
                {'name' : 'f', 'id': 6},
                {'name' : 'g', 'id': 7},
                {'name' : 'h', 'id': 8},
                {'name' : 'i', 'id': 9},
                {'name' : 'j', 'id': 10},
                {'name' : 'k', 'id': 11},
                {'name' : 'l', 'id': 12}
            ]
        }

        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        people.names.map((item, index) => (
                            <View key = {item.id} style = {styles.item} >
                            <Text> {item.name}</Text>
                             </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor : '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})
