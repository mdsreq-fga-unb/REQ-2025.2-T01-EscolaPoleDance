# Engenharia de Requisitos

## Atividades e Técnicas de ER

### Elicitação e Descoberta
- **Entrevista com stakeholders:** Alinhamento de expectativas e requisitos essenciais diretamente com a proprietária.
- **Protótipos:** Validação visual e interativa do design junto aos stakeholders.
- **Prompt IA:** Uso de IA para acelerar a geração de ideias e roteiros de entrevista. 
- **Brainstorming:** Dinâmicas em grupo para criar diferenciais e soluções de engajamento.
- **Observação e Feedback:** Testes de uso com o protótipo para ajustes de usabilidade e fluxo.
- **Análise de Interface:** Mapeamento dos dados necessários com base nos elementos visuais das telas.
- **Análise de Logs:** Monitoramento pós-lançamento (Hypercare) para identificar falhas reais em produção.

### Análise e Consenso
- **Negociação e Custo-Benefício:** Consenso entre o design artístico exigido pelo nicho e a performance técnica, garantindo um site bonito mas veloz.
- **Análise de Domínio:** Alinhamento da identidade visual ao público fitness adulto, transmitindo profissionalismo e evitando estereótipos.
- **Análise de Risco e Viabilidade (Pagamentos):** Validação da API de pagamentos e decisão de segurança por não armazenar dados de cartão (uso de tokenização).
- **Revisão:** Conferência final para garantir que a entrega técnica corresponde exatamente aos requisitos e segurança acordados no Backlog.

### Declaração de Requisitos
- **História de Usuário:** Descrições ágeis no formato "Como... Quero... Para..." que traduzem as necessidades reais de alunas e instrutoras em funcionalidades, mantendo o foco na experiência de uso.
- **Especificação de Requisitos:** Detalhamento técnico dos Requisitos Funcionais (ações do sistema) e Não Funcionais (segurança/performance), servindo como checklist obrigatório de regras de negócio.
- **Documento de Visão de Produto:** Documentação mestre que consolida e contextualiza todo o Backlog. Ele conecta a estratégia de negócio da escola com a lista técnica de tarefas, definindo o escopo e o propósito do produto.

### Representação de Requisitos
- **Representação Informal (Visual):** Utilização do Figma para criar de esboços a protótipos de alta fidelidade, permitindo tangibilizar a interface e validar colaborativamente o fluxo de navegação antes da codificação.
- **Implementação (Coding) e Testes Unitários** Desenvolvimento do núcleo do sistema (Back-end), transformando regras de negócio em APIs funcionais, validado por testes unitários para garantir estabilidade.
- **Implementação Front End::** Tradução fiel dos protótipos visuais (Figma) para código web, assegurando que as interfaces públicas e o fluxo de inscrição sejam responsivos e preservem a identidade visual da escola.

### Verificação e Validação de Requisitos
- **Revisão por pares:** Requisitos são lidos e analisados por colegas, analistas e stakeholders para identificar ambiguidades, inconsistências ou omissões.  
- **Checklist de Verificação:** Um checklist será aplicado para garantir que cada requisito esteja bem formulado, sem ambiguidades e com critérios de aceitação claros. Serão verificados aspectos como completude, rastreabilidade e conformidade com o padrão de escrita adotado no projeto.  
- **Checklist de Validação:** Utilizado para confirmar se cada requisito realmente atende às necessidades da escola e das alunas, comparando os requisitos documentados com os objetivos de negócio definidos na fase inicial do projeto.  
- **Entrevistas e reuniões com o cliente:** Confirmar se o que foi documentado condiz com o que o usuário realmente precisa.  
- **Walkthrough:** Conduzir um walkthrough dos requisitos com o cliente, onde cada funcionalidade foi apresentada e discutida em detalhes, ajudando a alinhar o entendimento e identificar ajustes antes da fase de implementação.  
- **Feedback:** A coleta de feedback contínuo dos stakeholders foi essencial para validar as decisões de design e funcionalidade. As sugestões foram incorporadas ao longo do processo, permitindo ajustes rápidos e alinhamento constante com as expectativas do cliente.  

