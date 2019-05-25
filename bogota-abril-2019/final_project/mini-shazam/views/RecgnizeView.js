import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { Asset } from "expo"

import Styles from "../Styles";
import { recognition } from "../App";

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

    const disableRecordButton = this.props.recognitionState !== recognition.READY

    switch (this.props.recognitionState) {
      case recognition.IDENTIFYING:
        break;
      case recognition.READY:
        break;
      case recognition.RECORDING:
        break;
    }

    const ICON_RECORD_BUTTON = new Icon(require('../assets/images/record_button.png'), 70/2, 119/2);

    return (
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <TouchableOpacity onPress={this.props.onRecognizeSong} disabled={disableRecordButton} >
          <View style={Styles.recognitionBtn}>
              <Image source={ICON_RECORD_BUTTON.module} />
          </View>
        </TouchableOpacity>
        { disableRecordButton ? <ActivityIndicator/> : <View/>}
      </View>
    )
  }
}