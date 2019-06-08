import React, { Component } from 'react'




export default class profile extends Component {
    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mt-4 ">
                            <div className="card hovercard text-white bg-dark p-2">
                                <div className="cardheader">
                                </div>
                                <div className="avatar">
                                    <img alt="" src={this.props.profileImg} />
                                </div>
                                <div className="info">
                                    <div className="title">
                                        <h5>{this.props.profileName}</h5>
                                    </div>
                                    <div className="desc">{this.props.email}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