### Organização e Atualização de Requisitos
- **Backlog:** Utilizar uma lista centralizada e priorizada, conhecida como Product Backlog, como a única fonte de trabalho do projeto. Esta lista conterá todas as Histórias de Usuário, requisitos funcionais e não funcionais, e outras tarefas necessárias para o desenvolvimento do site.
- **Priorização:** Organização contínua das tarefas do Backlog baseada no valor de negócio e urgência para a escola, assegurando que as funcionalidades críticas de captação de alunas sejam desenvolvidas primeiro.
- **Feedback / MOSCoW:** Aplicação da técnica MOSCoW (Must, Should, Could, Won't) para classificar as solicitações e feedbacks de requisitos.
- **Análise de Requisitos Emergentes:** Avaliação de novas necessidades que surgiram apenas durante a codificação. O processo decide se o novo requisito deve ser implementado imediatamente (se for crítico) ou registrado no Backlog para ciclos futuros, evitando o descontrole do escopo.
- **Refinamento:** Reuniões técnicas para detalhar e "limpar" os itens do Backlog. Consiste em quebrar requisitos grandes em tarefas menores e esclarecer dúvidas técnicas antes do início do desenvolvimento.
- **Versionamento (Git Tag):** Marcação técnica de pontos estáveis no histórico do projeto (ex: v1.0). Garante o controle exato do que foi entregue em cada ciclo e facilita a gestão de mudanças entre a versão de desenvolvimento e a versão final

## Engenharia de Requisitos e o RAD

### Fase 1: Planejamento de Requisitos (Requirements Planning)

| Ciclos | Atividades ER | Prática | Técnica | Resultados Esperados |
|------------------|---------------|---------|--------|------------------|
| 1 | Elicitação e Descoberta | Alinhamento e detalhamento dos requisitos com a cliente, definição do perfil das alunas. | Entrevista com stakeholders; Prompt IA; Brainstorming|Requisitos detalhados e perfil das alunas definidas. |
| 1 | Análise e Consenso| Revisão e refinamento inicial | Negociação | Requisitos definidos com clareza, claros e compreendidos pelas partes envolvidas |
| 1 | Declaração | Rascunho da documentação preliminar do escopo. | Especificação de Requisitos | Lista de requisitos estruturados para leitura do cliente. |
| 1 | Verificação e Validação | Validação inicial com cliente | Entrevistas e reuniões com o cliente | Confirmação de que os requisitos estão alinhados com a realidade |
| 2 | Declaração  | Desenvolvimento da documentação preliminar | História de Usuário, Documento de Visão de Produto | Especificação dos Requisitos e Backlog do Produto inicial |
| 2 | Representação  | Criação de Protótipos | Representação Informal | Protótipo das interfaces com alta fidelidade |
| 2 | Verificação e Validação | Demonstração ao Cliente | Walkthrough, Revisão Técnica | Validação do entendimento visual e identificação de inconsistências. |
| 2 | Elicitação e Descoberta | Levantamento de ajustes finos e novos detalhes percebidos através da interação com o protótipo. | Observação / Coleta de Feedback | Lista de melhorias de usabilidade, design e correções de fluxo identificadas. |
| 2 | Análise e Consenso | Discussão com a equipe após coleta de feedback do Cliente  | Análise de Domínio de Requisitos, Análise de Risco | Foram discutidas questões em relação à requisitos como “facilidade de uso e design bonito” além dos requisitos que cumprem o objetivo do projeto (captar alunas). |
| 2 | Organização e Atualização | Refinamento da documentação “Visão do Produto e Projeto” | Feedback, Priorização | Documento revisado + Desenvolvimento do Backlog. |


### Fase 2: Design do Usuário (User Design)

| Ciclos | Atividades ER | Prática | Técnica | Resultados Esperados |
|------------------|---------------|---------|--------|------------------|
| 1 | Análise e Consenso | Priorização e avaliação de riscos | Custo-Benefício, Análise de Risco | Backlog priorizado com base em valor, urgência e viabilidade |
| 1 | Declaração | Refinamento do backlog | Especificação de Requisitos (RFs) | Backlog com História de Usuário detalhados e prontos para o desenvolvimento. |
| 1 | Representação | Desenvolvimento detalhado dos fluxos do sistema. | Representação Informal | Protótipo navegável completo representando os fluxos detalhados |
| 1 | Verificação e Validação  | Validação do que está pronto para desenvolvimento. | Checklist de Validação, walkthrough | Garantia de que o protótipo reflete os requisitos esperados e pode seguir para código |
| 1 | Elicitação e Descoberta | Definição da estrutura de dados baseada nas telas aprovadas. | Análise de Interface | Mapeamento lógico de quais dados precisam trafegar entre o Front-end e o Back-end. |
| 1 | Organização e Atualização | Documentação | Análise de Requisitos Emergentes | Especificação de Requisitos consolidada e Atualização do Escopo |

### Fase 3: Construção (Construction)

| Ciclos | Atividades ER | Prática | Técnica | Resultados Esperados |
|------------------|---------------|---------|--------|------------------|
| 1 | Declaração | Definição Técnica da Arquitetura (Endpoints e Tabelas). | Representação de Requisitos via Kanban (GitHub Projects). |Tarefas de desenvolvimento técnico detalhadas e prontas para execução (Code-First). |
| 1 | Representação | Construção do Backend e Painel Admin. | Implementação (Coding) e Testes Unitários | APIs funcionais (Login, CRUD Turmas) e Painel Administrativo operante. |
| 1 | Verificação e Validação | Demonstração ao Cliente e Teste de APIs. | Checklist de Verificação, Checklist de Validação | Resultados confirmando que as APIs funcionam e validação visual do Painel Admin. |
| 1 | Elicitação e Descoberta | Elicitação Contínua pós-demonstração | Entrevista / Feedback Rápido | Novos detalhes e requisitos de baixo nível descobertos e adicionados ao backlog. |
| 1 | Organização e Atualização | Gerenciamento do Backlog | Refinamento | Backlog de Requisitos atualizado com o status das tarefas e os novos itens de feedback incorporados para o Ciclo 2 |
| 2 | Representação  | Desenvolvimento das Interfaces Públicas. | Implementação Front End | Protótipo e telas do site público que refletem o fluxo de inscrição desejado. |
| 2 | Verificação e Validação  | Teste de Usabilidade e Validação da Jornada do Usuário | Checklist de Validação, Verificação e Feedback | Resultados do Checklist validando a jornada da aluna, lista de melhorias de UX/UI com base no feedback |
| 2 | Análise e Consenso  | Refinamento de Requisitos de Interface | Negociação | Consenso sobre as alterações de UX/UI a serem implementadas, garantindo que a solução final atenda às expectativas da aluna |
| 3 | Análise e Consenso  | Monitoramento e Controle de Riscos (Pagamentos) | Análise de Risco / Viabilidade Técnica | Riscos de segurança mitigados, garantindo uma integração de pagamento segura. |
| 3 | Verificação e Validação   | Validação Sistêmica e de Requisitos Não-Funcionais | Análise de Qualidade de Requisitos, Walkthrough, Revisão em Pares | Resultados da Revisão e Qualidade de Requisitos assegurada. Aprovação final do cliente para transição |
| 3 | Declaração  | Documentação Final para Entrega | Especificação de Requisitos de Software | Especificação de Requisitos de Software consolidada e pronta para a entrega |

### Fase 4: Transição (Cutover)

| Ciclos | Atividades ER | Prática | Técnica | Resultados Esperados |
|------------------|---------------|---------|--------|------------------|
| 1 | Verificação e Validação  | Validação Final e Aceite do Produto | Checklist de Validação, Verificação, DoD| Resultados do Checklist confirmando a prontidão para o Go-Live, DoD formalmente aceito pelo cliente. |
| 1 | Organização e Atualização | Gerenciamento do Escopo de Transição | Versionamento (Git Tag) | Backlog de Requisitos finalizado e versionado para a transição. |
| 2 | Elicitação e Descoberta | Suporte Inicial e Monitoramento | Análise de Logs | Lista de dúvidas operacionais e pequenos bugs identificados em produção. |
| 2 | Organização e Atualização | Gerenciamento de Ajustes Pós-Implantação | Feedback, MOSCOW | Backlog de Requisitos contendo uma lista priorizada de itens para manutenção. |
| 2 | Análise e Consenso  | Reunião de Lições Aprendidas. | Revisão em Pares | Relatório de encerramento com pontos positivos e melhorias para projetos futuros. |
| 2 | Verificação e Validação | Validação da Entrega e Encerramento do Projeto | Entrevista, Revisão em Pares | Resultados da Revisão com o termo de aceite final do sistema e o encerramento formal do projeto. |
