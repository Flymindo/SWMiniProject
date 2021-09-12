import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Scan = ({navigation}) => {
    return(
        <View style = {styles.home}>
            <Text> Barcode Scan </Text>
            <TouchableOpacity onPress = { () => navigation.navigate('Home')}>
                <Text>Go Back to Home</Text>
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
export default Scan;