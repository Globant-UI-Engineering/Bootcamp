//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//Styles
import './styles/Footer.css';
import logojackdaniel from './pictures/Footer/logojackdaniels.png';
//Secondary components 
import SocialNetworksBar from '../secondary/SocialNetworksBar';

class Footer extends Component{
    static propTypes={
        footerNav:PropTypes.array.isRequired,
      }
render(){
    const {footerNav}=this.props;
    return(
        <div className="bodyFooter">
              <header>
                    <img href="holas" src={logojackdaniel} className="logoFooter" alt="Logo-JackDaniel's-Small" />
                    <p className="logoText">Live freely. Drink responsibly.</p>
                    <nav className="footerNav">
                         <ul>
                             {footerNav && footerNav.map((item,key)=><li key={key}><Link to={item.url}>{item.tittle}</Link></li>)}
                             <li><a target="_blank"  rel="noopener noreferrer"  href="https://legal.brown-forman.com/cookie-policy/english">Cookies</a></li>
                             <li><a target="_blank"  rel="noopener noreferrer"  href="https://legal.brown-forman.com/terms-of-use/english">Terms of use</a></li>
                             <li><a target="_blank"  rel="noopener noreferrer" href="https://legal.brown-forman.com/privacy-policy/english">Privacy Policy</a></li>
                         </ul>
                    </nav>
               </header>

               <section className="socialNetworksSection">
                     <SocialNetworksBar />
               </section>

               <footer className="footer">
                     <p className="paragraph">
                      JACK DANIEL DISTILLERY LYNCHBURG, TENNESSEE
                      JACK DANIEL’S, OLD NO. 7, TENNESSEE FIRE,  TENNESSEE HONEY, AND GENTLEMAN JACK<br/>
                      are registered trademarks of Jack Daniel's. © 2018.<br /><br />
                      All rights reserved. All other trademarks and trade names are properties of their respective owners. <br />
                      <span>To find out more about responsible consumtion, visit <a target="_blank"  rel="noopener noreferrer" href="https://www.responsibility.org/" >responsibility.org</a> and <a target="_blank"  rel="noopener noreferrer" href="https://www.responsibility.org/">ourthinkaboutdrinking.com </a></span>
                      <br/> Please do not share or forward with anyone under the legal drinking age.
                      </p>
               </footer>
        </div>
    );
}

}
export default Footer;