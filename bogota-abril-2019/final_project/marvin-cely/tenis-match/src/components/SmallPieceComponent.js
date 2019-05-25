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
      return countriesList.map(([key,{nationality}]) => <option key={key}>{nationality}</option>);
    }
  }
);



export {LoadingComponent, CountryOptionComponent, ErrorServiceComponent};