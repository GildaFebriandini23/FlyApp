import React from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import DashBoardContainer from "./Dashboard/DashBoardContainer";
import UserFormContainer from "./UserForm/UserFormContainer";

const AppStack = createStackNavigator (
    {
        HomeScreen : DashBoardContainer,
        UserFormScreen : UserFormContainer

    },
    {
        initialRouteName: 'HomeScreen'
    }
);

const AppNavigator = createAppContainer(AppStack)
export default AppNavigator;