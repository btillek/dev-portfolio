import { useState, useEffect } from 'react'
import { PROJECTS } from './data'

import InfoSlide from './components/info_slide'
import MouseHover from './components/mouse_hover'
import Marquee from 'react-fast-marquee'

import './App.css';

function App() {

  const [showInfo, setShowInfo] = useState(null);

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX + 10,
        y: e.clientY + 10
      })
    }
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  return (
    <div className="App">
      <div className="header">
        <Marquee>
            <h1 className="title">→ Boy Tillekens is a web developer based in The Netherlands</h1>
            <h1 className="title">→ Boy Tillekens is a web developer based in The Netherlands</h1>
            <h1 className="title">→ Boy Tillekens is a web developer based in The Netherlands</h1>
        </Marquee>
      </div>

      <div className="main">
        <div className="projects">
          <p>Selected projects:</p>

          {PROJECTS.map((project) => {
            return (
              <>
                <a className="project"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={(e) => setShowInfo(project.project)}
                onMouseLeave={(e) => setShowInfo(null)}
                >
                  {project.title}
                </a>
                <br />
              </>
            )
          })}

        </div>

        <InfoSlide showInfo={showInfo} projects={PROJECTS} />

      </div>

      <MouseHover mousePos={mousePos} showInfo={showInfo} projects={PROJECTS}/>

      <div className="contact">
        <a href="https://github.com/btillek" target="_blank" rel="noreferrer">Github</a>
        <a href="https://linkedin.com/in/boytillekens" target="_blank" rel="noreferrer">Linkedin</a>
        <a href="mailto:boytillekens@gmail.com" target="_blank" rel="noreferrer">Contact</a>
      </div>

    </div>
  );
}

export default App;
