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
      searchText: '',
      currentPokemon: undefined
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  componentWillMount() {
  }
  
  componentDidMount() {
  }
  
  handleSearchChange($event) {
    $event.preventDefault();
    this.setState({searchText: $event.target.value.toLowerCase()})
  }
  
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.search();
    }
  }
  
  search($event) {
    PokeapiService.search(this.state.searchText)
      .then((response) => {
        console.log(response.data);
        this.setState({currentPokemon: response.data})
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
  
  render() {
    return(
      <div className={'screen-container'}>
        <div>
          <GlowingCircleComponent style={{margin: '2%'}} size='15px' darkColor={'#9e1c1b'} lightColor={'#e71f20'} shineColor={'#fbc9b7'}/>
          <GlowingCircleComponent style={{margin: '2%'}} size='15px' darkColor={'#9e1c1b'} lightColor={'#e71f20'} shineColor={'#fbc9b7'}/>
        </div>
        <div className={'screen-display'}>
          <Typist>
            {this.welcomeSentece}
            <Typist.Backspace count={this.welcomeSentece.length} delay={100} />
            {this.letsBeginSentence}
          </Typist>
          <input className={'search-bar'}
                 type={'text'}
                 value={this.state.searchText}
                 onChange={this.handleSearchChange}
                 onKeyPress={this.handleKeyPress}
          />
          {
            this.showSprite()
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
