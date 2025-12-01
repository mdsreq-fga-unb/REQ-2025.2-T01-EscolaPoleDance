# Backlog de Produto 

As Histórias de Usuário apresentadas abaixo foram diretamente derivadas da lista de Requisitos Funcionais definidos anteriormente neste documento. Esta lista serve como o ponto de partida para o desenvolvimento. É importante notar que o backlog é dinâmico e adaptável: essas histórias são preliminares e passarão por refinamentos e ajustes conforme o projeto avança e o feedback é incorporado.

## Backlog Geral 

### Histórias de Usuário

| Histórias | Descrição | Objetivos Específicos | Requisito |
|-----------|-----------|------------------------|-----------|
| US01 | Como um novo usuário, eu quero me cadastrar no website fornecendo minhas informações, para que eu possa realizar compras/agendamentos e acessar a área de aluna. | OE2 | RF01-Cadastrar novo usuário |
| US02 | Como uma aluna, eu quero realizar meu login, para que eu possa acessar meu painel e funcionalidades restritas. | OE2 | RF02-Realizar login |
| US03 | Como uma aluna, eu quero realizar o logout da minha conta após usar o website, para que eu possa proteger minhas informações e garantir a segurança do meu acesso. | OE2 | RF03-Realizar logout |
| US04 | Como uma aluna, eu quero comprar um pacote de aulas de maneira digital, para que eu possa garantir minha vaga nas aulas e ter o pacote creditado na minha conta. | OE3 | RF04-Comprar pacotes de aulas |
| US05 | Como um visitante, eu quero pagar pela minha aula experimental, para que eu possa confirmar minha participação e experimentar a modalidade. | OE3 | RF05-Pagar aula experimental |
| US06 | Como uma aluna, eu quero agendar minhas aulas selecionando uma data e horário e disponíveis, para que eu possa reservar minha vaga e planejar minha frequência. | OE2 | RF06-Agendar aulas |
| US07 | Como uma aluna, eu quero visualizar os pacotes de aulas que a escola oferece, para que eu possa entender minhas opções e escolher qual comprar ou renovar. | OE1 | RF07-Visualizar pacotes de aulas disponíveis |
| US08 | Como uma aluna, eu quero consultar uma lista ou calendário com todas as minhas aulas agendadas, para que eu possa saber quais são meus próximos compromissos e me organizar. | OE2 | RF08-Consultar cronograma de aulas agendadas |
| US09 | Como uma aluna, eu quero confirmar que não poderei comparecer a uma aula agendada antes do prazo de cancelamento, para que eu possa potencialmente evitar penalidades. | OE2 | RF09-Confirmar ausência da aula antecipadamente (Aluna) |
| US10 | Como um administrador, eu quero cadastrar um novo pacote de aulas no sistema, para que eu possa garantir que as alunas terão acesso ao pacote. | OE4 | RF10-Cadastrar novo pacote de aulas |
| US11 | Como um administrador, eu quero editar um pacote existente de aulas no sistema, para que eu possa garantir que as informações do pacote estão atualizadas. | OE4 | RF11-Editar pacote de aulas |
| US12 | Como um administrador, eu quero excluir um pacote existente de aulas no sistema, para que eu possa gerir pacotes novos apropriadamente. | OE4 | RF12-Excluir pacote de aulas |
| US13 | Como um administrador, eu quero editar o status de presença das alunas a qualquer momento, para que o histórico de presença da aluna se mantenha atualizado. | OE4 | RF13-Editar status de presença (Professora) |
| US14 | Como um administrador, eu quero registrar a presença das alunas em uma aula finalizada, para que o histórico de presença da aluna se mantenha atualizado. | OE4 | RF14-Registrar presença após aula |
| US15 | Como um administrador, eu quero registrar aulas no calendário da escola, para que eu possa controlar a grade de horários disponíveis para agendamento. | OE4 | RF15-Registrar aulas no calendário |
| US16 | Como um administrador, eu quero editar aulas no calendário da escola, para que eu possa controlar a grade de horários disponíveis para agendamento. | OE4 | RF16-Editar aulas no calendário |
| US17 | Como um administrador, eu quero excluir aulas no calendário da escola, para que eu possa controlar a grade de horários disponíveis para agendamento. | OE4 | RF17-Excluir aulas no calendário |
| US18 | Como aluna, eu quero agendar aulas experimentais, para que eu possa descobrir com a professora meu nível de habilidade e meu plano ideal. | OE2 | RF18-Agendar aula experimental |
| US19 | Como um administrador, eu quero registrar o nível de habilidade de uma nova aluna após a avaliação, para que exista um registro do seu nível de habilidade. | OE4 | RF19-Registrar resultado da avaliação |
| US20 | Como um administrador, quero definir o plano (A ou B) da nova aluna com base no resultado da avaliação da aula experimental, para que o sistema registre corretamente o plano adequado ao nível da aluna. | OE2 | RF20-Definir plano da aluna |


