import React, {Component} from "react";
import '../styles/screen-component.css'
import {GlowingCircleComponent} from "./glowing-circle-component";
import {MenuIconComponent} from "./menu-icon-component";
import Typist from "react-typist";
import {PokeapiService} from "../service/pokeapi-service";

export class ScreenComponent extends Component {
  
  welcomeSentece = '¡Bienvenido a la Pokedex!';
  letsBeginSentence = 'Comencemos';
  
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      showIntro: true,
      searchText: '',
      currentPokemon: undefined,
      playDescription: false
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }
  
  componentWillMount() {
  }
  
  componentDidMount() {
  }
  
  intro() {
    if (this.state.showIntro) {
      return (
        <Typist>
          {this.welcomeSentece}
          <Typist.Backspace count={this.welcomeSentece.length} delay={100} />
          {this.letsBeginSentence}
        </Typist>
      )
    }
  }
  
  handleSearchChange($event) {
    this.setState({playDescription: false});
    this.setState({searchText: $event.target.value.toLowerCase()});
  }
  
  handleKeyPress($event) {
    if ($event.key === 'Enter') {
      this.search();
    }
  }
  
  handleSearchClick($event) {
    this.search();
  }
  
  search($event) {
    PokeapiService.search(this.state.searchText)
      .then((response) => {
        console.log(response.data);
        this.setState({
          currentPokemon: response.data,
          playDescription: true,
          showIntro: false
        }, () =>{
          this.setState(
            {
              pokemonDescription: this.buildDescription()
            }
          )
        });
      }).catch(error => {
      console.log(error)
    })
  }
  
  showSprite() {
    if (this.state.currentPokemon !== undefined) {
      return (
        <img src={this.state.currentPokemon.sprites.front_default}/>
      )
    }
  }
  
  buildDescription() {
    let typesArray = this.state.currentPokemon.types;
    let typesText = '';
    if (typesArray.length === 1) {
      typesText = typesArray[0].type.name
    } else {
      typesText = typesArray.reduce((a, b) => a.type.name + ' ' + b.type.name);
    }
    let abilitiesArray = this.state.currentPokemon.abilities;
    let abilitiesText = abilitiesArray.map(x => x.ability.name).reduce((a, b) => a + ' and ' + b);
    return this.state.searchText
      + ', '
      + typesText
      + ' type pokemon, his abilities are '
      + abilitiesText
  }
  
  showDescription() {
    if (this.state.pokemonDescription !== undefined) {
      return (
        <Typist>
          <span className={'pokemon-description'}>
          {
            this.state.pokemonDescription
          }
          </span>
        </Typist>
      )
    }
  }
  
  playSpeech() {
    if (this.state.playDescription) {
      console.log(this.buildTextToSpeechUrl());
      // return (
      //   <div></div>
      // );
      return (
        <audio autoPlay={true} src={this.buildTextToSpeechUrl()}/>
      )
    }
  }
  
  buildTextToSpeechUrl() {
    return 'http://api.voicerss.org/?key=ce496e662cbf48faa48dedcac67baba4&hl=en-us&c=mp3&src='
      + this.state.pokemonDescription;
  }
  
  render() {
    return(
      <div className={'screen-container'}>
        {
          this.playSpeech()
        }
        <div>
          <GlowingCircleComponent style={{margin: '2%'}} size='15px' darkColor={'#9e1c1b'} lightColor={'#e71f20'} shineColor={'#fbc9b7'}/>
          <GlowingCircleComponent style={{margin: '2%'}} size='15px' darkColor={'#9e1c1b'} lightColor={'#e71f20'} shineColor={'#fbc9b7'}/>
        </div>
        <div className={'screen-display'}>
          {
            this.intro()
          }
          <input className={'search-bar'}
                 type={'text'}
                 value={this.state.searchText}
                 onChange={this.handleSearchChange}
                 onKeyPress={this.handleKeyPress}
          />
          <button onClick={this.handleSearchClick}>
            Buscar
          </button>
          {
            this.showSprite()
          }
          {
            this.showDescription()
          }
        </div>
        <div className={'container-fluid'}>
          <div className={'row screen-footer'}>
            <div className={'col-1 bottom-screen-light'}>
              <GlowingCircleComponent style={{margin: '2%'}} size='20px' darkColor={'#9e1c1b'} lightColor={'#e71f20'} shineColor={'#fbc9b7'}/>
            </div>
            <div className={'col-9'}/>
            <div className={'col-1 p-0'}>
              <MenuIconComponent/>
            </div>
            <div className={'col-1'}/>
          </div>
        </div>
      </div>
    )
  }
}
