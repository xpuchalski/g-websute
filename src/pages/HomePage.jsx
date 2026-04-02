import { useEffect, useState } from 'react'
import secretImage from '../assets/secret.jpg'
import artfight2 from '../assets/Art Fight 2025/artfight 2.png'
import tieflingMonk from '../assets/Character Designs/March 2026 tieflingMonk.png'
import alien from '../assets/Character Designs/Febuary 2026 Alien.png'
import statue from '../assets/Full Pieces/January 2026 Statue.png'
import amadeus from '../assets/Full Pieces/March 2026 Amadeus.png'

export default function HomePage() {
  const slides = [
    { src: artfight2, alt: 'Artfight 2' },
    { src: tieflingMonk, alt: 'March 2026 tieflingMonk' },
    { src: alien, alt: 'Febuary 2026 Alien' },
    { src: statue, alt: 'January 2026 Statue' },
    { src: amadeus, alt: 'March 2026 Amadeus' },
  ]

  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((current) => (current + 1) % slides.length)
    }, 2600)

    return () => window.clearInterval(intervalId)
  }, [slides.length])

  return (
    <>
      <img src="/dist/assets/the wall-402NISME.webp" alt="Artwork" height="200px" width="100%" style={{ objectFit: "cover", objectPosition: "top center" }}></img>
      <div className="page home-page">
        <p className="eyebrow">Art Portfolio</p>
        <h2>George Puchalski</h2>
        <p>
          My name is George Puchalski. I've been doing art for most of my life as a hobby and now as a small business. I'm passionate about each piece I create and work fast. My drive for improving is strong as I always try something different with each piece to test out new abilities and ideas.
        </p><br></br>
        <p>
          Not only do I draw, but I also dabble in writing novels or short stories. Currently I am working on a long time project I've named "Hollow Obession" which is a horror/thriller story between a cop and a criminal who is far from normal. Horror has always been my favorite genre and film itself is another one of my interests. From how a scene is framed to the soundtrack that makes the atmosphere, I love it all and hope to translate it into my writing and art.
        </p>

        <div className="secret-area">
          <span className="secret-coordinates" style={{color: "#12181b"}}>43.6532, -79.3832</span>
          <img className="secret-reveal" src={secretImage} alt="Secret reveal" />
        </div>
      </div>

      <div className="home-slideshow" aria-label="Featured rotating artworks">
        <img
          className="home-slideshow-image"
          src={slides[activeSlideIndex].src}
          alt={slides[activeSlideIndex].alt}
        />
        <p className="home-slideshow-caption">{slides[activeSlideIndex].alt}</p>
      </div>
    </>
  )
}
