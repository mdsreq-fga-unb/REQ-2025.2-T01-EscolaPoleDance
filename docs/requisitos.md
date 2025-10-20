# Requisitos de Software

## Lista de Requisitos Funcionais

- **RF01** - Acessar conteúdo público  
- **RF02** - Acessar links para redes sociais da escola  
- **RF03** - Consultar horários e planos disponíveis  
- **RF04** - Disponibilizar espaço para tirar dúvidas sobre a modalidade  
- **RF05** - Cadastrar novo usuário  
- **RF06** - Realizar login  
- **RF07** - Realizar logout  
- **RF08** - Comprar pacotes de aulas com pagamentos online por meio do Mercado Pago  
- **RF09** - Pagar por uma aula experimental com pagamentos online por meio do Mercado Pago  
- **RF10** - Agendar aulas  
- **RF11** - Exibir pacotes de aulas disponíveis conforme plano definido  
- **RF12** - Consultar cronograma de aulas agendadas  
- **RF13** - Confirmar ausência da aula antecipadamente  
- **RF14** - Gerar link de confirmação de ausência  
- **RF15** - Acessar painel administrativo  
- **RF16** - Editar status de presença  
- **RF17** - Registrar presença após aula  
- **RF18** - Gerenciar pacotes de aulas  
- **RF19** - Gerenciar calendário de aulas  
- **RF20** - Agendar aula experimental  
- **RF21** - Registrar resultado da avaliação
- **RF22** - Definir plano da aluna 

### Detalhamento dos Requisitos Funcionais

| ID   | Nome do Requisito | Descrição |
|------|-----------------|-----------|
| RF01 | Acessar conteúdo público | O sistema deve permitir que visitantes anônimos acessem a landing page sem necessidade de autenticação, para fins de divulgação e atração de clientes. |
| RF02 | Acessar links para redes sociais da escola | Fornecer links diretos e acessíveis para as redes sociais da escola e da instrutora. | 
| RF03 | Consultar horários e planos disponíveis| Permitir à Aluna e Visitante consultar a grade completa de horários e os planos de aula disponíveis. |
| RF04 | Disponibilizar espaço para tirar dúvidas sobre a modalidade | Disponibilizar um canal ou seção para tirar dúvidas frequentes sobre a modalidade, logística e funcionamento da escola (FAQ). |
| RF05 | Cadastrar novo usuário  | O usuário deve conseguir se cadastrar se for um usuário novo, em um campo onde informa dados como nome, e-mail e senha. |
| RF06 | Realizar login | O usuário deve conseguir realizar o login se cadastrado, utilizando e-mail e senha. |
| RF07 | Realizar logout | O usuário deverá conseguir realizar o logout, encerrando a sessão e redirecionando para a landing page. |
| RF08 | Comprar pacotes de aulas com pagamentos online por meio do Mercado Pago | O usuário deve conseguir comprar pacotes de aulas, exibindo opções disponíveis (ex.: pacote básico de 2 aulas semanais). |
| RF09 | Pagar por uma aula experimental com pagamentos online por meio do Mercado Pago | O usuário deve conseguir pagar por uma aula experimental. |
| RF10 | Agendar aulas | Permitir à Aluna agendar e cancelar aulas com base na disponibilidade do cronograma e no nível da turma. |
| RF11 | Exibir pacotes de aulas disponíveis conforme plano definido | Exibir apenas os pacotes compatíveis com o plano atribuído à aluna após a avaliação. |
| RF12 | Consultar cronograma de aulas agendadas | Permitir à Aluna consultar o cronograma individual de todas as aulas agendadas (histórico e futuras). |
| RF13 | Confirmar ausência da aula antecipadamente (Aluna) | A aluna deve conseguir confirmar ausência em uma aula agendada diretamente no painel do usuário (dashboard), com a opção disponível a qualquer momento antes do prazo de 12 horas antes do horário da aula. A confirmação deve atualizar o status da aluna de "Confirmado" para "Não confirmado". |
| RF14 | Gerar link de confirmação de ausência | A professora deve conseguir criar e compartilhar um link único para uma página dedicada de confirmação de ausência para uma aula específica, onde a aluna pode confirmar ausência até 12 horas antes do horário (conforme RF13 existente). A página deve incluir um countdown, botão de confirmação, texto sobre regulamento e aviso de login obrigatório se a aluna não estiver autenticada. |
| RF15 | Acessar painel administrativo | Permitir à Professora/Administradora acessar e gerenciar o painel administrativo para controle do negócio. |
| RF16 | Editar status de presença (Professora) | A professora deve conseguir editar manualmente o status de presença de qualquer aluna em uma aula específica, com opções de status: "Confirmado", "Não confirmado", "Ausente" ou "Presente". Essa edição deve ser acessível via painel administrativo da professora. |
| RF17 | Registrar presença após aula | Ao final de cada aula, a professora deve conseguir acessar uma seção dedicada à aula no site, exibindo uma lista de alunas agendadas com checkboxes de presença. Por padrão, todos os checkboxes devem estar ativados (indicando "Presente"), e a professora pode desmarcar os das alunas ausentes, atualizando o status para "Ausente". |
| RF18 | Gerenciar pacotes de aulas | Administradores devem conseguir gerenciar pacotes de aulas (criar, editar, deletar), incluindo preços e descrições. |
| RF19 | Gerenciar calendário de aulas | Administradores devem conseguir gerenciar o calendário de aulas (adicionar, editar, cancelar aulas). |
| RF20 | Agendar aula experimental | Permitir que novas alunas agendem uma aula experimental. |
| RF21 | Registrar resultado da avaliação | Permitir que a professora registre o resultado da avaliação da aula experimental da nova aluna. |
| RF22 | Definir plano da aluna | Permitir que a professora defina o plano (A ou B) da nova aluna com base no resultado da avaliação. |

