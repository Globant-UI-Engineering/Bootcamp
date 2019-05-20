import React from 'react';
import { countries } from "../countries.json";

function LoadingComponent() {
  return (
    <div className="d-flex justify-content-center">                  
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

function CountryOptionComponent() {
  return countries.map(({nationality, num_code}) => <option key={num_code}>{nationality}</option>);
}



export {LoadingComponent, CountryOptionComponent};