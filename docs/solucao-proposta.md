# Solução proposta

## Objetivos do produto

### Objetivo geral
O objetivo geral é promover o crescimento sustentável e a eficiência operacional da Lady 's Escola de Pole Dance, reduzindo as barreiras informacionais e processuais que dificultam a captação e a comunicação com clientes.

### Objetivos específicos e indicadores

| Código | Objetivo específico | Indicador de sucesso |
|----------|---------------------|----------------------|
| OE1 | Promover o estúdio | Aumento do número de acessos únicos em ≥ 40% em 6 meses. |
| OE2 | Automatizar o processo de matrícula | ≥ 60% das matrículas realizadas via plataforma online após 6 meses. |
| OE3 | Digitalizar os métodos de pagamento | Redução em ≥ 50% dos casos de atraso ou inadimplência nos pagamentos. |
| OE4 | Centralizar a gestão administrativa da escola | Redução em ≥ 60% do tempo gasto em tarefas administrativas. |

---

## Características da solução

- **OE1 (Promover o estúdio):** A solução será a principal vitrine digital do estúdio, projetada para que novas alunas possam descobrir e se interessar pelos serviços. Para isso, a plataforma será desenvolvida com otimização para motores de busca (SEO), o que facilitará que o estúdio seja encontrado quando potenciais clientes pesquisarem por aulas na região.Ao entrar no site, a visitante será recebida por uma página inicial que apresenta a identidade do estúdio e seus principais atrativos, incluindo chamadas para ação claras que a convidam a conhecer melhor os serviços ou entrar em contato.
A estrutura do site permitirá que a usuária navegue de forma intuitiva. Haverá um menu principal para guiar a visita por seções essenciais, como a história do estúdio (em "Sobre"), os detalhes das aulas ("Turmas") e as opções de investimento ("Valores"). Um aspecto fundamental é que todo o conteúdo informativo será de acesso público. A visitante não precisará criar uma conta ou fazer login apenas para explorar o que o estúdio oferece. Ela poderá, por exemplo, consultar livremente a grade de horários completa e analisar os detalhes dos planos disponíveis.
Essa transparência é chave para que a cliente possa avaliar se os serviços se encaixam em sua rotina e orçamento antes mesmo de decidir pela matrícula. Além disso, a solução será acessível para dispositivos móveis (com largura de 360px a 767px, como smartphones de 5 a 6.7 polegadas) e desktop (larguras a partir de 1024px). O design responsivo garantirá que o site se ajuste e funcione adequadamente, seja acessado de um computador em casa ou de um smartphone em movimento.

- **OE2 (Automatizar o processo de matrícula):** ​Para automatizar a matrícula e o agendamento, a solução oferecerá uma "área da aluna". Novas interessadas poderão se cadastrar diretamente no site para criar um perfil de usuária e, a partir daí, acessar seu painel pessoal com login e senha.
Dentro dessa área, a aluna terá autonomia para gerenciar suas atividades. Ela poderá agendar novas aulas — incluindo a possibilidade de marcar uma aula experimental para conhecer o estúdio. O sistema apresentará os pacotes de aulas disponíveis de acordo com o plano ativo de cada aluna. Ela também terá acesso a um cronograma pessoal para consultar todas as suas aulas já marcadas e, caso não possa comparecer, poderá usar o sistema para confirmar sua ausência com antecedência.

- **OE3 (Otimizar os métodos de pagamento):** Para otimizar a contratação dos serviços, a solução integrará métodos de pagamento online seguros (via Mercado Pago). As alunas poderão comprar novos pacotes de aulas ou pagar por uma aula experimental diretamente pela plataforma. Isso busca reduzir as barreiras no momento da inscrição e facilitar a gestão de recebimentos, diminuindo a dependência de cobranças manuais ou o risco de inadimplência.

- **OE4 (Centralizar a gestão administrativa da escola):** A plataforma também centralizará a gestão administrativa do estúdio. A professora ou administradora terá acesso a um painel administrativo protegido, onde poderá controlar as informações das alunas, turmas e inscrições.
A partir deste painel, será possível gerenciar o calendário de aulas (definindo horários e turmas) e administrar os pacotes de serviços oferecidos. A gestão da frequência será facilitada, permitindo registrar quem compareceu após cada aula, editar o status de presença manualmente e gerar links de confirmação de ausência (para controle da professora). O sistema também permitirá o registro de resultados de avaliações, ajudando a acompanhar o progresso das alunas, e a definição do plano associado a cada estudante. Para garantir a manutenção e a evolução desta ferramenta de gestão, os padrões de desenvolvimento do sistema serão documentados.


## Tecnologias a Serem Utilizadas
Para a construção de nossa solução, o **Node.js** será a base do nosso back-end, proporcionando um ambiente escalável e versátil para o desenvolvimento.

Na gestão do banco de dados, optamos pelo **MySQL**, uma tecnologia amplamente utilizada e confiável, implementada através do **Sequelize**, um ORM (Object-Relational Mapper) para facilitar a manipulação dos dados e tornar o desenvolvimento mais rápido e seguro.

Já no desenvolvimento da interface de usuário, usaremos, em nosso front-end, o **React.js**, uma tecnologia com forte apoio da comunidade e alta fluidez durante o desenvolvimento.

