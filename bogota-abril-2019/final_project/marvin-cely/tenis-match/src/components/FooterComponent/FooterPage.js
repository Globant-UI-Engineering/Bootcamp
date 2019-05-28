import React from '../../../node_modules/react';
import '../../css/FooterPage.css';
import globantLogo from '../../images/globantLogo.png';

class FooterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorMessage: 'Creado por:',
      author: 'Marvin Daniel Cely Báez',
    }
  }
  render() {
    const flaticonCredits = () => {
      return (
        <React.Fragment>
          Iconos tomado por:
            <a 
              href="https://www.flaticon.com/authors/dinosoftlabs" 
              title="DinosoftLabs"
              target="_blank"
              rel="noopener"
            >
                &nbsp;DinosoftLabs
            </a>             
            &nbsp;y
            <a href="https://www.freepik.com/" title="Freepik" target="_blank" rel="noopener">
              &nbsp;Freepik
            </a>
            <br/>
            desde 
            <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener">
              &nbsp;www.flaticon.com
            </a> 
            &nbsp;licencia por: 
            <a href="http://creativecommons.org/licenses/by/3.0/" 			    
              title="Creative Commons BY 3.0" 
              target="_blank"
              rel="noopener">
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
              href="https://github.com/Globant-UI-Engineering/Bootcamp/tree/marvin-cely-final-project/bogota-abril-2019/final_project/marvin-cely/tenis-match"
              target="_blank" rel="noopener">
                <i className="fab fa-github ml-1"></i>
            </a>
          </p>           
        </section>                    
      </footer>
    );
  }
}

export default FooterPage;