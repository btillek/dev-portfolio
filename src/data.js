import ChessVid from './imgs/chess.mp4'
import BTVid from './imgs/btstudio.mp4'
import p5jsVid from './imgs/p5js.mp4'

export const PROJECTS = [
  {
    title: "Chess Nexus",
    project: "chess",
    url: "https://chess-bro-6b451ee7b4b4.herokuapp.com/",
    description: "Multiplayer chess app developed at the Le Wagon web development bootcamp. Utilizing websockets to create a matchmaking system that allows for realtime 1v1 multiplayer matches, live chat, and user authentication. Done in collaboration with Andrea Basili",
    year: "2024",
    video: ChessVid
  },
  {
    title: "BTStudio",
    project: "btstudio",
    url: "https://btillek.github.io/bt-studio/",
    description: "A portfolio website for animation studio BTStudio, using moving layers to create visual depth, much like the work BTStudio creates.",
    year: 2024,
    video: BTVid
  },
  {
    title: "p5.js Explorations",
    project: "p5js",
    url: "https://btillek.github.io/p5js-explorations/",
    description: "An online gallery showcasing looping animations made with p5.js, a JavaScript library focussed on creative coding. These images use nested loops and math to create soothing, meditative visuals.",
    year: 2024,
    video: p5jsVid
  }
]
