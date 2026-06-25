# PLAN.md: Integração do Novo Logo - Fabiane Valim

## Visão Geral
O objetivo desta tarefa é substituir o antigo "logo em texto" pelo novo logotipo oficial (dourado e preto) da Fabiane Valim, além de refinar a paleta de cores e o layout do site para garantir total harmonia com a nova identidade visual.

## Agentes Envolvidos na Orquestração

1. **`ui-ux-pro-max`**: Focado em analisar o design do logo (Preto Premium e Dourado) e mapear quais elementos da interface precisam de ajustes (ex: Navbar, cores de botões, sombras).
2. **`frontend-specialist`**: Responsável por editar o arquivo `index.html` (inserir a tag `<img>` no lugar do texto) e o `styles.css` (ajustar os tokens de cor, tamanho e alinhamento do logo na navbar e no footer).
3. **`performance-optimizer`**: Garantir que a imagem do logo (`logo-fv.jpg`) seja carregada de forma otimizada (ex: bordas arredondadas via CSS, lazy loading no rodapé, etc).

## Fases da Implementação (Pós-Aprovação)

### 1. Ajustes de UI/UX (Agente: UI-UX)
- A navbar atual é "flutuante" e tem o texto "Fabiane Valim" com efeito de vidro (`backdrop-filter`).
- Vamos substituir o texto pela imagem `logo-fv.jpg`, arredondando as bordas para manter o formato circular do logo.

### 2. Implementação Frontend (Agente: Frontend)
- No `index.html`: Substituir `<a href="#home" class="logo-link">Fabiane Valim</a>` por:
  ```html
  <a href="#home" class="logo-link">
      <img src="logo-fv.jpg" alt="Logo Fabiane Valim" class="logo-img">
  </a>
  ```
- No `styles.css`: Adicionar a classe `.logo-img` com `width: 50px`, `height: 50px`, `border-radius: 50%` e remover o background "vidro" apenas se conflitar com o fundo preto do logo.

### 3. Ajuste de Cores Globais
- Os tokens `--clr-bg-premium`, `--clr-gold-dark` e `--clr-gold-light` já existem no CSS e combinam perfeitamente com o logo! O frontend-specialist fará uma revisão fina para garantir que nenhum elemento da página destoe do "Preto e Dourado".

## 🔴 Checkpoint de Aprovação
O plano acima atende a sua expectativa para a integração do novo logo no site?

---
**Status da Fase 1:** Concluída (Planejamento).
Aguardando aprovação (Y/N) para iniciar a edição dos arquivos (Fase 2).
