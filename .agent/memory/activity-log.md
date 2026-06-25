# Log de Atividades e Alterações (activity-log.md)

Este documento registra todas as alterações arquiteturais, correções de bugs, features implementadas e decisões tomadas no projeto, organizadas cronologicamente.

## [2026-06-25] - Integração do Google Meu Negócio e Refinamento de UX
**Objetivo da Sessão:** Otimizar a Landing Page para capturar tráfego vindo do Google Meu Negócio (GMN) recém-criado, e resolver débitos visuais críticos (logo e responsividade).

**Ações Executadas:**
1. **Auditoria GMN vs Landing Page:**
   - Realizamos uma orquestração para cruzar os dados da página HTML e da ficha do Google.
   - Detectamos um desalinhamento numérico: A LP apresentava `(43) 9605-3182` enquanto o Google mostrava `(43) 99605-3182`. Isso foi corrigido no `index.html`.
   - Alertamos a usuária para corrigir um erro crítico no painel do Google ("Não fala português") para garantir ranqueamento SEO.
2. **Integração do Novo Logotipo Dourado:**
   - Tentativa 1: O logo enviado (`logo-fv.jpg`) possuía um fundo quadriculado falso imitando transparência, o que conflitava visualmente com a navbar flutuante, além do CSS aplicar uma segunda borda desnecessária.
   - Resolução: Recebemos um logo em PNG 100% transparente processado via Photoroom (`logo.png`). Alteramos o HTML (`index.html`) para apontar para a nova extensão e adaptamos o CSS (`styles.css`), adicionando a classe `.logo-img` com as propriedades `border-radius: 50%` e `background-color: var(--clr-bg-premium)` para forçar o selo preto e criar contraste do logo dourado sobre seções de fundo claro do site.
3. **Fix de Responsividade no Hero (Mobile):**
   - Usuária reportou via screenshot que as palavras (badges "Pontualidade", "Confiança", etc.) estavam sobrepondo o rosto da cliente na versão mobile devido ao ancoramento da foto (fundo escuro).
   - Resolvemos ajustando o media query do mobile em `styles.css`: Aumentamos drasticamente o `padding-bottom` de `.hero-content` (de `120px` para `350px`). Isso esticou o contêiner e forçou a imagem de fundo ancorada (`center bottom`) para mais baixo, separando a tipografia do rosto da modelo com segurança.
4. **Setup de CI/CD (Deploy Pipeline):**
   - Versionamos todas as alterações com mensagens semânticas no Git e realizamos push para o repositório (`FSRenan-JP/lp-fabiana-valim`), ativando a Vercel para deploys automáticos em produção de forma bem-sucedida.
5. **Setup do Sistema de Memória (Memory System):**
   - Criamos o diretório `.agent/memory` com os arquivos `MEMORY.md`, `project-context.md` e `activity-log.md` a pedido da usuária, para manter o robô sempre contextualizado nas próximas sessões.

**Decisões Tomadas:**
- Decidimos que a logo será tratada como um elemento de "Selo" ou "Moeda Flutuante" e não um texto. Por isso, fundos estilo *glassmorphism* (pílula) foram removidos da navegação lateral.
- A comunicação com o cliente será feita estritamente no idioma Português (pt-BR) pelo Antigravity, de acordo com as Regras de Ouro.
