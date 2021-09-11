import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {Auth} from '../service';


const Login = ({navigation}) => {
    return(
        <View style = {styles.login}>
            {/* <TouchableOpacity onPress = { () => navigation.navigate('Home')}>
                <Text>Login</Text>
            </TouchableOpacity>   */}
            <Button 
            title="Google Sign-In"
            onPress={() => Auth.googleLogin().then(() => console.log('Signed in with Google!'))}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    login:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Login;