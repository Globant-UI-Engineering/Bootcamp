import React from '../../node_modules/react';
import '../css/SmallPieceComponent.css';
import { observer } from '../../node_modules/mobx-react';
import utils from '../utils/utils';
import thesaurus from '../utils/thesaurus';

function LoadingComponent() {
  return (
  <section className="d-flex justify-content-center loading">
    <article className="spinner-grow text-info" role="status">
      <span className="sr-only">Loading...</span>
    </article>
  </section>
  );
}

function ErrorServiceComponent() {
  return (
  <article className="d-flex justify-content-center error-service">
    <p><i className="far fa-frown-open"></i>&nbsp;Algo salió mal, intente más tarde</p>
  </article>
  );
}

const CountryOptionComponent = observer(
  class CountryOptionComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const NATIONALITY = thesaurus.elementKey.NATIONALITY;
      const countriesList = utils.sortByAlphaArrayMap(Array.from(this.props.countries), NATIONALITY);
      const countriesOptions = () => {  
        return(
          countriesList.map(([key,{nationality}]) => {
            return(
              <option key={key} value={key}>
                {nationality}
              </option>
              )
            })
        );
      }; 
      return (
        <React.Fragment>
          <option value="" disabled>
              selecionar país
          </option>
          {countriesOptions()}
        </React.Fragment>
      );
    }
  }
);

class ImageCountry extends React.Component {
  constructor(props) {
    super(props);
    this.getImageAddress = this.getImageAddress.bind(this);
    this.flagTheme = this.flagTheme.bind(this);
  }

  flagTheme() {
    return (this.props.shinyTheme) ? 'shiny' : 'flag';
  }

  getImageAddress() {
    return `https://www.countryflags.io/${this.props.abbreviation}/${this.flagTheme()}/${this.props.flagSize}.png`;
  }

  render() {
    return(
      <img 
        src={this.getImageAddress()} 
        title={this.props.countryName} 
        alt={this.props.countryName}/>
    );
  }
}



export {LoadingComponent, CountryOptionComponent, ErrorServiceComponent, ImageCountry};