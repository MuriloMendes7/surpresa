# Implementation Plan: Romantic Scroll Gallery ("Amor")

Este plano detalha as etapas para transformar o template padrão do Vite em uma galeria romântica imersiva com parallax e música.

## Fase 1: Limpeza e Preparação
- [ ] Remover código padrão do Vite em `App.jsx` e `App.css`.
- [ ] Configurar o tema escuro base em `index.css`.
- [ ] Criar pastas para assets: `src/assets/photos` e `src/assets/audio`.
- [ ] Adicionar placeholders (fotos e uma música de teste).

## Fase 2: Componentes de Sistema
- [ ] **Background**: Criar um fundo de "estrelas" ou luzes suaves usando CSS animado.
- [ ] **AudioPlayer**: Lógica para tocar a música no primeiro scroll (usando `useRef` e evento de window).
- [ ] **Intersection Observer Hook**: Criar um hook customizado `useElementOnScreen` para gerenciar as animações de entrada.

## Fase 3: Desenvolvimento da Galeria
- [ ] **HeroSection**: Tela inicial com o título do projeto e uma dica de "role para baixo".
- [ ] **MemorySection**: Componente para cada foto + texto.
  - Implementar o efeito de parallax manual (calculando o deslocamento baseado no scroll).
  - Aplicar animações de fade-in e slide-up quando visível.
- [ ] **Main Layout**: Estruturar o `App.jsx` para iterar sobre um array de memórias.

## Fase 4: Polimento e Estilo
- [ ] Refinar as curvas de animação para ficarem "suaves".
- [ ] Garantir que o layout funcione perfeitamente em dispositivos móveis (fotos centralizadas e textos legíveis).
- [ ] Adicionar um efeito de "fim" com uma mensagem carinhosa.

## Fase 5: Validação
- [ ] Testar o gatilho de áudio em navegadores mobile (onde o autoplay é mais restrito).
- [ ] Verificar a performance do efeito parallax.
