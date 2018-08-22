import React, { Component } from "react";
import YouTube from 'react-youtube';

import "../Global/css/Games.css";

class Games extends Component {
    render() {
        const opts = {
            height: '350',
            width: '440',
            playerVars: { 
                autoplay: 2
            }
        }   
        return (
            <article id="games">
                <header>
                    <img className="card-img-top" src="./images/games/jordan-games.jpg" alt="Michael Jordan Chicago Bulls" />
                </header>            
                <section className="container">                    
                    <div className="card border-dark mt-5"> 
                            <div className="card-header"> 
                               <h2>michael jordan the best games</h2>
                            </div>
                            <div className="card-body">  
                                <article className="">
                                    <figure>
                                        <picture>
                                        <YouTube
                                            videoId="530z-_yjdlU?rel=0"
                                            opts={opts}
                                            onReady={this._onReady}
                                        />
                                        </picture>
                                    </figure>
                                </article>
                                <article className="">
                                    <figure>
                                        <picture>
                                        <YouTube
                                            videoId="IuffQrpZRHc"
                                            opts={opts}
                                            onReady={this._onReady}
                                        />
                                        </picture>
                                    </figure>
                                </article>
                                <article className="">
                                    <figure>
                                        <picture>
                                        <YouTube
                                            videoId="zAnJmEmWIBw"
                                            opts={opts}
                                            onReady={this._onReady}
                                        />
                                        </picture>
                                    </figure>
                                </article>                               
                            </div>    
                        </div>                         
                </section>
            </article>
        )
    }
    _onReady(event) {       
        event.target.pauseVideo();
    }
}

export default Games