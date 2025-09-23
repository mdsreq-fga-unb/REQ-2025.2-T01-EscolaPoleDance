# Guia de estilo e padrões de código

### 1. Comentário e código

- Todo o código deve ser escrito em inglês, incluindo comentários, variáveis, funções, componentes etc
- Comentários devem preferencialmente explicar o "porquê" de lógicas complexas, e não apenas "o que" o código faz.
- Prefira código legível e explícito a código compacto.
- Utilize `// TODO:` para funcionalidades planejadas e `// FIXME:` para bugs conhecidos que precisam de correção.

### 2. Estrutura de pastas

Uma estrutura de pastas bem definida é essencial para organizar a aplicação em React Native.

- `/src`: Pasta raiz para todo o código-fonte da aplicação.
    - `/api`: Funções, instâncias do Axios e hooks para comunicação com a API.
    - `/assets`: Arquivos estáticos como imagens (`images`), fontes (`fonts`) e ícones (`icons`).
    - `/navigation`: Configuração de rotas e navegadores (Stack, Tabs) do React Navigation.
    - `/screens`: As telas da aplicação. Cada tela é um componente que representa uma rota.
    - `/styles`: Arquivos de estilização globais (ex: `theme.ts` com cores, fontes, espaçamentos).
    - `/utils`: Funções utilitárias genéricas (ex: formatadores de data, validadores).

### 3. Convenções de nomenclatura

- **Variáveis e Funções:** `camelCase`
- **Componentes React Native e Telas:** `PascalCase`
- **Constantes e Chaves de Armazenamento:** `UPPER_SNAKE_CASE`
- **Pastas de Componentes/Telas:** `PascalCase`
- **Estilos (StyleSheet):** `camelCase`

### 4. Nomenclatura de branches

- *feature/nome-da-branch:* Branch para desenvolver novas funcionalidades.
- *experiment/nome-da-branch:* Branch para testar funcionalidades ou soluções que não necessariamente irão para a produção.
- *bugfix/nome-da-branch:* Branch para correção de erros.

### 5. Nomenclatura de commits

Não "economize" commits, dessa forma é sempre possível voltar para um estado passado do código, como um checkpoint.
- `feat:` Adição de uma nova funcionalidade.
- `fix:` Correção de um bug.
- `chore:` Tarefas de build, configuração de bibliotecas, etc. (ex: `eas.json`, `babel.config.js`).
- `docs:` Alterações na documentação (ex: no README).
- `style:` Alterações de formatação (ESLint, Prettier).
- `refactor:` Refatoração de código que não corrige um bug nem adiciona um recurso.
- `test:` Adicionando ou corrigindo testes.
