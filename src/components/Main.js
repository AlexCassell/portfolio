/*eslint no-unused-vars: "off"*/
/*eslint no-useless-concat: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/mainBody.css';
import '../css/header.css';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import WebDev from '../components/WebDev';
import Video from '../components/Video';
// import TopZoomAnimation from '../components/topZoomAnimation';

import github from '../images/socialMedia/github.png';
import linkedIn from '../images/socialMedia/linkedIn.png';
import facebook from '../images/socialMedia/facebook.png';

import down from '../images/ui/double-down-arrows.png';

let scrollCount = 0;

let initialState = true;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'mainState': 
                    <header className="headerClear">
                      <div className="header__menu">
                      <Link activeClass="active" to="mainStructure" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, 0)}><u>Home</u></button></Link>                     
                      {/* <a href="/blog"><button className="header__menu__links">Blog</button></a> */}
                      <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -12)}>About</button></Link>
                      <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -26)}>Projects</button></Link>
                      <Link activeClass="active" to="webDev" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -42)}>Web Dev</button></Link>
                      <a href="/#contact"><button className="header__menu__links">Contact</button></a>                         
                      </div>
                  </header>

    };
  }
  
  componentWillMount(){
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop(){
    scroll.scrollToTop();
    // scrollCount = 0;
  }

  scrollToBottom(){
    scroll.scrollToBottom();
  }

  scrollTo(){
    scroll.scrollTo(100);
  }
  
  scrollMore(){
    scroll.scrollMore(100);
  }

  handleSetActive(to) {
    console.log(to);
  }

  handleScroll(e) {
    if(e.deltaY < 0) {
      scrollCount += 1;
    }
    if(e.deltaY > 0) {
      scrollCount -= 1;  
    }
    if(scrollCount > 0){
      scrollCount = 0;
    }
    // if(scrollCount < -44){
    //   scrollCount = -42;
    // }

    console.log(scrollCount);
    this.stateChange();
  }

  handleMenuButtons(number){
    console.log(number);
    scrollCount = number;
    this.stateChange();
  }

  stateChange(){
    if(scrollCount > -5){
      this.setState({
        mainState: 
            <header className="headerClear">
              <div className="header__menu">
                <Link activeClass="active" to="mainStructure" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, 0)}><u>Home</u></button></Link>                       
                {/* <a href="/blog"><button className="header__menu__links">Blog</button></a> */}
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -12)}>About</button></Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -26)}>Projects</button></Link>
                <Link activeClass="active" to="webDev" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -42)}>Web Dev</button></Link>
                <a href="/#contact"><button className="header__menu__links">Contact</button></a>
              </div>
        </header>
      });
    }
    else if(scrollCount < -5 && scrollCount > -7){
      this.setState({
        mainState: 
            <header className="header">
              <div className="header__menu">
                <Link activeClass="active" to="mainStructure" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, 0)}><u>Home</u></button></Link>                       
                {/* <a href="/blog"><button className="header__menu__links">Blog</button></a> */}
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -12)}>About</button></Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -26)}>Projects</button></Link>
                <Link activeClass="active" to="webDev" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -42)}>Web Dev</button></Link>
                <a href="/#contact"><button className="header__menu__links">Contact</button></a>                         
              </div>
        </header>
      });
    }
    else if(scrollCount < -8 && scrollCount > -22){
      this.setState({
        mainState: 
            <header className="header">
              <div className="header__menu">
                <Link activeClass="active" to="mainStructure" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, 0)}>Home</button></Link>  
                {/* <a href="/blog"><button className="header__menu__links">Blog</button></a> */}
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -12)}><u>About</u></button></Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -26)}>Projects</button></Link>
                <Link activeClass="active" to="webDev" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -42)}>Web Dev</button></Link>
                <a href="/#contact"><button className="header__menu__links">Contact</button></a>
              </div>
        </header>
      });
    }
    else if(scrollCount < -22 && scrollCount > -38){
      this.setState({
        mainState: 
            <header className="header">
              <div className="header__menu">
              <Link activeClass="active" to="mainStructure" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, 0)}>Home</button></Link>  
              {/* <a href="/blog"><button className="header__menu__links">Blog</button></a> */}
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -12)}>About</button></Link>
              <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -26)}><u>Projects</u></button></Link>
              <Link activeClass="active" to="webDev" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -42)}>Web Dev</button></Link>
              <a href="/#contact"><button className="header__menu__links">Contact</button></a>                         
              </div>
        </header>
      });
    }
    else if(scrollCount < -41){
      this.setState({
        mainState: 
            <header className="header">
              <div className="header__menu">
                <Link activeClass="active" to="mainStructure" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, 0)}>Home</button></Link>  
                {/* <a href="/blog"><button className="header__menu__links">Blog</button></a> */}
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -12)}>About</button></Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -26)}>Projects</button></Link>
                <Link activeClass="active" to="webDev" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><button className="header__menu__links" onClick={this.handleMenuButtons.bind(this, -42)}><u>Web Dev</u></button></Link>
                <a href="/#contact"><button className="header__menu__links">Contact</button></a>                         
              </div>
        </header>
      });
    }

  }


  render() {
    return (
          <div className="mainStructure" onWheel={(e) =>this.handleScroll(e)}>
            {this.state.mainState}
            <Video />
          <div className="socialMedia">
            <a href="https://github.com/AlexCassell" target="_blank" rel="noopener noreferrer"><button className="socialMedia__icons"><img src={github} alt="GitHub" height="100px" width="100px"/></button></a>
            <a href="https://www.linkedin.com/in/alexcassell/" target="_blank" rel="noopener noreferrer"><button className="socialMedia__icons"><img src={linkedIn} alt="Linked In" height="100px" width="100px"/></button></a>
            <a href="https://www.facebook.com/simulism.net" target="_blank" rel="noopener noreferrer"><button className="socialMedia__icons"><img src={facebook} alt="Facebook" height="100px" width="100px"/></button></a>
          </div>
        <p id="top"/>
        {/* <div className="underconstruction">This website is currently being rebuilt. Currently works best with 1920 X 1080.</div> */}
        <div className="topGraphic">
          <div className="downArrows">
            <img src={down} alt="Down Arrows" height="100px" width="100px"/>
          </div>
        </div>
        <div className="topGraphic__graphicDivider" />
        {/* <div className="about"/> */}
        < About />
        <div className="about__graphicDivider" />
        < Projects />
        <div className="projects__graphicDivider" />
        < WebDev />
      </div>
    );
  }
}

export default Main;
export {initialState};