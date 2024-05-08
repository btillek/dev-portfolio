import { motion, AnimatePresence } from 'framer-motion'

import './mouse_hover.css'

export default function MouseOver({mousePos, showInfo, projects}) {

  return (
    <>
      {projects.map((project) => {
        return (
          <AnimatePresence>
            {showInfo === project.project && (
            <motion.div className="infoText"
              style={{left: mousePos.x, top: mousePos.y}}
              initial={ {scale: 0, originX: 0} }
              animate={ {scale: 1, transition: { duration: 0.5, ease: [0.20, 0, 0.13, 1] }} }
              exit={ {scale: 0, originX: 0, transition: { duration: 0.3, ease: [0.20, 0, 0.13, 1] }} }
              >
                <h2>{project.year}</h2>
            </motion.div>

            )}
          </AnimatePresence>
          )
          }
        )
      }
    </>
  )
}
