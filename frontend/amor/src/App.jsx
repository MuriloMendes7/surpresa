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
import romanticAudio from './assets/audio/s2.mp3';

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
    const startAudio = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setHasInteracted(true);
            removeListeners();
          })
          .catch(err => console.log("Aguardando interação válida...", err));
      }
    };

    const removeListeners = () => {
      window.removeEventListener('scroll', startAudio);
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
    };

    window.addEventListener('scroll', startAudio);
    window.addEventListener('click', startAudio);
    window.addEventListener('touchstart', startAudio);

    return () => removeListeners();
  }, [hasInteracted]);

  return (
    <div className="container">
      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        loop 
        src={romanticAudio} 
      />

      <section className="hero">
        <h1 className="fade-in">fiz um site pra vc!</h1>
        <p className="fade-in delay">desce a página, tem uma coisa depois do video no final...</p>
      </section>

      {MEMORIES.map((memory) => (
        <MemoryItem key={memory.id} memory={memory} />
      ))}

      <VideoSection 
        videoSrc={romanticVideo} 
      />

      <p className="note-text">escrevi isso pra vc</p>

      <LetterSection />

      <section className="footer">
        <h2>Amo você princesa!</h2>
        <p className="sub-footer">ainda sou apaixonado nos seus olhinhos</p>
      </section>
    </div>
  );
}

function LetterSection() {
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
      className={`letter-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="letter-paper">
        <div className="letter-content">
          <p className="letter-text">
            Primeiro d tudo queria pedir perdao, pq nao valorizei seu amor, seu cuidado e sua persistência por nós, e por tudo oq rolou pós término, queria mesmo apagar tudo oq rolou
            <br /><br />
            Queria dizer que você foi a melhor pessoa que eu ja conheci na minha vida, a mais amorosa, carinhosa, inteligente e linda, uma mulher extremamente abençoada por Deus, que eu amo desde o dia que eu conheci
            <br /><br />
            Tudo oq vivi com vc desde 31/01/2022 (qnd vc entrou na escola) foi maravilhoso, sempre me senti muito amado e cuidado com vc
            <br /><br />
            Quero agradecer por tudo oq vc ja fez por nós, mesmo nos seus momentos mais difíceis vc colocou nosso relacionamento como prioridade
            <br /><br />
            Eu sei que sou insistente grudento e chato, mas tudo isso é pq eu quero vc, e sempre foi vc, desculpa nao respeitar o tempo que vc pediu, so nao quero perder vc tao facil, pq da mesma forma q vc nao desistiu d mim eu nao quero desistir d vc.
            <br /><br />
            Vc ta nas minhas orações de todos os dias, penso em vc desde q acordo e ate a hora q vou dormir, e em tudo oq a gnt ja viveu
            <br /><br />
            Sinto saudade da sua risada, do seu cheirinho, do seu abraço, e o principal, dos seus olhinhos que é a minha parte preferida em vc, que eu quero q meus filhos tenham os mesmos olhinhos q vc, saudade de ser seu namorado…
            <br /><br />
            Sei que no momento vc ta extremamente chateada, e nao quer olhar na minha cara, mas, queria muito um voto d confiança seu pra te fazer a mulher mais feliz do mundo de novo
            <br /><br />
            Eu amo você larissa, amo do fundo do meu coração.
            <br /><br />
            vou deixar vc em paz um pouco eu prometo, mas não esquece da gente… 
            <br /><br />
            Fica com Deus lari mendes! Vc sempre vai ser o meu sonho💘
          </p>
        </div>
      </div>
    </section>
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
        <p className="polaroid-hint">clique ou toque na foto e aumente o volume...</p>
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
