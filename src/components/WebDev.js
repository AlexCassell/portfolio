import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/webDev.css';

let title ="WEB DEV RESOURCES";

class WebDev extends Component {
    render() {
        return (
            <div className="webDev">
                <div className="webDev__tagHolder"><p id="webDev"/></div>
                <div className="webDev__title">{title}</div> {/* Make Text do something cool w/ js*/}
                <div className="webDev__mainContent">
                {/* <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
                    Test 6 (anchor)
                </Link> */}
                </div>
            </div>
            );
    }
}

render(<WebDev />, document.getElementById('root'));

export default WebDev;