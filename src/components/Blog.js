import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/blog.css';

class Blog extends Component {

    componentWillMount(){
        console.log("Blog fired");
    }

    render() {
        return (
            <div className="blogWrapper">
                The blog part of this website has not been built yet.
            </div>

            );
    }
}

render(<Blog />, document.getElementById('root'));

export default Blog;