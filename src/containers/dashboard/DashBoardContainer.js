import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TopNavBarComponent from './TopNavBarComponent';
import ContentComponent from './ContentComponent';
import {getCustomerList} from "../service/CustomerServiceAxios";
import ListComponent from "./ListComponent";

export default class DashBoardContainer extends Component{ //component yang sifatnya parent, tempat initial State

    async fetchCustomerList(){
        const response = await getCustomerList();
        const data =  response.data.values;
        console.log('Data ');
        console.log(data);
        this.setState({customers: data})
    }

    constructor(props){
        super(props);
        this.state = {
            user : {
                username : "Gilda"
            },
            wallet : {
                balance : 100000000000000,
                currency : "IDR"
            },
            customers : []
        }

    }

    // componentDidMount() {
    //     this.fetchCustomerList();
    // }

    render() {
        return (
            <View style={styles.container}>
                <TopNavBarComponent callback = {this.callBackNavigate} />
                <ContentComponent Data={this.fetchCustomerList.bind(this)} />
                <ListComponent customers={this.state.customers} Data={this.fetchCustomerList.bind(this)}/>
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

