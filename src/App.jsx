import { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
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
        x: e.clientX + 10,
        y: e.clientY - 30
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
              BT Studio
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

        {/* <div className="images">
          <img src={ChessImg} alt="chess nexus" />
        </div> */}

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
          <h2>→ Portfolio website showcasing the animated works of BT Studio<em>, 2024</em></h2>
      </div>

      <div
        className="infoText"
        style={{left: mousePos.x, top: mousePos.y, display: showP5}}
        >
          <h2>→ A page showing images created using p5.js<em>, 2024</em></h2>
      </div>

      <div className="contact">
        <a href="https://github.com/btillek" target="_blank" rel="noreferrer">Github</a>
        <a href="https://linkedin.com/in/boytillekens" target="_blank" rel="noreferrer">Linkedin</a>
        <a href="mailto:boytillekens@gmail.com" target="_blank" rel="noreferrer">Contact</a>
      </div>

      {/* <motion.div
        className="infoText"
        style={showChess}
        variants={variants}
        animate="default"
        >
          Realtime multiplayer chess app, built at the Le Wagon Web Development bootcamp, 2024
      </motion.div>

      <motion.div
        className="infoText"
        style={showBT}
        variants={variants}
        animate="default"
        >
          Portfolio website for animation studio, 2024
      </motion.div> */}

    </div>
  );
}

export default App;
