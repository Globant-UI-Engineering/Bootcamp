import React,{Component} from 'react';
import './styles/Home.css';

class Home extends Component{
    render(){
        return(
            <div className="containerHome">
                <div className="video-foreground">
                <iframe title="Promotional video jack daniels" height="100%" width="100%" src="https://www.youtube.com/embed/f9z_MrT8nYM?playlist=f9z_MrT8nYM&loop=1&autoplay=1&controls=0&showinfo=0&rel=0&mute=1" frameBorder="0" allowFullScreen ></iframe>
               </div>
            </div>
        )
    }   
    
}
export default Home;

