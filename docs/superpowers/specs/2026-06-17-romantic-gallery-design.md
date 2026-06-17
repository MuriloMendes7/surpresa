# Design: Romantic Scroll Gallery ("Amor")

Um projeto web romântico e imersivo para exibir fotos e textos com efeitos de profundidade (parallax) e trilha sonora automática ao interagir com a página.

## 1. Experiência do Usuário (UX)
- **Gatilho Inicial:** A música começa a tocar assim que o usuário realiza o primeiro movimento de scroll.
- **Navegação:** Scroll vertical contínuo.
- **Visual:** Fundo escuro (estilo noturno), elementos surgindo com fade-in e movendo-se em velocidades diferentes para criar profundidade.

## 2. Arquitetura Técnica
- **Framework:** React (Vite).
- **Estilização:** CSS Vanilla (com foco em Flexbox/Grid e propriedades de transformação).
- **Animações:** 
  - `Intersection Observer API` para detectar a entrada de elementos na tela e disparar transições.
  - Efeito Parallax manual via variáveis CSS e eventos de scroll ou `background-attachment`.
- **Áudio:** Elemento HTML5 `<audio>` controlado via React `useRef` e disparado pelo primeiro evento de scroll.

## 3. Componentes Principais
- `HeroSection`: Introdução visual com uma mensagem inicial de boas-vindas.
- `MemorySection`: Componente reutilizável que recebe uma imagem, um texto e uma "velocidade" de parallax.
- `AudioPlayer`: Componente invisível que gerencia a trilha sonora.
- `BackgroundEffect`: Camada de fundo com efeitos sutis (estrelas/luzes) que se movem lentamente.

## 4. Estrutura de Dados
As fotos e textos serão organizados em um array de objetos para facilitar a manutenção:
```javascript
const memories = [
  { id: 1, photo: 'caminho/foto1.jpg', text: 'Onde tudo começou...', speed: 0.2 },
  { id: 2, photo: 'caminho/foto2.jpg', text: 'Nossa primeira viagem.', speed: 0.5 },
];
```

## 5. Plano de Validação
- Testar o gatilho de áudio em diferentes navegadores (Chrome, Safari, Firefox).
- Verificar a performance do scroll com múltiplas imagens.
- Garantir a responsividade para visualização no celular.
