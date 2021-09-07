import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import React, {useState} from 'react'
// import { RNCamera, FaceDetector } from 'react-native-camera';

function App() {
  const express = require('express')
  const server = express()
  // const {calory,searchCalory} = useState('')
  const API_KEY = '';
  const url = "https://api.nal.usda.gov/fdc/v1/food/11090?api_key=" + API_KEY;
  
  const getCalories  = () => {
    // Axios.get(url).then ( (response) => {
    //   response.json();
    //   // console.log(result)
    // }).then( (data) => {
    //   console.log(data);
    //   return;
    // })
    server.get(url)
  }
  return (
    <div className="App">
      <header className="App-header">
        Get your food nutrient info
      </header>
      <body className = "App-body">
        <button onClick = {getCalories}>
          click
        </button>
        {/* <p>
          {getCalories}
        </p> */}
        <textarea>
          Enter a name of a food you are looking for
        </textarea>
        <button>
          Scan a barcode
        </button>
      </body>
    </div>
  );
}

export default App;
