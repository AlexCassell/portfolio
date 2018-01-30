import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/projects.css';

// import CSSRose from './animations/cssRose.js';

let title ="PROJECTS";//this will be imported when I start on the backend

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <div className="projects__tagHolder"><p id="projects"/></div>
                <div className="projects__title">{title}</div> {/* Make Text do something cool w/ js*/}
                <div className="projects__mainContent">content here</div>
                {/* < CSSRose /> */}
                <div className="bubbleWrapper">
                    <div className="bubbleWrapper__bubbleOne"/>
                    <div className="bubbleWrapper__bubbleTwo"/>
                    <div className="bubbleWrapper__bubbleThree"/>
                </div>
            </div>
            );
    }
}

render(<Projects />, document.getElementById('root'));

export default Projects;