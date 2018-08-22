import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Global/css/Page404.css";

class Page404 extends Component {

    render() {
       
        return (
            <section className="container" id="pageError">
                <div className="row mt-5">
                    <div className="col-sm-12 justify-content-center">
                        <h2>Oops!</h2>
                        <p>sorry we can't find the page</p>
                        <Link className="btn btn-primary" to={"/"}>Home Page</Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default Page404