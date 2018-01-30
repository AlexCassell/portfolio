import React from 'react';
// import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/header.css';

import {initialState} from '../components/Main'

//use scroll count in main to change varriables that are read here // then initates a state chnage to render changes

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'navState': ''

        };
    }

    componentWillMount(){
        this.constantListener();
    }

    constantListener(){
        console.log('listening');
        if(initialState === false){
            this.setState({navState:
                <div>
                <header className="header">
                    <div className="header__menu">
                        {/* <div className="header__menu__links"><Link to="/#top" className="Nav-link">Home</Link></div> */}
                        <div className="header__menu__links"><Link to="/blog/" className="Nav-link">Blog</Link></div>
                        <a className="header__menu__links" href="/#about">About</a><br />
                        <a className="header__menu__links" href="/#projects">Projects</a><br />
                        <a className="header__menu__links" href="/#webDev">Web Dev</a><br />
                        <div className="header__menu__links"><Link to="/contact/" className="Nav-link">Contact</Link></div>
                    </div>
                </header>
            </div>
            });
        }
        else{
            this.setState({navState: ''});
        }
        setTimeout(this.constantListener.bind(this), 20);
    }

    render() {
        return (
            <div>
                {this.state.navState}
            </div>
            );
        }
    }
export default Navigation;