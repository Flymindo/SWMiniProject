import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
    return(
        <View style = {styles.home}>
            <Text> Home </Text>
            {/* <TouchableOpacity onPress = { () => navigation.navigate('Recipe')}>
                <Text>Your Recipes</Text>
            </TouchableOpacity> */}
            <Text>Your Recipes</Text>
            <TouchableOpacity onPress = { () => navigation.navigate('Recipes')}>
                <Text>Your Recipes</Text>
            </TouchableOpacity>    
        </View>
    )
}

const styles = StyleSheet.create({
    home:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Home;