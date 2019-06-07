import React, {Component} from "react";
import '../styles/main.css'
import {GlowingCircleComponent} from "../component/glowing-circle-component";
import {ScreenComponent} from "../component/screen-component";
import {ControllerPadComponent} from "../component/controller-pad-component";
import {SecondaryScreenComponent} from "../component/secondary-screen-component";
import {PollyService} from "../service/polly-service";
import storage from '../storage/storage'

export class MainComponent extends Component {
  
  mainButton = undefined;
  
  cameraSize = '80px';
  match = '38-38-40-40-37-39-37-39-66-65';
  
  pikaSoundUri = 'https://www.soundboard.com/mediafiles/ot/OTIwODY0MDQzOTIwOTUy_JytSQ9L1Gk8.mp3';
  
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: undefined,
      keyArray: '',
      match: false,
      playDescriptionFunction: () => {}
    };
    PollyService.initPolly();
    this.captureKeyPress = this.captureKeyPress.bind(this);
    this.renderPikachu = this.renderPikachu.bind(this);
  }
  
  /*componentWillMount() {
    this.setState({
      data: storage.getState().pokemons
    })
  }*/
  
  componentDidMount() {
    this.mainButton = document.getElementById('main-button');
    let mainButtonWidth = getComputedStyle(this.mainButton).width;
    this.mainButton.style.height = mainButtonWidth;
    let musicElement = document.getElementById('music-element');
    musicElement.volume = 0.05;
  }
  
  gotPokemonDataCallback = (pokemonData) => {
    this.setState({
      pokemonData: pokemonData
    })
  };
  
  gotAudioCallback = (playDescription) => {
    this.setState( {
      playDescriptionFunction: playDescription
    })
  };
  
  captureKeyPress(event) {
    if (event.keyCode === 38 && this.state.keyArray !== '38'){
      this.setState({
        keyArray: '38',
        match: false
      });
    } else {
      this.setState({
        keyArray: this.state.keyArray + '-' + event.keyCode
      });
    }
    if (this.state.keyArray === this.match) {
      this.setState({
        match: true
      })
    }
  }
  
  handleStore = () => {
    storage.dispatch({
      type: 'SAVE_POKEMON',
      payload: this.state.pokemonData
    })
  };
  
  
  renderPikachu() {
    if (this.state.match) {
      return( <div>
        <audio
          id={'music-element'}
          controls={false}
          autoPlay={true}
          hidden={true}
          loop={false}
          src={this.pikaSoundUri}/>
      </div>)
    }
  }
  
  
  render() {
    document.body.addEventListener('keydown', this.captureKeyPress);
    return(
      <div className={'main-container col align-self-center'}>
        {
          this.renderPikachu()
        }
        <audio
          id={'music-element'}
          controls={true}
          autoPlay={false}
          hidden={true}
          loop={true}
          src={require('../assets/music/pokemon-theme-song-8bit.mp3')}/>
        <header className={'container'}>
          <div className={'row'}>
            <div className={'col-4 p-0'}>
              <div style={{width: this.cameraSize, height: this.cameraSize}} className={'camera-icon'}>
                <GlowingCircleComponent style={{margin: '10px'}} size={'54px'} darkColor={'#30459e'} lightColor={'#4b64ac'} shineColor={'#c6cae7'}/>
              </div>
            </div>
            <div className={'circles-component col-8 p-0'}>
              <GlowingCircleComponent style={{float: 'left'}} size='20px' darkColor={'#9e1c1b'} lightColor={'#e71f20'} shineColor={'#fbc9b7'}/>
              <GlowingCircleComponent style={{float: 'left'}} size='20px' darkColor={'#8f8732'} lightColor={'#f6ec2b'} shineColor={'#fbf7d2'}/>
              <GlowingCircleComponent style={{float: 'left'}} size='20px' darkColor={'#26633b'} lightColor={'#189d49'} shineColor={'#c5dcc3'}/>
            </div>
          </div>
        </header>
        <div style={{marginTop: '5%', marginBottom: '5%'}} className={'content-container'}>
          <ScreenComponent gotAudio={this.gotAudioCallback} gotPokemonData={this.gotPokemonDataCallback}/>
          <div className={'controller-row'}>
            <button onClick={this.state.playDescriptionFunction} className={'main-button'} id={'main-button'}/>
            <div className={'controller-center-container p-0'}>
              <button onClick={this.handleStore} className={'wide-button red-button'}/>
              <button onClick={() => storage.dispatch({type: 'GET_STATE'})} className={'wide-button blue-button'}/>
              <SecondaryScreenComponent pokemonData={this.state.pokemonData}/>
            </div>
            <ControllerPadComponent/>
          </div>
        </div>
      </div>
    )
  }
}
