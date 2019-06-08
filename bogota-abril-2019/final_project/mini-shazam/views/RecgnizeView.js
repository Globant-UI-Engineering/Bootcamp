import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { Asset } from "expo"

import Styles from "../Styles";

class Icon {
  constructor(module, width, height) {
    this.module = module;
    this.width = width;
    this.height = height;
    Asset.fromModule(this.module).downloadAsync();
  }
}

export default class RecognizeView extends Component {

  render() {

    const ready = this.props.recognitionState === "READY" 

    const ICON_RECORD_BUTTON = new Icon(require('../assets/images/record_button.png'), 70/2, 119/2);

    return (
      <View style={Styles.recognitionView}>
        <TouchableOpacity onPress={this.props.onRecognizeSong} >
          <View style={Styles.recognitionBtn}>
              <Image source={ICON_RECORD_BUTTON.module} />
          </View>
        </TouchableOpacity>
        <Text style={Styles.statusText}>{ this.props.recognitionState}</Text>
        {  !ready ? <ActivityIndicator/> : <View/>}
      </View>
    )
  }
}