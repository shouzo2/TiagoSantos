import React, { useEffect } from 'react'

const Lightbox = ({ isOpen, images, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    // Disable body scrolling when modal is open
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen || !images || images.length === 0) return null

  const currentImage = images[currentIndex]
  const imageSrc = typeof currentImage === 'object' ? currentImage.src : currentImage
  const imageTitle = typeof currentImage === 'object' ? currentImage.title : ''

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('lightbox-modal')) {
      onClose()
    }
  }

  return (
    <div className="lightbox-modal" onClick={handleBackdropClick}>
      <button className="lightbox-btn close-btn" onClick={onClose} aria-label="Close lightbox">
        <i className="fas fa-times"></i>
      </button>

      {images.length > 1 && (
        <>
          <button className="lightbox-btn prev-btn" onClick={onPrev} aria-label="Previous image">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="lightbox-btn next-btn" onClick={onNext} aria-label="Next image">
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}

      <div className="lightbox-content">
        <img src={imageSrc} alt={imageTitle || 'Portfolio Work'} className="lightbox-image" />
        {imageTitle && <div className="lightbox-caption">{imageTitle}</div>}
      </div>
    </div>
  )
}

export default Lightbox
