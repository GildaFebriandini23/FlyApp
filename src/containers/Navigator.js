import React from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import DashBoardContainer from "./dashboard/DashBoardContainer";
import UserFormContainer from "./userform/UserFormContainer";

const AppStack = createStackNavigator (
    {
        HomeScreen : DashBoardContainer,
        UserFormScreen : UserFormContainer,


    },
    {
        initialRouteName: 'HomeScreen'
    }
);

const AppNavigator = createAppContainer(AppStack)
export default AppNavigator;