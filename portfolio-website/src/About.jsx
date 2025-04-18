import React, { useEffect } from 'react';
import catsuLogo from './assets/catsu_logo.png';


function About() {

  useEffect(() => {
    const links = document.querySelectorAll('.navLink');

    const handleClick = (e) => {
      const id = e.target.getAttribute('href')?.replace('#', '');
      if (id === "about") {
        const layer = document.querySelector('#about_layer');
        if (layer) {
          layer.style.animation = 'none';
          void layer.offsetWidth;
          layer.style.animation = 'layer-transition 5s ease-in-out 100ms forwards';
        }
      }
    };

    links.forEach(link => link.addEventListener('click', handleClick));
    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <div className="link d-flex flex-column align-items-center" id="about">
      <div id="about_header">About Me</div>
      <div className="d-flex justify-content-center align-items-center text-center" id="about_layer">
        About Me
      </div>
      <div className="content_wrapper"> 
        <div className="about_content d-flex flex-row flex-wrap justify-content-center w-100">
          <div className="cards">
            <p style={{ fontWeight: 'bolder', fontSize: '20px', color: 'white' }}>School Last Attended</p>
            <p>I am a graduate of Bachelor of Science in Information Systems at 
              <span> <a href="https://catsu.edu.ph" target="_blank">Catanduanes State University</a></span>
            </p>
            <img src={catsuLogo} height="80" width="80" alt="CatSU Logo" />
            <br />
            <span>AY:2020-2024</span>
          </div>
          <div className="cards">
            <p style={{ fontWeight: 'bolder', fontSize: '20px', color: 'white' }}>Skills</p>
            <div className="skill_set d-flex align-content-center flex-wrap flex-row">
              <div className="skills">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg' height="40" width="40" alt="ReactJs Image" />
                <p>ReactJS</p>
                </div>
              <div className="skills">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' height="40" width="40" alt="HTML Image" />
                <p>HTML5</p>
                </div>
              <div className="skills">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' height="40" width="40" alt="CSS3 Image" />
                <p>CSS3</p>
                </div>
              <div className="skills">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' height="40" width="40" alt="JS Image" />
                <p>Javascript</p>
                </div>
              <div className="skills">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' height="40" width="40" alt="PHP Image" />
                <p>PHP</p>
                </div>
              <div className="skills">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' height="40" width="40" alt="MYSQLImage" />
                <p>MYSQL</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
