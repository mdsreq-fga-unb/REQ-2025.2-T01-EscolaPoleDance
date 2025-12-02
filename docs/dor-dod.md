# DoR e DoD

## Definition of Ready (DoR)

| Requisito | Possui User Story? | Possui critérios de aceitação claramente definidos? | Todas as dependências do requisito foram identificadas? |
|------------|--------------------|----------------------------------------------------|----------------------------------------------------------|
| RF01-Cadastrar novo usuário | ✅ | ✅ | ✅ |
| RF02-Realizar login | ✅ | ✅ | ✅ |
| RF03-Realizar logout | ✅ | ✅ | ✅ |
| RF04-Comprar pacotes de aulas | ✅ | ✅ | ✅ |
| RF05-Pagar aula experimental | ✅ | ✅ | ✅ |
| RF06-Agendar aulas | ✅ | ✅ | ✅ |
| RF07-Visualizar pacotes de aulas disponíveis | ✅ | ✅ | ✅ |
| RF08-Consultar cronograma de aulas agendadas | ✅ | ✅ | ✅ |
| RF09-Confirmar ausência da aula antecipadamente (Aluna) | ✅ | ✅ | ✅ |
| RF10-Cadastrar novo pacote de aulas | ✅ | ✅ | ✅ |
| RF11-Editar pacote de aulas | ✅ | ✅ | ✅ |
| RF12-Excluir pacote de aulas | ✅ | ✅ | ✅ |
| RF13-Editar status de presença (Professora) | ✅ | ✅ | ✅ |
| RF14-Registrar presença após aula | ✅ | ✅ | ✅ |
| RF15-Registrar aulas no calendário | ✅ | ✅ | ✅ |
| RF16-Editar aulas no calendário | ✅ | ✅ | ✅ |
| RF17-Excluir aulas no calendário  | ✅ | ✅ | ✅ |
| RF18-Agendar aula experimental | ✅ | ✅ | ✅ |
| RF19-Registrar resultado da avaliação | ✅ | ✅ | ✅ |
| RF20-Definir plano da aluna  | ✅ | ✅ | ✅ |

---

### Critérios de aceitação e dependências

- RF01 Cadastrar novo usuário:
    - CA01: Modelo de “Usuário” criado no banco de dados.
    - CA02: Regras de validação definidas (nome, e-mail único, senha mínima, etc.).
    - DEP: Nenhuma.
- RF02 Realizar login:
    - CA01: Rota de autenticação (backend) implementada.
    - CA02: Regras de erro definidas (senha incorreta, usuário inexistente).
    - DEP: Nenhuma.
- RF03 Realizar logout:
    - CA01: Sessão de usuário definida no backend.
    - DEP: RF02 (realizar login).
- RF04 Comprar pacotes de aulas:
    - CA01: Pacotes cadastrados no BD
    - DEP: RF07 (visualizar pacotes corretos); RF11 (cadastrar novo pacote de aulas)
- RF05 Pagar aula experimental:
    - CA01: Valor da aula experimental definido.
    - DEP: RF18 (agendar aula experimental)
- RF06 Agendar aulas:
    - CA01: Regras de agendamento definidas (capacidade, níveis, horários).
    - DEP: RF16 (registrar aulas no calendário)
- RF07-Visualizar pacotes de aulas disponíveis
    - CA01: Pacotes definidos de acordo com os planos (A/B).
    - DEP: RF21 (definir plano da aluna)
- RF08 Consultar cronograma de aulas:
    - CA01: Endpoint para listar aulas agendadas implementado.
    - DEP: RF06 (agendar aulas).
- RF09 Confirmar ausência antecipadamente (Aluna):
    - CA01: Status “Confirmado” para “Não confirmado” atualizado no BD.
    - DEP: RF06 (agendar aulas).
- RF10 Cadastrar novo pacote de aulas:
    - CA01: Estrutura básica de permissão de usuário (Professora) definida.
    - DEP: Nenhuma.
- RF11 Editar pacote de aulas:
    - CA01: Endpoints de atualização implementados.
    - DEP: RF10 (cadastrar novo pacote de aulas).
- RF12 Excluir pacote de aulas:
    - CA01: Endpoint de exclusão implementado.
    - DEP: RF10 (cadastrar novo pacote de aulas).
- RF13 Editar status de presença:
    - CA01: Backend aceita os valores (Confirmado, Não confirmado, Presente, Ausente).
    - DEP: RF06 (agendar aulas)
- RF14 Registrar presença após aula:
    - CA01: Lista de alunas para aula específica disponível para a professora/administradora.
    - DEP: RF06 (agendar aulas)
- RF15 Registrar aulas no calendário:
    - CA01: Modelo de Aula criado no BD.
    - DEP: Nenhuma.
- RF16 Editar aulas no calendário:
    - CA01: Endpoints de atualização implementados.
    - DEP: RF16 (registrar aulas no calendário)
- RF17 Excluir aulas no calendário:
    - CA01: Endpoint de exclusão implementado.
    - DEP: RF16 (registrar aulas no calendário)
- RF18 Agendar aula experimental:
    - CA01: Disponibilidade de horários para experimental definida.
    - DEP: Nenhuma
- RF19 Registrar resultado da avaliação:
    - CA01: Dados da avaliação salvos no BD (nível, feedback etc.).
    - DEP: RF18 (agendar aula experimental)
- RF20 Definir plano da aluna:
    - CA01: Plano (A/B) salvo corretamente no banco.
    - DEP: RF19 (registrar resultado da avaliação).


## Definition of Done (DoD)

| Requisito | Foi totalmente implementado e atende aos critérios de aceitação definidos? | Foi testado e validado? | A documentação e as evidências de entrega foram atualizadas e revisadas pela equipe? |
|------------|------------------------------------------------------------------------------|--------------------------|--------------------------------------------------------------------------------------|
| RF01-Cadastrar novo usuário | ✅ | ✅ |  |
| RF02-Realizar login | ✅ | ✅ |  |
| RF03-Realizar logout |  |  |  |
| RF04-Comprar pacotes de aulas |  |  |  |
| RF05-Pagar aula experimental |  |  |  |
| RF06-Agendar aulas |  |  |  |
| RF07-Visualizar pacotes de aulas disponíveis |  |  |  |
| RF08-Consultar cronograma de aulas agendadas |  |  |  |
| RF09-Confirmar ausência da aula antecipadamente (Aluna) |  |  |  |
| RF10-Cadastrar novo pacote de aulas |  |  |  |
| RF11-Editar pacote de aulas |  |  |  |
| RF12-Excluir pacote de aulas |  |  |  |
| RF13-Editar status de presença (Professora) |  |  |  |
| RF14-Registrar presença após aula |  |  |  |
| RF15-Registrar aulas no calendário |  |  |  |
| RF16-Editar aulas no calendário |  |  |  |
| RF17-Excluir aulas no calendário  |  |  |  |
| RF18-Agendar aula experimental |  |  |  |
| RF19-Registrar resultado da avaliação |  |  |  |
| RF20-Definir plano da aluna  |  |  |  |
