import React from 'react';
import { createAppContainer} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import Login from './screens/Login/index';
import Register from './screens/Register/index';


const AuthenticateStack = createStackNavigator({
    Login: {
        screen:Login,
        navigationOptions:{
            headerShown:false
        }
    },
    Register:{ screen:Register,
        // navigationOptions:{
        //     headerShown:false
        // }
    }
});


export  default createAppContainer(AuthenticateStack);
