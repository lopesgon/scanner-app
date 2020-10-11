import React, { Props, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TouchableHighlight, } from 'react-native';
import { Camera } from 'expo-camera';
import { styles } from '../../styles/styles';
import { NavigationProp } from '@react-navigation/native';

export class ScannerCamera extends React.Component {
  cameraRef: any;
  navigation: any;

  state = {
    hasPermission: null,
    type: Camera.Constants.Type.front,
    captures: null
  }

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  async componentDidMount() {
    const granted = await Camera.getPermissionsAsync().then(v => v.granted);
    this.setState({
      hasPermission: granted
    });
  }

  async takePicture() {
    console.log('taking picture');
    try {
      let picture = await this.cameraRef.takePictureAsync({ base64: true });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (!this.state.hasPermission) {
      return (
        <View style={styles.container}>
          <Text style={styles.horizontalAlign}>No access to camera</Text>
          <Text style={styles.horizontalAlign}>You must give access to the camera to use Lightweight-Scanner</Text>
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ref => this.cameraRef = ref}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: "flex-end",
              }}>
              <TouchableOpacity
                style={{ alignSelf: 'center' }}
                onPress={this.takePicture}>
                <View style={cameraStyles.cameraTriggerOut}>
                  <View style={cameraStyles.cameraTriggerIn} />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )
    }
  }
}

const cameraStyles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  cameraTriggerOut: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: .4
  },
  cameraTriggerIn: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
    height: 40,
    width: 40,
    backgroundColor: 'white'
  }
});