Além disso, faremos uso do **Docker** para garantir um ambiente de desenvolvimento controlado para todos os membros da equipe.

## Pesquisa de mercado e análise competitiva

O mercado de academias e estúdios de atividades físicas tem crescido significativamente, especialmente em modalidades que combinam exercício físico e expressão corporal, como o pole dance. Atualmente, algumas plataformas digitais são utilizadas para gestão de academias e estúdios, incluindo **Tecnofit**, **Next Fit** e **Cloud Gym**. Apesar de oferecerem funcionalidades como cadastro de alunos, controle de turmas, pagamentos online e relatórios, usuários relatam problemas recorrentes:

- **Tecnofit:** Aumento de preços sem critérios claros, suporte limitado e robotizado, falhas no aplicativo (como tela preta e travamentos) e dificuldade de contato com atendimento humano. 
- **Pole Dance Brasília:** Site tem função apenas informativa e publicitária. Possui design simples, sem recursos de gestão, acompanhamento de alunos ou integração de processos administrativos, limitando-se a atuar como vitrine digital do estúdio.
- **Cloud Gym:** Problemas constantes de conexão, falhas na liberação de acesso e inconsistências no controle financeiro, dificuldade de cancelamento do serviço e suporte ineficiente, que não resolve problemas de forma definitiva. 
- **Studio Arte Pole Dance:** Visibilidade concentrada nas redes sociais. O site é simples e de caráter apenas informacional, não é hospedado em domínio próprio, o que compromete a imagem de profissionalismo e seriedade. Além disso, carece de recursos de gestão e de uma identidade digital mais estruturada.

Esses relatos evidenciam limitações importantes das plataformas existentes, especialmente para pequenos estúdios ou modalidades nichadas como o pole dance, onde a estabilidade, o suporte humano e a personalização são essenciais.

A solução da Lady's Escola de Pole Dance irá se diferenciar por:

- **Foco na modalidade pole dance:** Funcionalidades e conteúdos específicos para a prática, incluindo informações para alunas iniciantes e avançadas, esclarecendo dúvidas frequentes. 

- **Acesso universal via web:** A solução será uma plataforma web responsiva, garantindo acesso completo no computador e celular sem a necessidade de instalação. Isso remove barreiras e facilita o primeiro contato da aluna com o estúdio.

- **Gestão integrada e confiável:** Controle de matrículas, turmas, agendamentos e pagamentos em um único painel administrativo, com estabilidade operacional e focada no universo do pole dance, sem complexidades desnecessárias. 

- **Custo adequado ao porte do estúdio:** Soluções financeiramente viáveis para estúdios de pequeno e médio porte, evitando cobranças excessivas ou rígidas.

Dessa forma, a solução proposta combina os melhores recursos das plataformas existentes com **personalização, simplicidade e eficiência operacional**, atendendo especificamente o estúdio de pole dance e proporcionando uma experiência segura, prática e confiável tanto para alunas quanto para gestores.


## Análise de viabilidade

O projeto é altamente viável em todas suas frentes. Do ponto de vista técnico, a combinação de **Node.js**, **MySQL**, **Sequelize** e **React.js** é uma pilha de tecnologias bem documentadas, com forte suporte da comunidade. Isso, somado com a experiência prévia da equipe em desenvolvimento web e no uso específico dessas tecnologias, além da divisão da equipe por especialização entre front-end e back-end, minimiza riscos de desenvolvimento e garante que a equipe consiga construir a solução eficientemente. Considerando o escopo definido e a qualificação da equipe, o prazo estipulado para entrega de um produto mínimo viável (MVP) em cerca de 3 meses é realista. A viabilidade financeira do cliente é sustentável, visto que nossa solução irá otimizar processos internos, permitindo um aumento na receita através da aquisição de novas alunas. 

Finalmente, a análise do mercado indica que há uma demanda crescente por soluções digitais especializadas e uma baixa oferta do mesmo para o nicho de escolas de pole dance. Isso posiciona nosso produto como uma solução em vantagem competitiva no mercado regional do Distrito Federal.  


## Impacto da solução

A solução terá um grande e benéfico impacto no negócio do cliente ao modernizar a gestão da escola e expandir seu alcance e competitividade no mercado local. Os principais benefícios esperados incluem:

- **Aumento de Alunas e Receita:** A plataforma digital amplifica a captação de novas alunas, o que resultará em um crescimento do número de clientes e do faturamento da escola.  
- **Melhora na Gestão:** A automatização dos processos de agendamentos e matrícula de alunas irá otimizar o tempo gasto em tarefas administrativas.
- **Fortalecimento da Marca:** Um website profissional e interativo, focado na experiência do usuário, vai promover a imagem da escola como moderna e profissional, ajudando na atração de público.
- **Retenção de Clientes:** A funcionalidade de acompanhamento de matrícula e agendamento de aulas aumentará a satisfação dos clientes e a probabilidade de recorrerem novamente aos serviços da escola.

Em resumo, a solução irá impulsionar o negócio do cliente para um crescimento sustentável através de uma melhor eficiência operacional e uma experiência digital excelente para os alunos.
