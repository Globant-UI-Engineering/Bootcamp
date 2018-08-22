import React, { Component } from "react";
import { addToCart } from "../action";
import { product } from "../../data/allShoes.json";
import ShoppingCart from "../ShoppingCart";
import store from "../store";

import "../Global/css/Shoes.css";

class Shoes extends Component {
    constructor(props){
        super(props);
        this.state={
            products:product
        }
    }
    render() {        
        const shoes = this.state.products.map((product, index)=>{
            return (                
                <div aria-label="jordan shoes" className="col-12 col-sm-6 col-lg-4 mt-5" key={index}>
                    <div className="card">
                    <div className="card-header">
                        <h6 className="card-title">{product.title}</h6>
                    </div>
                        <div className="card-body">
                            <img className="card-img-top" src={product.image} alt={product.desciption} />
                            
                        <p className="card-text">{product.desciption}</p>
                        </div>                            
                        <div className="card-footer">                             
                        <button className="btn btn-primary" onClick={()=>this.addToCart(product)} >${product.price}</button> 
                        </div>
                    </div>
                </div>             
            )            
        })
        return (
            <React.Fragment>
                <header>                    
                    <img className="card-img-top" src="./images/shoes/jordan-shoes.jpg" alt="Classic Jordan Shoes" />                   
                </header>            
                <div className="container" id="shoes">
                    <div className="row">
                        <div className="col-6 col-sm-8">  
                            <div className="row">
                            {shoes}
                           </div> 
                        </div>
                        <ShoppingCart />                     
                    </div>                   
                </div>                     
            </React.Fragment> 
        )
    }
    addToCart(product){
        store.dispatch(addToCart(product))
    }
}

export default Shoes