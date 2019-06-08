import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, DeviceInfo } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import Styles from "../Styles";

import { removeSong } from "../redux/actions";

class RecognizeView extends Component {

  constructor(props){
    super(props)

    this.songItem = this.songItem.bind(this)
  }

  songItem = ({ item }) => (
    <View style={Styles.listBox}>
      <View style={Styles.textArea} >
        <Text style={Styles.text}>{item.title}</Text>
        <Text style={Styles.text}>{item.artist}</Text>
        <Text style={Styles.text}>{item.album}</Text>
      </View>
      <View style={Styles.coverAlbumArea}>
      </View>
      <TouchableOpacity style={Styles.iconsArea} >
        <Ionicons name="md-trash" size={32} color="#fe5f55" onPress={ _ => this.props.removeSong(item.id)}/>
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View style={{ paddingBottom: 30 }}>
        <Text style={[Styles.header, Styles.textLight]}>
          Lista de canciones
        </Text>
        <FlatList
          data={this.props.songList}
          renderItem={this.songItem}
          keyExtractor={(_, index) => `${index}`}
        />
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({...ownProps, songList: state.songs})
const mapDispatchToProps = (dispatch, ownProps) => ({
  removeSong: (idSong) => {
    dispatch(removeSong(idSong))
    ownProps.removeSong(idSong)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecognizeView)