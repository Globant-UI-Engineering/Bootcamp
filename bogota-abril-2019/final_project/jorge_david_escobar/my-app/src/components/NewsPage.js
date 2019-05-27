import React, { Component } from 'react'

export default class NewsPage extends Component {
    render() {
        return (
            
                <div className=" col-lg-3 mb-3 d-flex justify-content-center">
                    <div className="card border-primary">
                        <img src={this.props.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.content}</p>
                            <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">click me to read</a>
                        </div>
                    </div>
                </div>
            
        )
    }
}
