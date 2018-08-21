//Dependencies
import React, { Component } from 'react';

//Styles
import './styles/SocialNetworksBar.css';
import logoFacebook from './pictures/logofacebook.png';
import logoTwitter from './pictures/logotwitter.png';
import logoInstagram from './pictures/logoinsta.png';
import logoYoutube from './pictures/logoyoutube.png';
class SocialNetworksBar extends Component{

   render(){
     
       return(
           <div>
               <a className="link" target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/jackdanielsco/?brand_redir=105868097300"><img className="logo facebook" src={logoFacebook} alt="Facebook logo"/></a>
               <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/JackDaniels_US/"><img className="logo instagram" src={logoInstagram} alt="Instagram logo" /></a>
               <a className="link" target="_blank"  rel="noopener noreferrer" href="https://twitter.com/JackDaniels_US"><img className="logo twitter" src={logoTwitter} alt="Twitter logo" /></a>
               <a className="link" target="_blank"  rel="noopener noreferrer" href="https://www.youtube.com/user/JackDaniels"><img  className="logo youtube" src={logoYoutube} alt="Youtube logo" /></a>
           </div>
       )
   }

} 
export default SocialNetworksBar;