import React from '../../../node_modules/react';
import '../../css/FooterPage.css';
import globantLogo from '../../images/globantLogo.png';
import { dataFooterPage } from'../../data-component/data-footer-page';

class FooterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorMessage: dataFooterPage.authorMessage,
      author: dataFooterPage.author,
      gitHubURL:  dataFooterPage.gitHubURL,
      flaticonURL: dataFooterPage.flaticonURL,
      licenseIconURL: dataFooterPage.licenseIconURL,
    }
  }
  render() {
    const flaticonCredits = () => {
      return (
        <React.Fragment>
          Iconos tomado por:
            <a 
              href={this.state.flaticonURL}  
              title="DinosoftLabs"
              target="_blank"
              rel="noopener noreferrer"
            >
                &nbsp;DinosoftLabs
            </a>             
            &nbsp;y
            <a href="https://www.freepik.com/" title="Freepik" target="_blank" rel="noopener noreferrer">
              &nbsp;Freepik
            </a>
            <br/>
            desde 
            <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">
              &nbsp;www.flaticon.com
            </a> 
            &nbsp;licencia por: 
            <a href={this.state.licenseIconURL} 			    
              title="Creative Commons BY 3.0" 
              target="_blank"
              rel="noopener noreferrer">
                &nbsp;CC 3.0 BY
            </a>
        </React.Fragment>
      );
    }
    return(
      <footer className="container-fluid p-3">
        <section className="row">
          <p className="col-md-5">
            {flaticonCredits()}
          </p>  
          <picture className="col-md-3 p-4">
            <img src={globantLogo} alt="Globant Logo" className="img-fluid"/>
          </picture> 
          <p className="col-md-4">
            <strong>{this.state.authorMessage}&nbsp;</strong>
            {this.state.author}&nbsp;
            <a
              href={this.state.gitHubURL}
              target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github ml-1"></i>
            </a>
          </p>           
        </section>                    
      </footer>
    );
  }
}

export default FooterPage;