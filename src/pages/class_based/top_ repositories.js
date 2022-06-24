import React, { Component, Fragment } from "react";
import Posts from "../../components/top_repositories/class_based/posts";
import Pagination from "../../components/top_repositories/class_based/pagination";

class TopRepositories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data_repos: [],
            current_page: 1,
            posts_per_page: 4
        }

        // Get the current date
        this.current_date = new Date();
        this.day = String(this.current_date.getDate()).padStart(2,"0");
        this.month_formatter = new Intl.DateTimeFormat("default", {
            month: "numeric"
        });
        this.current_month = String(this.current_date.getMonth()).padStart(2,"0");
        this.previous_month = this.month_formatter.format(
            new Date(this.current_date.getFullYear(), this.current_date.getMonth() - 1)
        ).padStart(2, "0");
        this.year = this.current_date.getFullYear();
    }

    componentDidMount() {
        this.retrieve_data();
    }

    retrieve_data = () => {
        fetch(`https://api.github.com/search/repositories?q=created:">${this.year}-${this.previous_month}-${this.day}"&sort=stars&order=desc&per_page=15`)
        .then(response => response.json())
        .then(obj => {
            this.setState({
                data_repos: obj.items
            })
        })
    }

    paginate = page_number => {
        this.setState({
            current_page: page_number
        })
    }

    render() {

        // Show the total amount of posts before pagination
        this.index_of_last_post = this.state.current_page * this.state.posts_per_page;
        this.index_of_first_post = this.index_of_last_post - this.state.posts_per_page;
        this.current_post = this.state.data_repos.slice(this.index_of_first_post, this.index_of_last_post);
        
        return(
            <Fragment>
                <main id="top-repositories">
                    <h1>Top 15 GitHub Repositories</h1>
                    <h2>Find out what GitHub repositories has been making noise one month ago from today's date: {`${this.current_month}-${this.day}-${this.year}!`}</h2>
                    <div className="table">
                        <Posts data_repos={this.current_post} />
                        <Pagination 
                            posts_per_page={this.state.posts_per_page}
                            total_posts={this.state.data_repos.length}
                            paginate={this.paginate}
                            is_active={this.state.current_page}
                        />
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default TopRepositories;