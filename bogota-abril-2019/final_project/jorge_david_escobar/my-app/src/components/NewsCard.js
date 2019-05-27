import React, { Component } from 'react'


export default class NewsCard extends Component {
    render() {
        return (
            <div className="col-sm-12 col-lg-6 d-flex justify-content-center mb-3">
                <div className="card mb-4">
                    <img src={this.props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>                        
                        <a href={this.props.link} target="_blank" className="btn btn-primary" type="button">click me</a>
                    </div>
                </div>
            </div>
        )
    }
}