---

## Priorização do Backlog

Para otimizar o fluxo de desenvolvimento e garantir que os recursos essenciais sejam entregues na primeira iteração, o Backlog do projeto foi submetido a um processo de priorização, onde dividimos as funcionalidades em categorias distintas a partir o método MoSCoW (MUST, SHOULD, COULD, WONT), permitindo uma gestão clara das expectativas e um foco direcionado aos requisitos que são indispensáveis para o sucesso do lançamento. A tabela está no tópico 9.3 deste mesmo documento.

## MVP

O MVP da Lady 's Escola de Pole Dance será a primeira versão do sistema digital lançada para um grupo limitado de alunas e para a Professora/Administradora. O foco é resolver a dor mais urgente do negócio: eliminar a gestão manual de agendamentos e pagamentos, e estabelecer uma presença online profissional e funcional.
Dentro do escopo do Produto Mínimo Viável, encontram-se as funcionalidades listadas, juntamente com seus respectivos requisitos e objetivos específicos.

---

## Funcionalidades x Requisitos x Objetivo Específico

| Funcionalidade | Requisitos que cumprem a funcionalidade | Objetivo específico relacionado |
|----------------|------------------------------------------|---------------------------------|
| Um site público, funcional, responsivo e atrativo, que aumente a visibilidade do negócio e permita que os clientes conheçam o serviço com mais detalhes. | RF07-Visualizar pacotes de aulas disponíveis<br>RNF04 - Garantir compatibilidade com os principais navegadores modernos (Chrome, Firefox, Edge, Safari)<br>RNF05 - Garantir interface intuitiva e fácil de navegar | OE1 - Promover o estúdio |
| Uma área de inscrição online para matrículas e agendamento de aulas. | RF01-Cadastrar novo usuário<br>RF02-Realizar login<br>RF03-Realizar logout<br>RF06-Agendar aulas<br>RF08-Consultar cronograma de aulas agendadas<br>RF18-Agendar aula experimental<br>RF20-Definir plano da aluna | OE2 - Automatizar o processo de matrícula |
| Uma sessão para realizar o pagamento de determinado serviço, seja este uma aula experimental ou um pacote de aulas. | RF04-Comprar pacotes de aulas<br>RF05-Pagar aula experimental | OE3 - Digitalizar os métodos de pagamento |
| Uma página privada para o personal trainer com um painel administrativo gerenciável, centralizando informações de alunas, turmas e pagamentos. | RF10-Cadastrar novo pacote de aulas<br>RF11-Editar pacote de aulas<br>RF12-Excluir pacote de aulas<br>RF14-Registrar presença após aula<br>RF15-Registrar aulas no calendário<br>RF16-Editar aulas no calendário<br>RF17-Excluir aulas no calendário | OE4 - Centralizar a gestão administrativa da escola |


Para avaliar as funcionalidades essenciais para testar a hipótese acima, utilizamos o método MoSCoW e um quadro de Valor de Negócio x Avaliação Técnica.

## Valor de Negócio x Avaliação Técnica

**Valor de Negócio(Valor):** Quão importante a funcionalidade é para a cliente e para o faturamento (com base no MoSCoW: Must/Should/Could).

| Pontuação | Descrição do Valor para a Escola | Categoria MoSCoW |
|-----------|---------------------------------|-----------------|
| Alto (3)  | Essencial para o faturamento e para resolver a dor crítica. | Must-Have |
| Médio (2) | Importante para a satisfação, mas o sistema funciona sem ele. | Should-Have |
| Baixo (1) | Adicional, apenas melhora a experiência ou é um diferencial futuro. | Could-Have |

**Avaliação Técnica (Esforço):** Quanto tempo e a complexidade que o time de desenvolvimento estima para construir a funcionalidade.

| Pontuação | Descrição do Esforço para o Desenvolvimento |
|-----------|--------------------------------------------|
| Alto (3)  | Envolve integrações complexas, novas tecnologias ou alta incerteza (risco). |
| Médio (2) | Complexidade moderada, exige front e back, mas com tecnologia dominada. |
| Baixo (1) | Implementação simples, é estático ou utiliza componentes prontos. |

## Tabela: Valor de Negócio x Avaliação Técnica x MoSCoW

