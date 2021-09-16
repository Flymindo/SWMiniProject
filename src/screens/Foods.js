import React, {Component, useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList,SafeAreaView, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

class Foods extends Component {
    state = {
        foods: []
    }
    constructor(props) {
        super(props);
        this.parentName = this.props.route.params.recipeName;
        this.data = 
        firestore()
        .collection('Recipes')
        .doc(this.parentName)
        .onSnapshot(documentSnapshot => {
            console.log(documentSnapshot.data())
      })
    }
    
    render() {
        
        return(
        <View style = {styles.home}>
            {this.state.foods.map( (food, index) => 
            <View key={index}> 
                <TouchableOpacity >
                    <Text>{this.props.route.recipeName}</Text> 
                </TouchableOpacity>
            </View>
            )}
            <Text> {this.props.route.params.recipeName} </Text>
            <Button title= "Add a recipe" onPress = { () => this.props.navigation.navigate("AddRecipe")}/>
        </View>
        )}
};

const styles = StyleSheet.create({
    home:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default Foods