# Requisitos de Software

## Lista de Requisitos Funcionais

| ID   | Nome do requisito                              | Descrição do requisito |
|------|------------------------------------------------|-------------------------|
| RF01 | Cadastrar novo usuário                         | A aluna deve conseguir se cadastrar se for um usuário novo, em um campo onde informa dados como nome, e-mail e senha. |
| RF02 | Realizar login                                 | A aluna deve conseguir realizar o login se cadastrado, utilizando e-mail e senha. |
| RF03 | Realizar logout                                | A aluna deve conseguir realizar o logout, encerrando a sessão e redirecionando para a landing page. |
| RF04 | Comprar pacotes de aulas                       | A aluna deve conseguir comprar pacotes de aulas, exibindo opções disponíveis (ex.: pacote básico de 2 aulas semanais). |
| RF05 | Pagar aula experimental                        | A aluna deve conseguir pagar por uma aula experimental. |
| RF06 | Agendar aulas                                  | A aluna deve conseguir agendar aulas com base na disponibilidade do cronograma e no nível da turma. |
| RF07 | Visualizar pacotes de aulas disponíveis        | A aluna deve visualizar apenas os pacotes compatíveis com o plano atribuído à ela após a avaliação. |
| RF08 | Consultar cronograma de aulas agendadas        | A aluna deve conseguir consultar o cronograma individual de todas as aulas agendadas (histórico e futuras). |
| RF09 | Confirmar ausência da aula antecipadamente (Aluna) | A aluna deve conseguir confirmar ausência em uma aula agendada diretamente no painel do usuário (dashboard), com a opção disponível a qualquer momento antes do prazo de 12 horas antes do horário da aula. A confirmação deve atualizar o status da aluna de "Confirmado" para "Não confirmado". |
| RF10 | Cadastrar novo pacote de aulas                 | A professora/administradora deve conseguir cadastrar um novo pacote definindo nome, quantidade de aulas, frequência semanal e preço. |
| RF11 | Editar pacote de aulas                         | A professora/administradora deve conseguir editar os dados de um pacote existente. |
| RF12 | Excluir pacote de aulas                        | A professora/administradora deve conseguir excluir um pacote do catálogo. |
| RF13 | Editar status de presença (Professora)         | A professora deve conseguir editar manualmente o status de presença de qualquer aluna em uma aula específica, com opções de status: "Confirmado", "Não confirmado", "Ausente" ou "Presente". Essa edição deve ser acessível via painel administrativo da professora. |
| RF14 | Registrar presença após aula                   | Ao final de cada aula, a professora deve conseguir acessar uma seção dedicada à aula no site, exibindo uma lista de alunas agendadas com checkboxes de presença. Por padrão, todos os checkboxes devem estar ativados (indicando "Presente"), e a professora pode desmarcar os das alunas ausentes, atualizando o status para "Ausente". |
| RF15 | Registrar aulas no calendário                  | A professora/administradora deve conseguir registrar aulas no calendário. |
| RF16 | Editar aulas no calendário                     | A professora/administradora deve conseguir editar aulas no calendário. |
| RF17 | Excluir aulas no calendário                    | A professora/administradora deve conseguir excluir aulas no calendário. |
| RF18 | Agendar aula experimental                      | Novas alunas deve conseguir agendar uma aula experimental. |
| RF19 | Registrar resultado da avaliação               | A professora/administradora deve conseguir registrar o resultado da avaliação da aula experimental da nova aluna. |
| RF20 | Definir plano da aluna                         | A professora/administradora deve conseguir definir o plano (A ou B) da nova aluna com base no resultado da avaliação. |


## Lista de Requisitos Não Funcionais

| ID    | Nome do Requisito | Descrição do requisito | Tipo de Requisito |
|-------|-------------------|-------------------------|--------------------|
| RNF01 | Implementar criptografia para a privacidade dos dados do usuário | Implementar criptografia de transporte (comunicação cliente-servidor) TLS 1.2 (ou superior) e, para as senhas de usuários, utilizar o algoritmo de hashing bcrypt com um fator de custo mínimo de 12. | Security |
| RNF02 | Assegurar conformidade com a Lei Geral de Proteção de Dados (LGPD) | O sistema deve garantir a conformidade com as exigências da LGPD, especialmente nos seguintes pontos: Consentimento (Art. 7º, I) no cadastro; Finalidade (Art. 6º, I); Segurança dos Dados (Art. 46); e Direito de Acesso e Exclusão (Art. 18, II e IV). | Externo: legal |
| RNF03 | Assegurar responsividade do site em diferentes dispositivos | O design e a interface do usuário devem assegurar a responsividade para dispositivos móveis (com largura de 360px a 767px, como smartphones de 5 a 6.7 polegadas) e desktop (larguras a partir de 1024px). | Usability |
| RNF04 | Garantir compatibilidade com os principais navegadores modernos (Chrome, Firefox, Edge, Safari) | O site deve funcionar plenamente nas versões mais recentes dos principais navegadores modernos (Google Chrome 142, Mozilla Firefox 145, Microsoft Edge 142 e Apple Safari 18.6). | Reliability |
| RNF05 | Garantir interface intuitiva e fácil de navegar | O sistema deve garantir uma interface intuitiva e fácil de navegar, utilizando como cor primária o roxo (#BC3FDE) e seguindo a paleta de cores “purple” do site shadcn, baseando-se na identidade visual da escola. A fonte padrão adotada é a montserrat com tamanho mínimo 14. | Usability |
| RNF06 | Garantir carregamento rápido e navegação fluida do frontend | Garantir um tempo de carregamento inicial inferior a 3 segundos e um tempo de resposta do servidor (TTFB - Time to First Byte) inferior a 400ms para 90% das requisições | Performance |
| RNF07 | Documentar padrões de desenvolvimento internos | A equipe deve documentar e seguir um padrão interno para as práticas de desenvolvimento registradas no arquivo “CODING_STYLE.md” no repositório do projeto (código, testes e infraestrutura). | Externo: Organizacional |
| RNF08 | Otimizar Motores de Busca (SEO) através de meta tags e palavras chaves (SEO On-Page) e SEO Off-Page | O sistema deve ser otimizado para motores de busca SEO, implementando SEO On-Page utilizando meta tags, cabeçalhos e atributos alt em imagens, com foco em palavras-chave relacionadas à escola e modalidade. Implementar também o SEO Off-Page através da criação e otimização de um Google Business Profile. | Performance |
| RNF09 | Implementar medidas de segurança contra abuso de vulnerabilidades como SQL Injection ou DNS Tunneling | O sistema deve implementar validação e sanitização de todas as entradas de usuário no backend usando parametrização de consultas para prevenir SQL Injection e configurar o sistema para mitigar DNS Tunneling através da criptografia de requisições DNS fornecida pelo TLS, além de aplicar políticas de segurança como CORS (Cross-Origin Resource Sharing) para filtrar os domínios externos dos quais o sistema receberá requisições. | Security |
| RNF10 | Disponibilizar espaço para tirar dúvidas sobre a modalidade | Disponibilizar um canal ou seção para tirar dúvidas frequentes sobre a modalidade, logística e funcionamento da escola (FAQ). | Usability |


---

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
| RF01-Cadastrar novo usuário |  |  |  |
| RF02-Realizar login |  |  |  |
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

