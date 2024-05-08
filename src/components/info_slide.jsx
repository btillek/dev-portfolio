import { motion, AnimatePresence } from 'framer-motion'
import './info_slide.css'

export default function InfoSlide({showInfo, projects}) {

  return (
    <>
      {projects.map((project) => {
        return (
          <AnimatePresence>
            {!showInfo ? null : (
              showInfo === project.project && (
                <motion.div
                  className="images"
                  initial={ {x: window.innerWidth/2} }
                  animate={ {x: 0, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] }} }
                  exit={ {x: window.innerWidth/2, transition: { duration: 1, ease: [0.20, 0, 0.13, 1] }} }
                  >
                    <video
                    style={{width: "40vw", maxHeight: "40vh"}}
                    muted
                    autoplay=""
                    loop
                    src={project.video}
                    >
                  </video>
                  <motion.div
                    className="project-info"
                    initial={ {y: window.innerHeight/2} }
                    animate={ {y: 0, transition: { delay: 0.2, duration: 1, ease: [0.20, 0, 0.13, 1] }} }
                    exit={ {y: window.innerHeight/2, transition: { duration: 0.5, ease: [0.20, 0, 0.13, 1] }} }
                    >
                    {project.description}
                    <br /><br /><em>{project.year}</em>
                  </motion.div>
                </motion.div>
                )
              )
            }
          </AnimatePresence>
        )
      })}
    </>
  )
}
