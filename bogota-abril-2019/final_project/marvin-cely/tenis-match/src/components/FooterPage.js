import React from 'react';
import '../css/FooterPage.css';
import globantLogo from '../images/globantLogo.png';

class FooterPage extends React.Component {
  render() {
    const flaticonCredits = () => {
      return (
        <React.Fragment>
          Iconos tomado por:
            <a 
              href="https://www.flaticon.com/authors/dinosoftlabs" 
              title="DinosoftLabs"
              target="_blank"
            >
                &nbsp;DinosoftLabs
            </a>             
            &nbsp;y
            <a href="https://www.freepik.com/" title="Freepik" target="_blank">
              &nbsp;Freepik
            </a>
            <br/>
            desde 
            <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">
              &nbsp;www.flaticon.com
            </a> 
            &nbsp;is licensed by 
            <a href="http://creativecommons.org/licenses/by/3.0/" 			    
              title="Creative Commons BY 3.0" 
              target="_blank">
                &nbsp;CC 3.0 BY
            </a>
        </React.Fragment>
      );
    }
    return(
      <footer className="p-4">
        <p>
          {flaticonCredits()}
        </p>  
        <section>
          <img src={globantLogo} alt="Globant Logo"></img>
        </section> 
        <p>
          <strong>Diseñado por:&nbsp;</strong>
          Marvin Daniel Cely Báez&nbsp;
          <a
            href="https://github.com/Globant-UI-Engineering/Bootcamp/tree/marvin-cely-final-project/bogota-abril-2019/final_project/marvin-cely/tenis-match"
            target="_blank">
              <i className="fab fa-github ml-1"></i>
          </a>
        </p>                     
      </footer>
    );
  }
}

export default FooterPage;