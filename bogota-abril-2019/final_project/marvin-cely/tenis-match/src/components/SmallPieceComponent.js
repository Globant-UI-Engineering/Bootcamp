import React from 'react';
import { observer } from 'mobx-react';
import utils from '../utils/utils';
import thesaurus from '../utils/thesaurus';

function LoadingComponent() {
  return (
  <div className="d-flex justify-content-center">
    <div className="spinner-grow text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  );
}

function ErrorServiceComponent() {
  return (
  <div className="d-flex justify-content-center">
    <p><i className="far fa-frown-open"></i>&nbsp;Algo salió mal, intente más tarde</p>
  </div>
  );
}

const CountryOptionComponent = observer(
  class CountryOptionComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const elementKey = thesaurus.elementKey.NATIONALITY;
      const countriesList = utils.sortByAlphaArrayMap(Array.from(this.props.countries), elementKey);
      return countriesList.map(([key,{nationality, abbreviation}]) => {
        return(
          <option key={key} data-key={key} style="https://www.countryflags.io/:country_code/:style/:size.png">
            {/* <ImageCountry
              abbreviation={abbreviation}
              shinyTheme={true}
              flagSize={32}
              countryName={nationality}
            /> */}
            &nbsp;
            {nationality}
          </option>
          )
        });
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