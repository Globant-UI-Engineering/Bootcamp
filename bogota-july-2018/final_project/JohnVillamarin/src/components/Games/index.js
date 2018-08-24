import React, { Component } from "react";
import YouTube from 'react-youtube';
import { videos } from "../../data/videos.json";

import "../Global/css/Games.css";

class Games extends Component {
    _onReady(event) {
        event.target.pauseVideo();
    }
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
                            {videos.map(video =>
                                <article className="" key={video.id}>
                                    <figure>
                                        <picture>
                                            <YouTube
                                                videoId={video.videoId}
                                                opts={opts}
                                                onReady={this._onReady}
                                            />
                                        </picture>
                                    </figure>
                                </article>
                            )}                                 
                            </div>    
                        </div>                         
                </section>
            </article>
        )
    }    
}

export default Games