| Requisito | Valor (1-3) | Esforço (1-3) | MoSCoW | Está no MVP? |
|-----------|--------------|----------------|--------|--------------|
| RF01-Cadastrar novo usuário | 3 | 2 | MUST | ✅ |
| RF02-Realizar login | 3 | 2 | MUST | ✅ |
| RF03-Realizar logout | 3 | 2 | MUST | ✅ |
| RF04-Comprar pacetes de aulas | 3 | 2 | MUST | ✅ |
| RF05-Pagar aula experimental | 3 | 2 | MUST | ✅ |
| RF06-Agendar aulas | 3 | 3 | MUST | ✅ |
| RF07-Visualizar pacotes de aulas disponíveis | 3 | 2 | MUST | ✅ |
| RF08-Consultar cronograma de aulas agendadas | 3 | 2 | MUST | ✅ |
| RF09-Confirmar ausência da aula antecipadamente (Aluna) | 1 | 3 | SHOULD |  |
| RF10-Cadastrar novo pacote de aulas | 1 | 2 | MUST |✅  |
| RF11-Editar pacote de aulas | 3 | 2 | MUST | ✅ |
| RF12-Excluir pacote de aulas | 1 | 2 | MUST |✅  |
| RF13-Editar status de presença (Professora) | 3 | 2 | SHOULD |  |
| RF14-Registrar presença após aula | 2 | 2 | MUST | ✅ |
| RF15-Registrar aulas no calendário | 3 | 1 | MUST | ✅ |
| RF16-Editar aulas no calendário | 3 | 2 | MUST | ✅ |
| RF17-Excluir aulas no calendário | 2 | 2 | MUST | ✅ |
| RF18-Agendar aula experimental | 2 | 2 | MUST | ✅ |
| RF19-Registrar resultado da avaliação | 1 | 1 | SHOULD |  |
| RF20-Definir plano da aluna | 1 | 1 | MUST | ✅ |
| RNF01 - Implementar criptografia para a privacidade dos dados do usuário | 3 | 2 | SHOULD |  |
| RNF02 - Assegurar conformidade com a Lei Geral de Proteção de Dados (LGPD) | 3 | 3 | SHOULD | ✅ |
| RNF03 - Assegurar responsividade do site em diferentes dispositivos | 3 | 2 | SHOULD |  |
| RNF04 - Garantir compatibilidade com os principais navegadores modernos (Chrome, Firefox, Edge, Safari) | 3 | 2 | MUST | ✅ |
| RNF05 - Garantir interface intuitiva e fácil de navegar | 2 | 1 | MUST | ✅ |
| RNF06 -Garantir carregamento rápido e navegação fluida do frontend | 3 | 2 | SHOULD |  |
| RNF07 - Documentar padrões de desenvolvimento internos | 2 | 1 | SHOULD |  |
| RNF08 - Otimizar Motores de Busca (SEO) através de meta tags e palavras chaves (SEO On-Page) e SEO Off-Page | 3 | 1 | SHOULD |  |
| RNF09 - Implementar medidas de segurança contra abuso de vulnerabilidades como SQL Injection ou DNS Tunneling | 3 | 2 | SHOULD |  |
| RNF10 - Disponibilizar espaço para tirar dúvidas sobre a modalidade | 2 | 2 | SHOULD |  |


O lançamento do MVP será seguido por uma fase de testes e coleta de dados, visando a validação da hipótese de valor.


## Testes e Validação do Sistema

### Testes de Aceitação do Cliente 
- **Foco:** Testar as jornadas críticas do usuário.
- **Procedimento:** A Professora/Administradora realizará testes nos fluxos de agendamento, recebimento de pagamento e verificação de inscritos no Painel Admin.
- **Métricas de Sucesso:** Confirmação de que o tempo gasto em tarefas administrativas críticas foi reduzido conforme a meta.

### Testes de Usabilidade e Qualidade 
- **Foco:** Validar a experiência do usuário e a robustez técnica.
- **Procedimento:** Um grupo inicial de 5 a 10 alunas será convidado a utilizar o MVP para agendamentos e pagamentos, fornecendo feedback direto sobre:
  - Intuitividade
  - Responsividade
  - Performance

### Testes de Segurança e Conformidade 
- **Foco:** Garantir que o sistema atenda aos requisitos de segurança antes do lançamento em larga escala.
- **Procedimento:** O time de desenvolvimento fará uma varredura final e auditará as rotas de coleta de dados para garantir que a criptografia esteja ativa e funcionando, protegendo a privacidade das alunas.

O MVP será considerado um sucesso e pronto quando:
- Os fluxos de **Agendamento** e **Pagamento** forem concluídos com sucesso por 100% dos usuários Beta.
- A **Professora/Administradora** confirmar que a gestão dos agendamentos está totalmente migrada do manual para o digital.
- Não houver falhas críticas de segurança ou erros de indisponibilidade durante o período de testes.


