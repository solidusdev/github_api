import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Home extends Component {

    render() {
        return(
            <Fragment>
                <main id="home">
                    <div className="center-horizontal">
                        <div className="center-vertical">
                            <h1>GitHub API</h1>
                            <h2>Utilizing GitHub's API to display some interesting facts</h2>
                            <Link to="/top_repositories"><p>Top 15 Repositories [From Last Month]</p></Link>
                        </div>
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Home;