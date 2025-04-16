import React, { useEffect } from 'react';

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
            <p style={{ fontWeight: 'bolder', fontSize: '20px', color: '#1378f4' }}>School Last Attended</p>
            <p>I am a graduate of Bachelor of Science in Information Systems at 
              <span> <a href="https://catsu.edu.ph" target="_blank">Catanduanes State University</a></span>
            </p>
            <img src="./src/assets/catsu_logo.png" height="80" width="80" alt="CatSU Logo" />
            <br />
            <span>AY:2020-2024</span>
          </div>
          <div className="cards">
            <p style={{ fontWeight: 'bolder', fontSize: '20px', color: '#1378f4' }}>Skills</p>
            <div className="skill_set d-flex align-content-center">
              <div className="skills"><img src="./src/assets/HTML5.png" height="100" width="100" alt="" /></div>
              <div className="skills"><img src="./src/assets/php.png" height="100" width="100" alt="" /></div>
              <div className="skills"><img src="./src/assets/js.webp" height="100" width="100" alt="" /></div>
              <div className="skills"><img src="./src/assets/css3.webp" height="105" width="105" alt="" /></div>
              <div className="skills"><img src="./src/assets/sql.svg" height="100" width="100" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
