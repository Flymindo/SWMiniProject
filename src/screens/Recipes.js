import React, {Component, useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList,SafeAreaView, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

class Recipes extends Component {
    state = {
        recipes: []
    }
    constructor(props) {
        super(props);
        this.data = 
        firestore()
        .collection('Recipes')
        .onSnapshot(querySnapshot => {
            let recipes = [];
            querySnapshot.forEach(documentSnapshot => {
              recipes.push( documentSnapshot.data() )
            })
            this.setState({recipes});
      })
    }
    
    render() {
        
        return(
        <View style = {styles.home}>
            {this.state.recipes.map( (recipe, index) => 
            <View key={index}> 
                <TouchableOpacity onPress = { () => this.props.navigation.navigate("Foods",{
                    recipeName: recipe.Name
                })} >
                    <Text>{recipe.Name}</Text> 
                </TouchableOpacity>
            </View>
            )}
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
export default Recipes;