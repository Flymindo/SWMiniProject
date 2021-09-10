import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// export default Login = ({navigation}) => {
//     return(
//         <View style = {styles.login}>
//             <TouchableOpacity onPress = { () => navigation.navigate('Home')}>
//                 <Text>Login</Text>
//             </TouchableOpacity>  

//             <Text> Login </Text>
//         </View>
//     )
// }
const Login = ({navigation}) => {
    return(
        <View style = {styles.login}>
            <TouchableOpacity onPress = { () => navigation.navigate('Home')}>
                <Text>Login</Text>
            </TouchableOpacity>  

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