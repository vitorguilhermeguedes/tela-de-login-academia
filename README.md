# Projeto Tela de Login (Frontend com React)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Este repositório contém o código-fonte para o **frontend** de uma aplicação de tela de login. A interface foi desenvolvida com React e Vite, focando em uma experiência de usuário limpa e funcional.

Esta aplicação foi projetada para interagir com uma API de backend (desenvolvida separadamente em C#) para realizar a autenticação do usuário.

## 🖼️ Demonstração

<img width="1366" height="610" alt="tela de login academia" src="https://github.com/user-attachments/assets/2f0ee04d-3372-4cef-a16e-2e722a8d9b89" />


## ✨ Funcionalidades

-   Campos de entrada para email e senha com ícones.
-   Validação de campos obrigatórios.
-   Botão "Lembre-se de mim" e link para "Esqueceu a senha?".
-   Integração com API para autenticação de credenciais.
-   Feedback visual simples para o usuário após a tentativa de login.
-   Estrutura de componentes reutilizável.

## 🚀 Tecnologias Utilizadas

-   **React:** Biblioteca para construção da interface de usuário.
-   **Vite:** Ferramenta de build para um desenvolvimento rápido e otimizado.
-   **JavaScript:** Linguagem de programação principal.
-   **CSS:** Para estilização dos componentes.
-   **react-icons:** Biblioteca para inclusão de ícones SVG.

## ⚙️ Como Rodar o Projeto Localmente

Para executar este projeto em sua máquina local, siga os passos abaixo.

### Pré-requisitos

Você vai precisar ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) e o `npm` instalados.

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/](https://github.com/)[SEU-USUARIO-GITHUB]/[NOME-DO-REPOSITORIO].git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd [NOME-DO-REPOSITORIO]
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute a aplicação:**
    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` (ou o endereço que aparecer no seu terminal).

## 🔌 Conexão com o Backend

Este projeto é apenas o **frontend** e não funcionará completamente sem sua contraparte, o **backend**.

-   A lógica de autenticação (verificação de email e senha) é responsabilidade da API.
-   A chamada para a API é feita no arquivo `src/components/Login/Login.jsx`, na função `handleSubmit`.
-   Para que o login funcione, certifique-se de que o projeto do backend (a API em C#) esteja rodando localmente (geralmente em um endereço como `http://localhost:5001`).

## 👨‍💻 Autor

Feito com ❤️ por **[Vitor Guedes]**.

Entre em contato:

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vitorguilhermeguedes/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vitorguilhermeguedes)
