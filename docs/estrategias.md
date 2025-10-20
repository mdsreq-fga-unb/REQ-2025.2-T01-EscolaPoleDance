# ESTRATÉGIAS DE ENGENHARIA DE SOFTWARE

## Estratégia Priorizada

- **Abordagem:** Híbrida  
- **Ciclo de vida:** Adaptativo  
- **Processo:** RAD (Rapid Application Development)  
- **Framework:** Kanban  

## Quadro Comparativo

| Critério | RAD | AUP |
|----------|-----|-----|
| Abordagem Geral | Iterativa e incremental, focada na entrega rápida de protótipos funcionais e aprendizado do usuário. | Iterativo e incremental, baseado em fases do RUP, mas com princípios ágeis para adaptação contínua. |
| Foco em Arquitetura | Arquitetura leve e adaptável; prioridade em funcionalidade rápida. | Ênfase em arquitetura suficiente para suportar o desenvolvimento; evolui ao longo das iterações. |
| Estrutura de Processos | Ciclos curtos com prototipagem, feedback do cliente e ajustes rápidos. | Estruturado em fases (Iniciação, Elaboração, Construção, Transição), mas com sprints ágeis dentro de cada fase. |
| Flexibilidade de Requisitos | Muito flexível; requisitos podem mudar a qualquer momento com base no feedback do cliente. | Flexível, mas mais controlado; mudanças são incorporadas durante iterações planejadas. |
| Colaboração com Cliente | Envolvimento intenso em cada protótipo ou entrega incremental. | Envolvimento contínuo, mas organizado por fase; feedback ao final de cada iteração. |
| Complexidade do Processo | Processo leve e ágil, pouca documentação formal; fácil adaptação a mudanças rápidas. | Mais formal que RAD, com definição de fases e documentação mínima, mantendo princípios ágeis. |
| Qualidade Técnica | Garantida via prototipagem, testes incrementais e refatoração contínua. | Garantida com boas práticas de desenvolvimento, integração contínua e revisões por iteração. |
| Práticas de Desenvolvimento | Prototipagem rápida, refatoração contínua, entregas incrementais. | Iterações curtas com entregas incrementais, testes contínuos, integração e revisão de código. |
| Adaptação ao Projeto | Ideal para projetos com necessidade de entregas rápidas, aprendizado do cliente e protótipos. | Ideal para projetos que precisam de estrutura ágil dentro de um framework mais formal, com evolução controlada da arquitetura. |
| Documentação | Mínima, apenas o necessário para guiar protótipos e testes. | Leve, focada em comunicação, requisitos essenciais e documentação técnica básica por fase. |
| Controle de Qualidade | Testes incrementais e protótipos validados continuamente. | Validação contínua por iteração, revisões técnicas e testes automatizados sempre que possível. (TDD) |
| Escalabilidade | Escalável para projetos pequenos e médios; prototipagem facilita ajustes rápidos. | Escalável para equipes médias a grandes, mantendo estrutura formal por fases. |
| Suporte a Equipes de Desenvolvimento | Adequado para equipes pequenas e médias, papéis flexíveis, foco em colaboração direta. | Suporta equipes médias e grandes, papéis mais definidos, equipes com experiência mista em processos. |

## Justificativa

Com base nas características do projeto e nos desafios enfrentados pela Lady’s Escola de Pole Dance, o RAD (Rapid Application Development) é o processo mais adequado pelos seguintes motivos:

**Flexibilidade e Entregas Rápidas:**  
Como o projeto possui prazo curto, equipe pequena e escopo reduzido, o RAD permite entregas incrementais em ciclos curtos, com feedback constante da professora. Isso garante que o sistema evolua de acordo com as necessidades reais do estúdio, sem depender de longos períodos de desenvolvimento.

**Participação Ativa do Cliente e Refatoração de Requisitos:**  
O RAD prioriza o envolvimento contínuo do cliente, permitindo que a professora teste funcionalidades como painel administrativo, inscrição de alunas e sistema de pagamentos. Com isso, os requisitos podem ser refatorados ao longo do projeto, ajustando funcionalidades conforme o feedback recebido, aumentando a aderência do sistema às expectativas.

**Baixo Risco nas Integrações e Conteúdo Estático:**  
O projeto envolve integrações de caráter organizacional e serviços de pagamento por links externos, que não serão programados internamente. Além disso, parte do site é composta por conteúdo estático relacionado ao estúdio e à modalidade, como informações sobre aulas, valores e benefícios do pole dance. Esse caráter estático reduz significativamente os riscos técnicos do projeto.

**Foco na Eficiência Operacional e Valor ao Cliente:**  
O RAD permite priorizar funcionalidades que trazem maior valor, como inscrição online, controle de pagamentos e centralização administrativa, aumentando a produtividade do estúdio e melhorando a experiência das alunas.

**Adequação ao Perfil da Equipe:**  
A equipe é pequena e composta por desenvolvedores gerais, capazes de atuar em múltiplas áreas do projeto, o que exige uma abordagem ágil e flexível. Além do cliente, a equipe inclui pelo menos uma pessoa do meio do negócio, garantindo que as decisões técnicas e de negócio estejam alinhadas com as necessidades do estúdio. Essa composição favorece a rápida comunicação, a tomada de decisões ágil e a implementação de ajustes conforme o feedback real do cliente, características centrais do RAD.

**Kanban:**  
O framework ágil Kanban complementa o processo RAD ao fornecer uma ferramenta visual de gerenciamento de tarefas, permitindo que a equipe acompanhe o progresso do projeto em tempo real. Além disso, possibilita a adaptação dos fluxos de trabalho conforme as necessidades e gargalos identificados durante o desenvolvimento, seja pela própria equipe ou a partir do feedback obtido nos encontros com a cliente.  

Por praticidade, o quadro Kanban utilizado pela equipe foi implementado no GitHub, por meio da ferramenta Projects. As tarefas foram organizadas em colunas como **Backlog**, **Ready**, **In Progress**, **In Review** e **Done**, tornando visíveis o fluxo de trabalho, as prioridades e os pontos de atenção. Essa abordagem auxilia a equipe a manter o foco nas entregas mais relevantes, facilita a comunicação entre os desenvolvedores e a professora, e permite ajustes rápidos diante de novas demandas. Além disso, o Kanban promove transparência e colaboração, características essenciais em projetos com abordagem híbrida e ciclo de vida adaptativo no processo RAD.
