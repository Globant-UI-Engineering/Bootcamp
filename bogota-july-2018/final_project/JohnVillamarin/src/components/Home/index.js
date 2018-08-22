import React, { Component } from "react";
import {images} from "../../data/carousel.json"
import { Link } from "react-router-dom";

import '../Global/css/Home.css';


class Home extends Component {
    constructor(){
        super();
        this.state={
            images:images            
        }
    };    
    render() {        
        const carouselData = this.state.images.map((element, index) => {
            return (                
                <div  key={index} className={"carousel-item " + (index === 0 ? 'active' : '')}>
                    <div className="background" style={{ backgroundImage: `url(${element.image})` }}></div>
                    <div aria-label={index+1 +" of "+images.length} className="carousel-caption d-none d-md-block ">
                        <h3>{element.title}</h3>
                        <p><Link className="link" to={element.url}>{element.value}</Link></p>
                    </div>
                </div> 
            )
        }) 
        return (
            <div id="carouselContent" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselContent" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselContent" data-slide-to="1"></li>
                    <li data-target="#carouselContent" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner"> 
                    {carouselData}
                </div>
                <a className="carousel-control-prev" href="#carouselContent" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselContent" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Home