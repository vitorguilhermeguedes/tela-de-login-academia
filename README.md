# Projeto Tela de Login (Frontend com React)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

Este repositório contém o código-fonte para o **frontend** de uma aplicação de tela de login, desenvolvida com React e Vite.

## 🚀 Aplicação em Produção

O site está no ar e pode ser acessado através do seguinte link:

**[https://tela-de-login-academia.onrender.com/](https://tela-de-login-academia.onrender.com/)**

<img width="1366" height="610" alt="tela de login academia" src="https://github.com/user-attachments/assets/0e4241df-347b-41c1-8b9a-dc7a588e80d6" />


## 🏛️ Arquitetura do Projeto

Esta aplicação é dividida em duas partes: o frontend (este repositório) e o backend. O backend é responsável por toda a lógica de autenticação e validação.

➡️ **[Repositório do Backend (GitHub)](https://github.com/vitorguilhermeguedes/tela-de-login-academia-backend)**

## ✨ Funcionalidades

-   Interface de login limpa e responsiva.
-   Campos de entrada para email e senha.
-   Integração com uma API backend para autenticação de credenciais.
-   Feedback visual para o usuário após a tentativa de login.

## 🔌 Conexão com o Backend

A URL da API é configurada através de uma **Variável de Ambiente** (`VITE_API_URL`) na plataforma de hospedagem (Render), permitindo que a aplicação se conecte ao backend correto sem expor a URL no código-fonte.

## 🛠️ Desenvolvimento Local

Para executar este projeto em sua máquina local, siga os passos abaixo.

1.  **Pré-requisitos:**
    * [Node.js](https://nodejs.org/) (versão 18 ou superior)

2.  **Passos:**
    ```bash
    # Clone o repositório
    git clone [https://github.com/vitorguilhermeguedes/tela-de-login-academia.git](https://github.com/vitorguilhermeguedes/tela-de-login-academia.git)

    # Navegue até a pasta do projeto
    cd tela-de-login-academia

    # Instale as dependências
    npm install

    # Execute a aplicação em modo de desenvolvimento
    npm run dev
    ```
    *Lembre-se de que para o login funcionar localmente, você também precisará estar rodando o backend na sua máquina.*

---

## 👨‍💻 Criador

Criado por **Vitor Guedes**.

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
