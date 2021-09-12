import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Recipes, Scan} from '../screens';
// import Login  from '../screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions = {{
                headerShown : null
            }}>
            <Stack.Screen name = "Home" component= {Home}/>
            <Stack.Screen name = "Recipes" component= {Recipes}/>
            <Stack.Screen name = "Scan" component= {Scan}/>
        </Stack.Navigator>
    )
}
export default AppNavigator;