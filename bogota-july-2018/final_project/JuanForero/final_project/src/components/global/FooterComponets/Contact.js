import React,{Component} from 'react';
import './styles/Contact.css';
import SocialNetworksBar from '../../secondary/SocialNetworksBar';
class Contact extends Component{
render(){
    return(

      <div className="containerContact">
          <div className="containerContactInformation">
              <div className="contactInformation">
                  <h1>Contact us</h1>
                  <h3>Have a question?<br/>We would love to hear from you</h3>
                  <p>Join us <span>On social networks</span></p>
                  <SocialNetworksBar />
              </div>
          </div>
          <div className="containerFrequentQuestions">
              <div className="frequentQuetions">
                   <h3>For general questions drop us a note using the form below</h3>
                   <h3>or call 1-888-551-JACK (5225).</h3>
                   <h4>Maybe you have a question about your reservation?</h4>
                   <h4>You can manage your reservation through the link found in your confirmation email</h4>
                   <h4>Or call the VIsitor's Center directly at 1-931-759-6357.</h4>

              </div>  
          </div>
       </div>   
    );
}

}
export default Contact;