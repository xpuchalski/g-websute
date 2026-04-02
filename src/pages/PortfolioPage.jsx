import { useEffect, useState } from 'react'

export default function PortfolioPage({ categories }) {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (categoryIndex, imageIndex) => {
    setLightbox({ categoryIndex, imageIndex })
  }

  const closeLightbox = () => setLightbox(null)

  const goPrev = () => {
    if (!lightbox) return
    const images = categories[lightbox.categoryIndex].images
    setLightbox({
      ...lightbox,
      imageIndex: (lightbox.imageIndex - 1 + images.length) % images.length,
    })
  }

  const goNext = () => {
    if (!lightbox) return
    const images = categories[lightbox.categoryIndex].images
    setLightbox({
      ...lightbox,
      imageIndex: (lightbox.imageIndex + 1) % images.length,
    })
  }

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!lightbox) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightbox])

  const activeImage =
    lightbox && categories[lightbox.categoryIndex]
      ? categories[lightbox.categoryIndex].images[lightbox.imageIndex]
      : null

  return (
    <div className="page">
      <h2>Portfolio</h2>

      {categories.length === 0 ? (
        <p className="empty-state">
          No images found yet. Add files to subfolders inside{' '}
          <code>src/assets/</code>, e.g. <code>src/assets/paintings/</code>.
        </p>
      ) : null}

      {categories.map((category, categoryIndex) => (
        <article key={category.id} id={category.id} className="category-section">
          <h3>{category.name}</h3>
          <div className="gallery-grid">
            {category.images.map((image, imageIndex) => (
              <div key={`${category.id}-${image.src}`} className="gallery-item">
                <button
                  className="image-button"
                  onClick={() => openLightbox(categoryIndex, imageIndex)}
                  aria-label={`Open ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </button>
                <p className="image-filename">{image.alt}</p>
              </div>
            ))}
          </div>
        </article>
      ))}

      {lightbox && activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button className="close-btn" onClick={closeLightbox} aria-label="Close">
            ×
          </button>
          <button className="nav-btn prev" onClick={goPrev} aria-label="Previous image">
            ‹
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="lightbox-image"
          />
          <button className="nav-btn next" onClick={goNext} aria-label="Next image">
            ›
          </button>
        </div>
      ) : null}
    </div>
  )
}
