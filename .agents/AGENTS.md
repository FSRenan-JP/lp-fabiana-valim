<RULE[memory_enforcement]>
# Sistema de Memória Contínua (Regra do Repositório)

**Obrigatório**: Todo agente que operar neste repositório DEVE, impreterivelmente:
1. **No Início da Sessão**: Ler o arquivo `.agent/memory/MEMORY.md` e os links lá contidos (como `project-context.md` e `activity-log.md`) antes de iniciar qualquer alteração, para herdar todo o histórico e contexto técnico da aplicação.
2. **Ao Final de Cada Interação**: Atualizar ativamente o arquivo `.agent/memory/activity-log.md`, documentando com clareza quais arquivos foram criados, bugs resolvidos ou decisões de layout que foram tomadas na sessão atual. 

Nunca ignore esta rotina de atualização. A memória do projeto é o que garante a consistência do código ao longo das manutenções.
</RULE[memory_enforcement]>
