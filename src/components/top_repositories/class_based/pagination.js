import React, { Component, Fragment } from "react";

class Pagination extends Component {

    render() {
        
        const page_numbers = [];

        for(let i = 1; i <= Math.ceil(this.props.total_posts / this.props.posts_per_page); i++) {
            page_numbers.push(i);
        }
        
        return(
            <Fragment>
                <ul className="pagination">
                    {
                        page_numbers.map((number, i) => (
                            <Fragment key={i}>
                                <li key={i}>
                                    <a  style={this.props.is_active === number ? {color: "#ba55d3"} : null}
                                        onClick={() => this.props.paginate(number)}
                                        href="#!"> {number}
                                    </a>
                                </li>
                            </Fragment>
                        ))
                    }
                </ul>
            </Fragment>
        )
    }
}

export default Pagination;