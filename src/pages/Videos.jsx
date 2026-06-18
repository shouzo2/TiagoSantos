import React, { useState } from 'react'
import Lightbox from '../components/Lightbox'


const Work = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
  {
    title: 'Coming Soon',
    description: 'New portfolio projects are currently being added.'
  }
]

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="work-page">
      <h1 className="lg-heading">
        My <span className="text-secondary">Videos</span>
      </h1>
      <h2 className="sm-heading">Coming up soon</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item"
            onClick={() => openLightbox(index)}
          >
            <div className="project-image-wrapper">
              <video
                src={project.src}
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }}
              />
              <div className="project-overlay">
                <i className="fas fa-eye"></i>
                <span className="project-title">{project.title}</span>
              </div>
            </div>
            <div className="project-footer-link">
              <i className="fas fa-eye"></i> View {project.title}
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        images={projects}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  )

  
  

}

export default Work
