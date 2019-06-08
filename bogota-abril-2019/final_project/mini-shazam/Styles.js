import { StatusBar, StyleSheet, Dimensions } from "react-native";

const mainColor = '#333745'
const secondColor = "#fe5f55"
const thirdColor = "#d6d7da"
const grayColor = '#646564'
const lightColor = '#d8d7c0'

export default StyleSheet.create({

  statusBar: {
    height: StatusBar.currentHeight,
    backgroundColor: 'black'
  },

  pageStyle: {
    flex: 1,
    backgroundColor: mainColor,
  },

  header: {
    paddingVertical: 10,
    alignSelf: 'center',
    fontSize: 30,
  },

  text: {
    color: grayColor
  },

  textLight: {
    color: lightColor
  },

  recognitionView: {
    flex: 1,
    justifyContent: "space-around"
  },

  recognitionBtn: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: lightColor,
    backgroundColor: secondColor
  },

  listSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: lightColor,
    alignSelf: 'center',
    width: (Dimensions.get('window').width - 40)
  },

  statusText: {
    alignSelf: 'center',
  },

  listBox: {
    padding: 10,
    margin: 10,
    backgroundColor: thirdColor,
    flexDirection: 'row',
  },

  textArea: {
    flex: 2,
  },

  coverAlbumArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconsArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});