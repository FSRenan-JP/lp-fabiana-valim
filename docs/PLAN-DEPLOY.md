# PLAN.md: Orquestração de Deploy (GitHub + Vercel)

## Visão Geral
O objetivo desta tarefa é versionar com segurança todas as alterações recentes (inclusão do novo logo e ajustes de CSS/HTML) no GitHub e disparar um novo deploy na Vercel para colocar a nova versão da Landing Page no ar.

## Agentes Envolvidos na Orquestração

1. **`test-engineer`**: Garantir que o código fonte (HTML/CSS) não possui erros crônicos antes de ser enviado para produção.
2. **`security-auditor`**: Verificar se nenhum arquivo sensível ou chave de acesso está sendo "vazado" inadvertidamente no commit para um repositório público.
3. **`devops-engineer`**: Responsável pela execução dos comandos de Git (add, commit, push) e pelo monitoramento do disparo de build automático na Vercel.

## Fases da Implementação (Pós-Aprovação)

### 1. Auditoria e Linting Pré-Deploy (Test & Security)
- Verificação do `.gitignore` para confirmar arquivos não rastreados.
- Validação rápida de status de arquivos (verificar arquivos novos, modificados e se há algum "lixo" a ser ignorado).

### 2. Versionamento (DevOps)
- `git add .` para empacotar o novo `logo.jpg`, a exclusão do logo antigo e os ajustes em `index.html` e `styles.css`.
- `git commit -m "feat: integrar novo logo vetorizado e atualizar contatos"`
- `git push origin main` (ou branch principal).

### 3. Deploy (Vercel)
- Como a Vercel tem CI/CD conectado ao repositório GitHub (`FSRenan-JP/lp-fabiana-valim`), o `git push` disparará automaticamente o processo de build.
- Acompanharemos o retorno da Vercel para confirmar o status da publicação (Production Build).

## 🔴 Checkpoint de Aprovação
O plano de versionamento e deploy detalhado acima está aprovado? Posso rodar os comandos no seu terminal?

---
**Status da Fase 1:** Concluída (Planejamento).
Aguardando aprovação (Y/N) para enviar as mudanças para a nuvem.
