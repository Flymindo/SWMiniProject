import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Alert } from 'react-native';
import {Fetch} from '../routes';

const XMLHttpRequest = require("xhr2");
const url = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=1STbT8Zsp6d9CcLirJjDRE9UoS6aklojen8h5que';


class Scan extends Component {

  constructor(props) {
    super(props);
    this.camera = null;
    // this.barcodeCodes = [];
    this.barcodeCode = "";
    this.calory = "";

    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
	 flashMode: RNCamera.Constants.FlashMode.auto,
      }
    };
  }

  

  onBarCodeRead(scanResult) {

    if (scanResult.data != null) {

      if (this.barcodeCode != scanResult.data) {
        this.barcodeCode = scanResult.data;
        console.log("this is barcodeCode")
        console.log(this.barcodeCode)
        Alert.alert('The barcode is scanned. Please press the button "Enter Barcode');
        
        var xhr = new XMLHttpRequest();
        var newbarcode = this.barcodeCode.substring(1,this.barcodeCode.length);


        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/json");

        var data = '{ "query": ' + '\"' + newbarcode + '\"' + '}';


        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              // console.log(xhr.responseText);
              response = JSON.parse(xhr.responseText)
              // console.log()
              if(response.totalHits != 0){
                  // foodName  = response. 
                  this.calory= response.foods[0].foodNutrients[0].nutrientName;
                  console.log(this.calory);
            
         }
        }};
        xhr.send(data);

        
      }
    }
    return;
  }

  async takePicture() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  }

  pendingView() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgreen',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Waiting</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            defaultTouchToFocus
            flashMode={this.state.camera.flashMode}
            mirrorImage={false}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            onFocusChanged={() => {}}
            onZoomChanged={() => {}}
            style={styles.preview}
            type={this.state.camera.type}
        />
        <View style={[styles.overlay, styles.topOverlay]}>
	  <Text style={styles.scanScreenMessage}>Please scan the barcode.</Text>
	</View>
	<View style={[styles.overlay, styles.bottomOverlay]}>
          <Button
            onPress={() => {
                console.log('scan clicked');
                // Fetch.fetchData(this.barcodeCode);
                // this.calory = Fetch.fetchData(this.barcodeCode);
                // Fetch.fetchData(this.barcodeCode).then( (res) => this.calory = res);
                this.props.navigation.navigate('AddFood');
                // console.log(this.calory);
                


                }}
            style={styles.enterBarcodeManualButton}
            title="Enter Barcode"
           />
	</View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default Scan;