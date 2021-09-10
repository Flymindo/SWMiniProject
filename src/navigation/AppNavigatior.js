import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home,Login, Recipes} from '../screens';
// import Login  from '../screens';

const Stack = createStackNavigator();

const AppNavigatior = () => {
    return(
        <Stack.Navigator
            screenOptions = {{
                headerShown : null
            }}>
            <Stack.Screen name = "Login" component= {Login}/>
            <Stack.Screen name = "Home" component= {Home}/>
            <Stack.Screen name = "Recipes" component= {Recipes}/>
        </Stack.Navigator>
    )
}
export default AppNavigatior;