---

## Lista de Requisitos Não Funcionais

- **RNF01** - Implementar criptografia para a privacidade dos dados do usuário
- **RNF02** - Assegurar conformidade com a Lei Geral de Proteção de Dados (LGPD)
- **RNF03** - Assegurar responsividade do site em diferentes dispositivos  
- **RNF04** - Manter o sistema disponível 24/7 (com exceção de manutenções programadas) 
- **RNF05** - Garantir compatibilidade com os principais navegadores modernos (Chrome, Firefox, Edge, Safari) 
- **RNF06** - Garantir interface intuitiva e fácil de navegar  
- **RNF07** - Garantir carregamento rápido e navegação fluida do frontend
- **RNF08** - Documentar padrões de desenvolvimento internos  
- **RNF09** - Otimizar Motores de Busca (SEO) através de meta tags e palavras chaves (SEO On-Page) e SEO Off-Page  
- **RNF10** - Implementar medidas de segurança contra abuso de vulnerabilidades como SQL Injection ou DNS Tunneling
- **RNF11** - Exibir menu de navegação
- **RNF12** - Exibir landing page


### Detalhamento dos Requisitos Não Funcionais

| ID   | Nome do Requisito | Descrição |
|------|-----------------|-----------|
| RNF01 | Implementar criptografia para a privacidade dos dados do usuário | Implementar criptografia de transporte (comunicação cliente-servidor) TLS 1.2 (ou superior) e, para as senhas de usuários, utilizar o algoritmo de hashing bcrypt com um fator de custo mínimo de 12. |
| RNF02 | Assegurar conformidade com a Lei Geral de Proteção de Dados (LGPD) | O sistema deve garantir a conformidade com as exigências da LGPD, especialmente nos seguintes pontos: Consentimento (Art. 7º, I) no cadastro; Finalidade (Art. 6º, I); Segurança dos Dados (Art. 46); e Direito de Acesso e Exclusão (Art. 18, II e IV). |
| RNF03 | Assegurar responsividade do site em diferentes dispositivos | O design e a interface do usuário devem assegurar a responsividade para dispositivos móveis (com largura de 360px a 767px, como smartphones de 5 a 6.7 polegadas) e desktop (larguras a partir de 1024px). |
| RNF04 | Manter o sistema disponível 24/7 (com exceção de manutenções programadas) | Disponibilidade Mínima: 99,8% do tempo. Manutenção Programada: Período de manutenção semestral de até 4 horas, preferencialmente fora do horário comercial (ex: madrugada de domingo), para atualizações críticas de infraestrutura e informações ou estáticas da escola/planos. |
| RNF05 | Garantir compatibilidade com os principais navegadores modernos (Chrome, Firefox, Edge, Safari) | O site deve funcionar plenamente nas duas versões mais recentes dos principais navegadores modernos (Google Chrome, Mozilla Firefox, Microsoft Edge e Apple Safari). |
| RNF06 | Garantir interface intuitiva e fácil de navegar | O sistema deve garantir uma interface intuitiva e fácil de navegar, utilizando como cor primária o roxo (#9333ea) e seguindo a paleta de cores “purple” do site shadcn, baseando-se na identidade visual da escola. A fonte padrão adotada é a montserrat com tamanho mínimo 14. |
| RNF07 | Garantir carregamento rápido e navegação fluida do frontend | Garantir um tempo de carregamento inicial inferior a 3 segundos em conexões 3G e um tempo de resposta do servidor (TTFB - Time to First Byte) inferior a 400ms para 90% das requisições. |
| RNF08 | Documentar padrões de desenvolvimento internos | A equipe deve documentar e seguir um padrão interno para as práticas de desenvolvimento (código, testes, infraestrutura). |
| RNF09 | Otimizar Motores de Busca (SEO) através de meta tags e palavras chaves (SEO On-Page) e SEO Off-Page | O sistema deve ser otimizado para motores de busca SEO, implementando SEO On-Page utilizando meta tags, cabeçalhos e atributos alt em imagens, com foco em palavras-chave relacionadas à escola e modalidade. Implementar também o SEO Off-Page através da criação e otimização de um Google Business Profile. |
| RNF10 | Implementar medidas de segurança contra abuso de vulnerabilidades como SQL Injection ou DNS Tunneling | O sistema deve implementar validação e sanitização de todas as entradas de usuário no backend usando parametrização de consultas para prevenir SQL Injection e configurar o sistema para mitigar DNS Tunneling através da criptografia de requisições DNS fornecida pelo TLS, além de aplicar políticas de segurança como CORS (Cross-Origin Resource Sharing) para filtrar os domínios externos dos quais o sistema receberá requisições. |
| RNF11 | Exibir menu de navegação | O sistema deve fornecer um menu de navegação principal que inclua links para todas as páginas: Landing Page (inicial), Sobre, Pole Dance, Turmas e Horários, Valores, Regulamento, FAQ, além de Login/Cadastro. |
| RNF12 | Exibir landing page | O sistema deve exibir uma landing page inicial que apresente informações sobre a escola de pole dance, incluindo descrição dos serviços, depoimentos de alunos e chamadas para ação (CTAs) para cadastro ou login. |

# Listagem dos Requisitos Não Funcionais de acordo com o padrão URPS+ e com as categorias de Sommerville

## Requisitos de Produto 
Requisitos relacionados a categorização e contenção do comportamento do software. Divididos entre: requisitos de usabilidade, requisitos de eficiência (de desempenho e de espaço), requisitos de confiança e requisitos de proteção.

### Usabilidade (Usability)
Requisitos relacionados à facilidade de uso, aprendizado e design da interface.  
- **RNF03**: Assegurar responsividade do site em diferentes dispositivos.  
- **RNF06**: Garantir interface intuitiva e fácil de navegar.  
- **RNF11**: Exibir menu de navegação  
- **RNF12**: Exibir landing page  

### Eficiência (Sommerville) e Performance URPS+
Requisitos relacionados à velocidade, eficiência e tempo de resposta do sistema.
- **RNF07**: Garantir carregamento rápido e navegação fluida do frontend - (Entre os requisitos de eficiência este também é um requisito de **Desempenho (Sommerville)**			
- **RNF09**: Otimizar Motores de Busca (SEO) através de meta tags e palavras chaves (SEO On-Page) e SEO Off-Page - (Entre os requisitos de eficiência este também é um requisito de **Desempenho (Sommerville)**


### Confiabilidade (Reliability)
Requisitos relacionados à capacidade do sistema de operar sem falhas e se recuperar de erros.  
- **RNF04**: Manter o sistema disponível 24/7 (com exceção de manutenções programadas).  
- **RNF05**: Garantir compatibilidade com os principais navegadores modernos (Chrome, Firefox, Edge, Safari).  


### Proteção (Sommerville) e Segurança (Security) URPS+
Requisitos relacionados à proteção do sistema contra acessos não autorizados e ataques. 
- **RNF01**: Implementar criptografia para a privacidade dos dados do usuário.  
- **RNF10**: Implementar medidas de segurança contra abuso de vulnerabilidades como SQL
Injection ou DNS Tunneling.

## Requisitos Organizacionais
Requisitos relacionados às regras e procedimentos da política dos desenvolvedores e do cliente no sistema, estes são os requisitos chamados de “gerais”. Divididos entre: requisitos operacionais, requisitos de **desenvolvimento**, requisitos ambientais.

- **Desenvolvimento** (Sommerville): Requisitos relacionados à escolha da linguagem de programação, ao ambiente de desenvolvimento e aos padrões que devem ser adotados no processo de desenvolvimento.
- **RNF08** - Documentar padrões de desenvolvimento internos

## Requisitos Externos 
Requisitos relacionados “a fatores externos ao sistema e ao seu processo de desenvolvimento”. Divididos entre: requisitos reguladores, requisitos legais, requisitos éticos.

- **Legal**: Requisitos que precisam ser seguidos para operarem de acordo com a lei.
- **RNF02** - Assegurar conformidade com a Lei Geral de Proteção de Dados (LGPD)

 

---

# DoR e DoD

## Definition of Ready (DoR)

| ID | DoR |
|----|-----|
| RF01 | Regras de negócio de agendamento definidas (prazos, níveis, capacidade). |
| RF02 | Chaves de API de Produção e Teste do Mercado Pago disponíveis. |
| RF03 | Estrutura básica de permissão de usuário (Professora) definida. |
| RF04 | Dados iniciais (horários, preços, descrições) inseridos no BD. |
| RF05 | Modelos de dados de agendamento, aluna e aula interconectados no backend. |
| RF06 | Conteúdo textual final da FAQ/Dúvidas fornecido e revisado. |
| RF07 | URLs finais e ícones corretos das redes sociais fornecidos. |
| RF08 | Conteúdo final das páginas "Sobre", "Regulamento", "Valores" revisado. |
| RF09 | Regras de validação (ex: tamanho mínimo da senha) definidas. |
| RF10 | Rota de autenticação (backend) implementada. |
| RF11 | Pacotes de aulas cadastrados no BD via painel admin (RF18). |
| RF12 | RF01 e RF11 estão Done. |
| RF13 | Regra de timeout (12h) definida no backend. |
| RF14 | Design do link único e página de confirmação no Figma. |
| RF15 | Interface de edição de status no painel (RF03) desenhada. |
| RF16 | Lista de alunas agendadas para a aula acessível no painel (RF03). |
| RF17 | Sessão de usuário definida no backend. |
| RF18 | Design das telas de CRUD de pacotes no painel (RF03). |
| RF19 | Design das telas de CRUD de aulas no painel (RF03). |

## Definition of Done (DoD)

| ID | DoD |
|----|-----|
| RF01 | Agendamento registrado no BD; vaga deduzida; aluna recebe confirmação. |
| RF02 | Redirecionamento e callback de pagamento bem-sucedidos; saldo atualizado. |
| RF03 | Login Admin/Professora funciona; painel exibe primeira tela com sucesso. |
| RF04 | Consulta carrega dados corretamente; planos vinculados aos IDs de compra (RF11). |
| RF05 | Cronograma exibe apenas aulas da aluna autenticada, passadas e futuras. |
| RF06 | FAQ navegável, exibe todas perguntas/respostas e otimizada para celular. |
| RF07 | Links funcionam e visíveis no header/footer. |
| RF08 | Páginas acessíveis sem login; Menu de Navegação (RNF11) inclui links. |
| RF09 | Usuário criado com sucesso; senha armazenada com criptografia forte (RNF01). |
| RF10 | Login bem-sucedido gera sessão segura; falha retorna mensagem genérica. |
| RF11 | Compras levam corretamente ao Mercado Pago (RF02). |
| RF12 | Agendamento verifica saldo de aulas; só permite se saldo positivo e RF01 cumprido. |
| RF13 | Aluna consegue alterar status dentro do prazo; bloqueio após 12h. |
| RF14 | Professora gera link no painel; link funciona fora do painel admin. |
| RF15 | Professora altera status; mudança refletida no histórico da aluna. |
| RF16 | Professora marca presença/ausência em massa; histórico atualizado. |
| RF17 | Token de sessão invalidado após clique; impede reautenticação sem login. |
| RF18 | Administrador cria/edita/exclui pacotes; alterações refletidas no RF04. |
| RF19 | Administrador manipula calendário; mudanças refletem no RF04 e RF17. |
