import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import ChessVid from './imgs/chess-nexus.mp4'
import ChessVid1 from './imgs/chess1.mp4'
import ChessVid2 from './imgs/chess2.mp4'
import BTVid from './imgs/btstudio.mp4'
import p5jsVid from './imgs/p5js.mp4'
import './App.css';

function App() {

  const [showChess, setShowChess] = useState("none");
  const [showBT, setShowBT] = useState("none");
  const [showP5js, setShowP5js] = useState("none");

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

          <a className="project"
            href="https://chess-bro-6b451ee7b4b4.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={(e) => setShowChess("block")}
            onMouseLeave={(e) => setShowChess("none")}
            >
              Chess Nexus
          </a><br />

          <a className="project"
            href="https://btillek.github.io/portfolio-website/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={(e) => setShowBT("block")}
            onMouseLeave={(e) => setShowBT("none")}
            >
              BTStudio
          </a><br />

          <a className="project"
            href="https://btillek.github.io/p5js-explorations/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={(e) => setShowP5js("block")}
            onMouseLeave={(e) => setShowP5js("none")}
            >
              p5.js Explorations
          </a><br />

        </div>

        <AnimatePresence>
          {showChess === "block" && window.innerWidth > 1024 && (
            <motion.div
              className="images"
              initial={ {x: window.innerWidth/2} }
              animate={ {x: 0, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] }} }
              exit={ {x: window.innerWidth/2, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] }} }
              >
              <div className="chess-vids">
                <video
                  muted
                  autoplay=""
                  loop
                  src={ChessVid1}
                  >
              </video>
              <video
                  muted
                  autoplay=""
                  loop
                  src={ChessVid2}
                  >
              </video>
            </div>
            <motion.div
              className="project-info"
              initial={ {y: window.innerHeight/2} }
              animate={ {y: 0, transition: { delay: 0.2, duration: 1, ease: [0.20, 0, 0.13, 1] }} }
              exit={ {y: window.innerHeight/2, transition: { duration: 0.5, ease: [0.20, 0, 0.13, 1] }} }
              >
              Multiplayer chess app developed at the Le Wagon web development bootcamp. Utilizing websockets to create a matchmaking system that allows for realtime 1v1 multiplayer matches, live chat, and user authentication.
              <br /><br /><em>In collaboration with Andrea Basili, 2024</em>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showBT === "block" && window.innerWidth > 1024 && (
            <motion.div
              className="images"
              initial={ {x: window.innerWidth/2} }
              animate={ {x: 0, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] }} }
              exit={ {x: window.innerWidth/2, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] }} }
              >
              <video
                style={{width: "40vw"}}
                muted
                autoplay=""
                loop
                src={BTVid}
                >
            </video>
            <motion.div
                className="project-info"
                initial={ {y: window.innerHeight/2} }
                animate={ {y: 0, transition: { delay: 0.2, duration: 1, ease: [0.20, 0, 0.13, 1] }} }
                exit={ {y: window.innerHeight/2, transition: { duration: 0.5, ease: [0.20, 0, 0.13, 1] }} }
                >
                  A portfolio website for animation studio BTStudio, using moving layers to create visual depth, much like the work BTStudio creates.
                  <br /><br /><em>2024</em>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showP5js === "block" && window.innerWidth > 1024 && (

            <motion.div
              className="images"
              initial={ {x: window.innerWidth/2} }
              animate={ {x: 0, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] }} }
              exit={ {x: window.innerWidth/2, transition: { delay: 0.3, duration: 0.5, ease: [0.20, 0, 0.13, 1] }} }
              >
              <video
                style={{width: "40vw"}}
                muted
                autoplay=""
                loop
                src={p5jsVid}
                >
              </video>
              <motion.div
                className="project-info"
                initial={ {y: window.innerHeight/2} }
                animate={ {y: 0, transition: { delay: 0.2, duration: 1, ease: [0.20, 0, 0.13, 1] }} }
                exit={ {y: window.innerHeight/2, transition: { duration: 0.5, ease: [0.20, 0, 0.13, 1] }} }
                >
                  An online gallery showcasing looping animations made with p5.js, a JavaScript library focussed on creative coding. These images use nested loops and math to create soothing, meditative visuals.
                  <br /><br /><em>2024</em>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <div
        className="infoText"
        style={{left: mousePos.x, top: mousePos.y, display: showChess}}
        >
          <h2>2024</h2>

      </div>

      <div
        className="infoText"
        style={{left: mousePos.x, top: mousePos.y, display: showBT}}
        >
          <h2>2024</h2>
      </div>

      <div
        className="infoText"
        style={{left: mousePos.x, top: mousePos.y, display: showP5js}}
        >
          <h2>2024</h2>
      </div>


      <div className="contact">
        <a href="https://github.com/btillek" target="_blank" rel="noreferrer">Github</a>
        <a href="https://linkedin.com/in/boytillekens" target="_blank" rel="noreferrer">Linkedin</a>
        <a href="mailto:boytillekens@gmail.com" target="_blank" rel="noreferrer">Contact</a>
      </div>

    </div>
  );
}

export default App;
