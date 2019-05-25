import React from 'react';
import { View, ViewPagerAndroid, Text } from 'react-native';
import { Audio, FileSystem, Permissions, SQLite } from "expo";

import Styles from "./Styles";

import RecognizeView from './views/RecgnizeView'
import SongList from './views/SongList'

export const recognition = {
  READY: 0,
  RECORDING: 1,
  IDENTIFYING: 2,
  NOT_READY: 3
}

export default class App extends React.Component {


  recording = null
  db = null

  state = {
    recognitionState: recognition.NOT_READY,
    songList: [
      {
        artist: "Ozzy Osbourne",
        title: "Mr. Crowley",
        album: "Blizzard of Ozz (Expanded Edition)",
        release_date: "2011-05-27",
        label: "Epic/Legacy",
      },
      {
        artist: "Jarabe de Palo/Orquesta Filarmónica de Costa Rica",
        title: "Me Gusta Como Eres (Verisón Filarmónica)",
        album: "Jarabe Filarmónico",
        release_date: "2018-10-05",
        label: "Tronco Records SL",
      }
    ]
  }

  constructor(props) {
    super(props)

    this.stopRecognition = this.stopRecognition.bind(this)
    this.onRecognizeSong = this.onRecognizeSong.bind(this)
    this.removeSong = this.removeSong.bind(this)
    this._createAndLoadDatabaseAsync = this._createAndLoadDatabaseAsync.bind(this)
  }

  async stopRecognition() {
    await this.recording.stopAndUnloadAsync();
    const info = await FileSystem.getInfoAsync(this.recording.getURI());
    console.log(`FILE INFO: ${JSON.stringify(info)}`);
    this.setState({ recognitionState: recognition.IDENTIFYING })

    const body = new FormData()
    body.append('file', {
      uri: info.uri,
      name: info.uri.split('/')[0],
      type: 'audio/wav'
    })

    const response = await fetch('http://192.168.1.7:3000', {
    // const response = await fetch('https://api.audd.io/', {
      method: 'POST',
      body
    })

    const jsonData = await response.json()
    if (jsonData.status !== 'success' && jsonData.status.artist === null) {
      console.log("error")
      return;
    }

    

    this.db.transaction(tx => tx.executeSql(
      "insert into items (artist, title, album, release_date, label) values (?, ?, ?, ?, ?)",
      [
        jsonData.result.artist,
        jsonData.result.title,
        jsonData.result.album,
        jsonData.result.release_date,
        jsonData.result.label
      ],
      (_, { insertId }) => {
        const songList = this.state.songList.concat({...jsonData.result, id: insertId})
        this.setState({ songList, recognitionState: recognition.READY })
      }
    ))

    console.log(JSON.stringify(jsonData.result))
  }

  async onRecognizeSong() {
    this.setState({ recognitionState: recognition.RECORDING })

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: true,
    })

    if (this.recording !== null) {
      this.recording.setOnRecordingStatusUpdate(null);
      this.recording = null;
    }

    this.recording = new Audio.Recording();
    await this.recording.prepareToRecordAsync({
      ...Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY,
      android: {
        ...Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY.android,
        extension: '.wav'
      }
    })
    await this.recording.startAsync()

    setTimeout(this.stopRecognition, 13000)
  }

  async removeSong(song) {
    console.log(`remove ${song}`)
    await this.db.transaction(tx => tx.executeSql('delete from items where id = ?',
      [song.id],
      _ => this.setState({songList: this.state.songList.filter( item => item.id !== song.id )}),
      console.log
    ))
  }

  async _createAndLoadDatabaseAsync() {
    this.db = await SQLite.openDatabase('db', 3, 'description', 1)
    await this.db.transaction(tx => tx.executeSql(
      "create table if not exists items (id integer primary key autoincrement, artist varchar(100), title varchar(100), album varchar(100), release_date varchar(12), label varchar(100))"
    ))
    await this.db.transaction(tx => tx.executeSql(
      "select * from items", [], (_, { rows }) => this.setState({ songList: rows._array })
    ))
    this.setState({ recognitionState: recognition.READY })
  }

  componentDidMount() {
    Permissions.askAsync(Permissions.AUDIO_RECORDING).then(response => {
      console.log(JSON.stringify(response))
      this.setState({
        haveRecordingPermissions: response.status === 'granted',
      })
    })
    this._createAndLoadDatabaseAsync()
  }

  render() {
    return (
      <ViewPagerAndroid style={Styles.pageStyle} initialPage={0}>
        <View style={Styles.pageStyle} >
          <View style={Styles.statusBar} />
          <Text>{this.state.recognitionState}</Text>
          <RecognizeView
            onRecognizeSong={this.onRecognizeSong}
            recognitionState={this.state.recognitionState}
          />
        </View>
        <View style={Styles.pageStyle} >
          <View style={Styles.statusBar} />
          <SongList songList={this.state.songList} removeSong={this.removeSong}/>
        </View>
      </ViewPagerAndroid>
    );
  }
}

