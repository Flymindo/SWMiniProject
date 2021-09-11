

import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';


const AppContainer =  () =>  {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
    GoogleSignin.configure({
        webClientId: '430919947523-a0n728lncsufgnehk1a77umo2v0438dp.apps.googleusercontent.com'
        });
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount

    
    }, []);
  
    if (initializing) return null;

  
    return (
      <NavigationContainer>
          {user ? <AppNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
    );

}
export default AppContainer;