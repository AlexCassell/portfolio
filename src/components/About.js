import React from 'react';
import '../css/about.css';
import portrait from '../images/about/portrait.png';

let title ="About Me";//this will be imported when I start on the backend
let content = "";



const About  = () => {
  return (
      <div className="about">
          <div className="about__title">{title}</div> 
          <div className='about__portrait'>
            <img src={portrait} alt="Alex Cartoon"/>
          </div>
          <div className="about__mainContent">
            <div className="about__paragraph">
              My name is Alex Cassell (surprise!)  I am combat veteran and I have been making 
              websites since 1997.  Coding is by far my favorite activity; besides playing with my kids! 
              I mostly enjoy building websites and games with <span className="about__highlighted">HTML5</span> (ie <span className="about__highlighted">React</span>, <span className="about__highlighted">JavaScript</span>, <span className="about__highlighted">CSS3</span> and <span className="about__highlighted">HTML</span>).  I have
              over 10 years of experience with popular CMS software such as <span className="about__highlighted">WordPress</span> and <span className="about__highlighted">Drupal</span>.
            </div>
            <div className="about__paragraph">
              My passion is <span className="about__highlighted">FrontEnd</span> development but I have worked with <span className="about__highlighted">MYSQL</span>, <span className="about__highlighted">MongoDB</span>, <span className="about__highlighted">FireBase</span> and <span className="about__highlighted">GameSparks</span>.
              I have more than 2 years experience making apps and games with <span className="about__highlighted">Unity3d</span>.
            </div>
            <div className="about__paragraph">
              I am currently attending Lambda School for Software Engineering 
              and will be finished at the end of April.
            </div>
          </div>
        </div>
    );
  // }
}

// render(<About />, document.getElementById('root'));

export default About;