import React, {useState, useEffect} from 'react';
import  API_KEY from "./apikey.js";

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const url = "https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=" + API_KEY;

const App = () => {
  const [isLoading,setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [nutrient, setNutrient] = useState([]);



  
  
  useEffect( ()=> {
    fetch(url)
    .then( (response) => response.json())
    .then((json) => {
      // setData(json.foodNutrients))
      setData(json.foods)
      // setNutrient(json.foods.foodNutrients)
    })
      // setTitle(json.foodNutrients.description)
    //foodNutrients.nutrientName = Energy and nutrient Number= calory
    // .then ((data) => {
    //   setNutrient(data.foodNutrients)
    // })
    .catch((error) => alert(error))
    .finally( () => setLoading(false));
  },[]);

  // const renderItem = ({item} ) => {
  //   <Text>
  //     {item.description}
  //   </Text>
  // }
  
  return (
    <SafeAreaView style = {styles.container}>
      {/* {isLoading ? <ActivityIndicator> </ActivityIndicator> : <FlatList></FlatList>} */}
      <Text> Hello World </Text>
      <FlatList
        data={nutrient}
        keyExtractor={ ({id},index) => id}
        renderItem = { ({item}) => (
          <Text>
            {data.description}
            {/* {data} */}
          </Text>
        )}
        // renderItem = { ({item}) => (
        //   <Text>
        //     {item.nutrientName}
        //   </Text>
        // )} 
        />
    </SafeAreaView>
  );
}

// const Section = ({children, title}): Node => {
  // const isDarkMode = useColorScheme() === 'dark';
  // return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;