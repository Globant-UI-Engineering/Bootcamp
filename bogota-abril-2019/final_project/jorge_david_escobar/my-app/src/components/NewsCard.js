import React, { Component } from 'react'


export default class NewsCard extends Component {
    render() {
        return (
            <div className="col-sm-12 col-lg-6 mx-auto align-self-center">
                <div className="newsCard">
                    <div className="card">
                        <img src={this.props.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text"></p>
                            <a href={this.props.content} target="_blank" className="btn btn-primary">click me up</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
