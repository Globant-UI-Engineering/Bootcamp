//Components
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
//Styles
import './styles/Header.css'
import logo from './pictures/Header/logojackdaniels.png'
class Header extends Component{
    static propTypes={
        headerNav:PropTypes.array.isRequired,
    }
render(){
    const{headerNav}=this.props;
    return(
       <div className="bodyHeader">
         <header>  
            <nav className="headerNav">
              <ul>
              <h1 aria-label="Jack Daniel's"><img src={logo} alt="Jack Daniels logo white"/></h1>
                {headerNav && headerNav.map((item,key)=>
                    <li key={key} ><Link to={item.url} ><button>{item.tittle}</button></Link>
                </li>)}
              </ul>
            </nav>
         </header>
       </div>
    );
}

}
export default Header;