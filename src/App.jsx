import { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import ChessVid from './imgs/chess-nexus.mp4'
import BTVid from './imgs/btstudio.mp4'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css';

function App() {

  const [showChess, setShowChess] = useState("none");
  const [showBT, setShowBT] = useState("none");
  const [showP5, setShowP5] = useState("none");

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  })

  // const [bgCol, setBgCol] = useState({
  //   r: 235,
  //   g: 233,
  //   b: 221
  // })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX + 20,
        y: e.clientY + 20
      })

      // setBgCol({
      //   r: e.clientX,
      //   g: e.clientY,
      //   b: e.clientX + e.clientY,
      // })
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
            href="https://btillek.github.io/portfolio-website/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={(e) => setShowP5("block")}
            onMouseLeave={(e) => setShowP5("none")}
            >
              p5.js Explorations
          </a>

        </div>

        <AnimatePresence>
          {showChess === "block" && (
            <motion.div
              className="images"
              initial={ {x: 350} }
              animate={ {x: 0, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] }} }
              exit={ {x: 350, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] }} }
              >
              <video
                controls
                muted
                autoplay=""
                loop
                src={ChessVid}
                >
            </video>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showBT === "block" && (
            <motion.div
              className="images"
              initial={ {x: window.innerWidth/2} }
              animate={ {x: 0, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] }} }
              exit={ {x: window.innerWidth/2, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] }} }
              >
              <video
                style={{width: "40vw"}}
                controls
                muted
                autoplay=""
                loop
                src={BTVid}
                >
            </video>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <div
        className="infoText"
        style={{left: mousePos.x, top: mousePos.y, display: showChess}}
        >
          <h2>→ Realtime multiplayer chess app developed during the Le Wagon web development bootcamp<em>, 2024</em></h2>
      </div>

      <div
        className="infoText"
        style={{left: mousePos.x, top: mousePos.y, display: showBT}}
        >
          <h2>→ Portfolio website for animation studio<em>, 2024</em></h2>
      </div>

      <div
        className="infoText"
        style={{left: mousePos.x, top: mousePos.y, display: showP5}}
        >
          <h2>→ Showcasing images created using p5.js<em>, 2024</em></h2>
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
