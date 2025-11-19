export type FAQItem = {
    question: string;
    answer: string;
};

export const faqsByCategory: Record<string, FAQItem[]> = {
    "Perguntas Frequentes": [
        {
            question: "Preciso ter experiência prévia para começar?",
            answer:
                "Não! Nossas aulas são adaptadas para todos os níveis, desde iniciantes até avançadas. Nossas instrutoras são especializadas em ensinar desde o básico.",
        },
        {
            question: "Qual a idade mínima para participar?",
            answer:
                "Aceitamos alunas a partir de 16 anos. Para menores de idade, é necessário autorização dos responsáveis.",
        },
        {
            question: "Existe limite de idade para praticar pole dance?",
            answer:
                "Não há limite de idade! Todas as mulheres são bem-vindas, desde que estejam liberadas para praticar atividade física.",
        },
        {
            question: "Como me matriculo?",
            answer:
                "Você pode se matricular pelo nosso site ou diretamente na escola. Consulte os planos disponíveis e escolha o que melhor se encaixa.",
        },
        {
            question: "Com que antecedência devo chegar para a aula?",
            answer: "Você deve estar presente na escola **exatamente no horário de início da sua aula**. Os 15 minutos iniciais são essenciais e dedicados ao aquecimento obrigatório. Estar na hora garante que você participe desta etapa crucial para evitar lesões e preparar o corpo."
        },
        {
            question: "Quais são as vestimentas adequadas para a prática de Pole Dance?",
            answer: "Recomendamos roupas confortáveis de prática esportiva ou academia. **Preferencialmente utilize top e shorts** para garantir a aderência necessária à barra (pele é fundamental para a 'pega'). A professora poderá solicitar o uso de calça legging apenas para a etapa de aquecimento."
        },
        {
            question: "É permitido usar cremes ou óleos na pele?",
            answer: "É **estritamente proibido** o uso de cremes, óleos, hidratantes, ou qualquer produto oleoso na pele no dia da aula e no dia anterior à aula. Isso compromete a sua segurança e a de outras alunas, pois a barra fica escorregadia."
        },
        {
            question: "Preciso prender o cabelo para as aulas?",
            answer: "Não é obrigatório prender o cabelo, mas é fortemente recomendado para sua segurança e conforto. Cabelos soltos podem enroscar ou atrapalhar durante movimentos mais rápidos ou giros."
        },
        {
            question: "O que devo levar para a aula?",
            answer: "Você deve levar sua **garrafa própria de água** e uma **toalhinha de uso pessoal** para enxugar o suor. É fundamental manter-se hidratada durante toda a prática."
        },
        {
            question: "Posso usar a toalha da escola para uso pessoal?",
            answer: "Não. As toalhas disponibilizadas pela escola são destinadas **exclusivamente para a limpeza da barra** (grip) entre os exercícios e alunas, não devendo ser utilizadas para enxugar o suor ou qualquer outro uso pessoal."
        },
        {
            question: "É permitido comer ou beber durante a aula?",
            answer: "Não. É **proibido comer ou beber** qualquer coisa dentro do ambiente (estúdio) onde a aula está ocorrendo. Apenas a garrafa de água é permitida."
        }
    ],
    "Regulamento Interno": [
        {
            question: "Posso fazer aula experimental?",
            answer:
                "Sim! Oferecemos aula experimental paga para você conhecer nossa metodologia antes de se matricular.",
        },
        {
            question: "Quais formas de pagamento aceitam?",
            answer:
                "Aceitamos cartão de crédito, débito e transferências. Consulte planos e opções de parcelamento na nossa página de planos.",
        },
        {
            question: "Como funciona o sistema de turmas?",
            answer:
                "Oferecemos turmas por níveis (iniciante, intermediário e avançado) com horários flexíveis durante a semana e fins de semana.",
        },
        {
            question: "O que preciso levar para a primeira aula?",
            answer:
                "Para a primeira aula, venha com roupas confortáveis (shorts e top) e muita disposição! Temos poles disponíveis na escola.",
        },
        {
            question: "Sobre Atrasos e Acesso à Aula",
            answer: "A aluna tem acesso à aula somente se estiver dentro da escola no horário exato de início. Não será aplicada nenhuma multa ou cobrança extra por atraso, contudo, a entrada será negada caso a aluna perca a etapa de aquecimento obrigatório, visando a segurança e o bem-estar físico. **Não há tolerância de atraso.**"
        },
        {
            question: "Política de Cancelamento de Aulas",
            answer: "As regras de cancelamento e reposição estão detalhadas no seu contrato de adesão. **Qualquer política de multa ou cobrança por cancelamento deve ter sido previamente estabelecida e acordada no momento da contratação.** Consulte seu contrato para as regras específicas."
        },
        {
            question: "Termos de Uso e Política de Privacidade",
            answer: "Os termos completos sobre a utilização dos nossos serviços, dados pessoais e política de privacidade estão disponíveis em seus respectivos documentos. Ao utilizar a plataforma, você aceita integralmente nossos Termos de Serviço e nossa Política de Privacidade, ambos atualizados em [INSIRA DATA DA ÚLTIMA ATUALIZAÇÃO]."
        },
        {
            question: "Conduta e Respeito no Estúdio",
            answer: "Todas as alunas e instrutoras devem manter um ambiente de respeito, inclusão e profissionalismo. Qualquer conduta inadequada ou desrespeitosa pode levar à suspensão ou rescisão do contrato, conforme previsto nos Termos de Serviço."
        }
    ],
};
