export type FAQItem = {
    question: string;
    answer: string;
};

export const faqsByCategory: Record<string, FAQItem[]> = {
    "Sobre as aulas": [
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
    ],
    "Valores e Pagamentos": [
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
            question: "Lorem ipsum?", 
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
    ],
    "Horários e Turmas": [
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
            question: "Lorem ipsum?", 
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
    ],
    "Contato e Matricula": [
        {
            question: "Como me matriculo?",
            answer:
                "Você pode se matricular pelo nosso site ou diretamente na escola. Consulte os planos disponíveis e escolha o que melhor se encaixa.",
        },
        { 
            question: "Lorem ipsum?", 
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        { 
            question: "Lorem ipsum?", 
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
    ],
    "Regulamento e Políticas": [
        {
            question: "Onde fica a escola?",
            answer:
                "Estamos localizados no centro, com fácil acesso por transporte público. Consulte o endereço completo na seção de contato.",
        },
        { 
            question: "Lorem ipsum?", 
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        { 
            question: "Lorem ipsum?", 
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
    ],
    Segurança: [
        {
            question: "Preciso de atestado médico?",
            answer:
                "Recomendamos liberação médica caso tenha alguma condição pré-existente; em geral não é necessário para iniciantes saudáveis.",
        },
        { 
            question: "Lorem ipsum?", 
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        { 
            question: "Lorem ipsum?", 
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
    ],
};
