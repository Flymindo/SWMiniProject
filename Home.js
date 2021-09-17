import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { Auth } from '../service';

const Home = ({navigation}) => {
    return(
        <View style = {styles.home}>
            {/* <Text>Your Recipes</Text> */}
            <Text style = {styles.title}>
                Nutrient Calculator
            </Text>
            <Button 
                style = {styles.button}
                title = "Your Recipes"
                onPress = { () => navigation.navigate('Recipes')}>
            </Button>
            {/* <TouchableOpacity onPress = { () => navigation.navigate('Scan')}>
                <Text>Scan Barcode</Text>
            </TouchableOpacity>       */}
            <Button style = {styles.button} title= 'Sign out' onPress = { () => Auth.signOut()}/>

        </View>
    )
}

const styles = StyleSheet.create({
    home:{
        display: 'flex',
        flexDirection: 'column',
        // flex:1,
        // alignItems: 'center',
        backgroundColor: '#87CEFA',
        height:'100%',
        paddingTop:"30%"
    }, 
    title: {display: 'flex', width:"100%", textAlign: "center", marginBottom: 300, fontSize: 50, fontWeight: 'bold', color: 'white', },
    button: {display: 'flex', color: 'white'}

})
export default Home;