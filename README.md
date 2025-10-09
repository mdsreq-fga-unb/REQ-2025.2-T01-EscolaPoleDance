# REQ-2025.2-T01-EscolaPoleDance
Repositório de projeto da disciplina de REQ-T1 - 2025.2.

## 🛠️ Configuração e Instalação

Siga os passos abaixo para configurar e rodar o ambiente de desenvolvimento do projeto:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/mdsreq-fga-unb/REQ-2025.2-T01-EscolaPoleDance.git
    cd REQ-2025.2-T01-EscolaPoleDance
    ```
2. **Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:**
    * **[Docker](https://docs.docker.com/get-docker/)**: Essencial para criar e gerenciar os contêineres da aplicação.
        * *Recomendação:* Utilize um sistema operacional Linux ou o WSL (Windows Subsystem for Linux) no Windows para uma melhor experiência com Docker.
    * **[Docker Compose](https://docs.docker.com/compose/install/)**: Para orquestrar múltiplos contêineres Docker definidos no arquivo `docker-compose.yml`.

3.  **Construa as imagens Docker:**

    Este comando irá construir as imagens Docker definidas no seu `docker-compose.yml`. A flag `--no-cache` garante que as imagens sejam construídas do zero, sem utilizar o cache de builds anteriores, o que pode ser útil para evitar problemas com dependências desatualizadas.
    ```bash
    docker compose build --no-cache
    ```
    
## ▶️ Rodando a Aplicação

Após a configuração, você pode iniciar a aplicação com o Docker Compose:

1.  **Execute os contêineres Docker:**
    Este comando irá iniciar todos os serviços (contêineres) definidos no seu `docker-compose.yml` em modo "attached", mostrando os logs no terminal.
    ```bash
    docker compose up
    ```
    Para rodar em modo "detached" (em segundo plano), adicione a flag `-d`:
    ```bash
    docker compose up -d
    ```

2.  **Acesse a aplicação:**
    Após os contêineres estarem rodando, a aplicação estará acessível em:
    * `http://localhost:3000`
