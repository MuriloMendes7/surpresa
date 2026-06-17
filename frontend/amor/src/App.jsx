import React, { useEffect, useRef, useState } from 'react';
import './App.css';

// Importando as fotos reais
import photo1 from './assets/photos/WhatsApp Image 2026-06-17 at 19.13.22 (1).jpeg';
import photo2 from './assets/photos/WhatsApp Image 2026-06-17 at 19.13.22.jpeg';
import photo3 from './assets/photos/WhatsApp Image 2026-06-17 at 19.13.23 (1).jpeg';
import photo4 from './assets/photos/WhatsApp Image 2026-06-17 at 19.13.23 (2).jpeg';
import photo5 from './assets/photos/WhatsApp Image 2026-06-17 at 19.13.23 (3).jpeg';
import photo6 from './assets/photos/WhatsApp Image 2026-06-17 at 19.13.23 (4).jpeg';
import photo7 from './assets/photos/WhatsApp Image 2026-06-17 at 19.13.23 (5).jpeg';
import photo8 from './assets/photos/WhatsApp Image 2026-06-17 at 19.13.23 (6).jpeg';
import photo9 from './assets/photos/WhatsApp Image 2026-06-17 at 19.13.23 (7).jpeg';
import photo10 from './assets/photos/WhatsApp Image 2026-06-17 at 19.13.23 (8).jpeg';

// Importando o vídeo real
import romanticVideo from './assets/video/WhatsApp Video 2026-06-17 at 19.13.24.mp4';

// Dados das Memórias
const MEMORIES = [
  { id: 1, text: "", image: photo1 },
  { id: 2, text: "", image: photo2 },
  { id: 3, text: "", image: photo3 },
  { id: 4, text: "", image: photo4 },
  { id: 5, text: "", image: photo5 },
  { id: 6, text: "", image: photo6 },
  { id: 7, text: "", image: photo7 },
  { id: 8, text: "", image: photo8 },
  { id: 9, text: "", image: photo9 },
  { id: 10, text: "", image: photo10 }
];

function App() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (audioRef.current) {
          audioRef.current.play().catch(err => console.log("Autoplay bloqueado", err));
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasInteracted]);

  return (
    <div className="container">
      {/* Audio Element - Certifique-se de colocar o mp3 em src/assets/audio/shot-for-me.mp3 */}
      <audio 
        ref={audioRef} 
        loop 
        src="/src/assets/audio/shot-for-me.mp3" 
      />

      <section className="hero">
        <h1 className="fade-in">fiz uma coisa pra vc...</h1>
        <p className="fade-in delay">desce a página...</p>
      </section>

      {MEMORIES.map((memory) => (
        <MemoryItem key={memory.id} memory={memory} />
      ))}

      <VideoSection 
        videoSrc={romanticVideo} 
      />

      <section className="footer">
        <h2>Amo você princesa! vc vai estar pra sempre no meu coração.</h2>
        <p className="sub-footer">ainda sou apaixonado nos seus olhinhos</p>
      </section>
    </div>
  );
}

function MemoryItem({ memory }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`memory-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="polaroid">
        <img src={memory.image} alt="Nossa memória" className="polaroid-img" />
      </div>
      <div className="content">
        <p className="memory-text">{memory.text}</p>
      </div>
    </section>
  );
}

function VideoSection({ videoSrc }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`video-section memory-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="video-container horizontal">
        <video controls className="romantic-video" src={videoSrc}>
          Seu navegador não suporta vídeos.
        </video>
      </div>
    </section>
  );
}

export default App;
