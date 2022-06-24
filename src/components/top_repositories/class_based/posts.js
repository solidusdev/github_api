import React, { Component, Fragment } from "react";

class Posts extends Component {

    render() {
        return(
            <Fragment>
                {
                    this.props.data_repos.map((element, i) => (
                        <Fragment key={i}>
                            <div className="row">
                                <div className="column">
                                    <h3>Repo ID</h3>
                                    <p>{element["id"]}</p>
                                </div>
                                <div className="column">
                                    <h3>Repo Name</h3>
                                    <p>{element["full_name"]}</p>
                                </div>
                                <div className="column">
                                    <h3>Description</h3>
                                    <p>{element["description"]}</p>
                                </div>
                                <div className="column">
                                    <h3>Star Count</h3>
                                    <p>{element["stargazers_count"]}</p>
                                </div>
                            </div>
                        </Fragment>
                    ))
                }
            </Fragment>
        )
    }
}

export default Posts;