import React, {Component, useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList,SafeAreaView, Button,ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Storage } from '../service';

class Foods extends Component {
    state = {
        foods: []
    }

    constructor(props) {
        super(props);
        this.parentName = this.props.route.params.recipeName;
        this.recipeTotalCalory = this.props.route.params.totalCalory;
    //     this.data = 
    //     firestore()
    //     .collection('Recipes')
    //     .doc(this.parentName)
    //     .collection('Foods')
    //     .onSnapshot(querySnapshot => {
    //         let foods = [];
    //         querySnapshot.forEach(documentSnapshot => {
    //           foods.push( documentSnapshot.data() )
    //         })
    //         this.setState({foods});
    //   })
    }

    componentDidMount(){
        firestore()
        .collection('Recipes')
        .doc(this.parentName)
        .collection('Foods')
        .onSnapshot(querySnapshot => {
            let foods = [];
            querySnapshot.forEach(documentSnapshot => {
              foods.push( documentSnapshot.data() )
            })
            this.setState({foods});
      })
    }
    
    render() {
        
        return(
        <View style = {styles.home}>
            <Text style = {styles.headertext}>Foods List</Text>
            <ScrollView>
                {this.state.foods.map( (food, index) => 
                <View style= {styles.scroll} key={index}> 
                    <TouchableOpacity>
                        <Text>{food.Name}</Text>
                        <Text>Calory is {food.Calory} KCAL</Text>
                        <Button title = "DELETE" onPress = { () => {
                            Storage.subtractTotalCalory(this.parentName,this.recipeTotalCalory,food.Calory);
                            Storage.deleteFood(this.parentName,food.Name);
                        }}/> 
                    </TouchableOpacity>
                </View>
                )}
                <Button title= "Add a food" onPress = { () => {
                    this.props.navigation.navigate('Scan', {
                    recipeName: this.parentName,
                    recipeTotalCalory: this.recipeTotalCalory

                })}}/>
            </ScrollView>
        </View>
        )}
};

const styles = StyleSheet.create({
    home:{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#87CEFA',
    },
    scroll:{
        display: 'flex',
        flexDirection: 'row',
    },
    headertext : {
        display: 'flex',
        fontSize : 40,
        marginTop: '30%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '50%'
    },
    button: {
        marginTop: '50%'
    }
})
export default Foods