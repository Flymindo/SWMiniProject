import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Recipes');


const addRecipes = (recipeName) =>{
    usersCollection.doc(recipeName).set({
        Name : recipeName,
        TotalCalory: 0
    });
}

const getRecipesList = async() => {

    var recipeList = [];
    await usersCollection.get().then(querySnapshot => {
        // console.log('Total users: ', querySnapshot.size);
    
        querySnapshot.forEach(documentSnapshot => {
        //   console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          recipeList.push({
              Name: documentSnapshot.id,
              TotalCalory: documentSnapshot.data().TotalCalory
          })
        //   console.log(recipeList)
        });
      });
    
    return recipeList;
}

const Storage = {
    addRecipes,
    getRecipesList
}

export default Storage;