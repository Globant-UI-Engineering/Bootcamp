import React,{Component} from 'react';
import './styles/OurProducts.css';
import AddButton from '../../secondary/AddButton';
class OurProducts extends Component{

    render(){
        return(
            <div className="containerProducts">
                <div className="presentation">
                    <h1>The Main Characters</h1>               
               </div>
               <div className="Product1">
                    <h2>Old No.7</h2>
                    <span>Charcoal mellowed. Drop by drop .</span>
                    <hr />
                    <AddButton />
               </div>
               <div className="Product2">
                    <h2>Tennessee rye</h2>
                    <span>70% Rye. 100% Jack.</span>
                    <hr />
                    <AddButton />
               </div>
               <div className="Product3">
                    <h2>Gentleman jack</h2>
                    <span>Double mellowed for exceptiona smoothness.</span>
                    <hr />
                    <AddButton />
               </div>
               <div className="Product4">
                    <h2>Tennessee  honey</h2>
                    <span>A little bit of Honey. A whole lot of Jack</span>
                    <hr />
                    <AddButton />
               </div>
            </div>
        )
    }   


}

export default OurProducts;
