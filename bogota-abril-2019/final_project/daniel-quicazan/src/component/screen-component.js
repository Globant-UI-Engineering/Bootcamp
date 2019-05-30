import React, {Component} from "react";
import '../styles/screen-component.css'
import {GlowingCircleComponent} from "./glowing-circle-component";
import {MenuIconComponent} from "./menu-icon-component";
import Typist from "react-typist";
import {PokeapiService} from "../service/pokeapi-service";
import {PollyService} from "../service/polly-service";

export class ScreenComponent extends Component {
  
  welcomeSentece = '¡Bienvenido a la Pokedex!';
  letsBeginSentence = 'Comencemos';
  enterPokemonNameSentence = 'Ingresa el nombre de tu pokemon';
  
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      showIntro: true,
      searchText: '',
      currentPokemon: undefined,
      playDescription: false,
      allPokemonNames: [],
      audioUri: undefined
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.setAudioUri = this.setAudioUri.bind(this);
  }
  
  componentWillMount() {
  }
  
  componentDidMount() {
    PokeapiService.getAllNames()
      .then((response) => {
        // console.log(response);
        this.setState({
          allPokemonNames: response.data.results.map((x) => x.name).sort()
        });
      })
  }
  
  intro() {
    if (this.state.showIntro) {
      return (
        <Typist>
          {this.welcomeSentece}
          <Typist.Backspace count={this.welcomeSentece.length} delay={150} />
          {this.letsBeginSentence}
          <Typist.Backspace count={this.letsBeginSentence.length} delay={150} />
          {this.enterPokemonNameSentence}
        </Typist>
      )
    }
  }
  
  handleSearchChange($event) {
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
    this.setState({
      pokemonDescription: undefined,
      audioUri: undefined
    });
    PokeapiService.search(this.state.searchText.trim())
      .then((response) => {
        // console.log(response.data);
        this.setState({
          currentPokemon: response.data,
          playDescription: true,
          pokemonDescription: this.buildDescription(response.data),
          showIntro: false
        });
        PollyService.getTextUrl(this.state.pokemonDescription, this.setAudioUri);
        this.props.gotPokemonData(response.data);
      }).catch(error => {
      console.log(error)
    })
  }
  
  showSprite() {
    if (this.state.currentPokemon !== undefined) {
      return (
        <div>
          <img src={this.state.currentPokemon.sprites.front_default} alt={'pokemon-front'}/>
          <img src={this.state.currentPokemon.sprites.back_default} alt={'pokemon-back'}/>
        </div>
      )
    }
  }
  
  buildDescription(currentPokemon) {
    let typesArray = currentPokemon.types;
    let typesText = '';
    if (typesArray.length === 1) {
      typesText = typesArray[0].type.name
    } else {
      typesText = typesArray.reduce((a, b) => a.type.name + ' ' + b.type.name);
    }
    let abilitiesArray = currentPokemon.abilities;
    let abilitiesText = abilitiesArray.map(x => x.ability.name).reduce((a, b) => a + ' and ' + b);
    return this.state.searchText
      + ', '
      + typesText
      + ' type pokemon, his abilities are '
      + abilitiesText
  }
  
  static showDescription(pokemonDescription) {
    if (pokemonDescription !== undefined) {
      return (
        <Typist>
          <span className={'pokemon-description'}>
          {
            pokemonDescription
          }
          </span>
        </Typist>
      )
    }
  }
  
  playSpeech() {
    if (this.state.audioUri) {
      // return (
      //   <div></div>
      // );
      return (
        <audio autoPlay={true} src={this.state.audioUri}/>
      )
    }
  }
  
  setAudioUri(audioUri) {
    this.setState({
      audioUri: audioUri
    })
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
          <div className={'search-container'}>
            <input className={'search-bar'}
                   list={'pokemons'}
                   name={'search-bar'}
                   type={'text'}
                   value={this.state.searchText}
                   onChange={this.handleSearchChange}
                   onKeyPress={this.handleKeyPress}
            />
            <datalist id={'pokemons'}>
              {
                this.state.allPokemonNames.map(
                  (name) => <option value={name} key={name}/>
                )
              }
            </datalist>
            <button className={'search-button'} onClick={this.handleSearchClick}>
              <span role={'img'} aria-label={'search-button'}>&#x1F50D;</span>
            </button>
          </div>
          {
            this.showSprite()
          }
          {
            ScreenComponent.showDescription(this.state.pokemonDescription)
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
