import React, {Component} from "react";
import '../styles/main.css'
import {GlowingCircleComponent} from "../component/glowing-circle-component";
import {ScreenComponent} from "../component/screen-component";
import {ControllerPadComponent} from "../component/controller-pad-component";
import {SecondaryScreenComponent} from "../component/secondary-screen-component";

export class MainComponent extends Component {
  
  mainButton = undefined;
  
  cameraSize = '80px';
  
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: undefined
    }
  }
  
  componentWillMount() {
  }
  
  componentDidMount() {
    this.mainButton = document.getElementById('main-button');
    let mainButtonWidth = getComputedStyle(this.mainButton).width;
    this.mainButton.style.height = mainButtonWidth;
    let musicElement = document.getElementById('music-element');
    musicElement.volume = 0.1;
  }
  
  gotPokemonDataCallback = (pokemonData) => {
    this.setState({
      pokemonData: pokemonData
    })
  };
  
  render() {
    return(
      <div className={'main-container col align-self-center'}>
        <audio
          id={'music-element'}
          controls={true}
          autoPlay={true}
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
          <ScreenComponent gotPokemonData={this.gotPokemonDataCallback}/>
          <div className={'controller-row'}>
            <button className={'main-button'} id={'main-button'}/>
            <div className={'controller-center-container p-0'}>
              <button style={{backgroundColor: 'red'}} className={'wide-button'}/>
              <button style={{backgroundColor: 'blue'}} className={'wide-button'}/>
              <SecondaryScreenComponent pokemonData={this.state.pokemonData}/>
            </div>
            <ControllerPadComponent/>
          </div>
        </div>
      </div>
    )
  }
}
