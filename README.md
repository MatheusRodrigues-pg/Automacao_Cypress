# Cypress Automation Suite — BDD & Page Object Model

[![Cypress.io](https://img.shields.io/badge/Cypress-16.2.0-green.svg?style=flat&logo=cypress)](https://www.cypress.io)
[![Cucumber Preprocessor](https://img.shields.io/badge/BDD-Cucumber-blue.svg?style=flat&logo=cucumber)](https://github.com/badeball/cypress-cucumber-preprocessor)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow.svg?style=flat&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Robusta suíte de testes automatizados E2E (End-to-End) desenvolvida com **Cypress** e **Cucumber (BDD)**, aplicando o padrão arquitetural **Page Object Model (POM)**. O projeto valida os principais fluxos funcionais da plataforma [Automation Exercise](https://www.automationexercise.com/), servindo como demonstração de boas práticas em Quality Assurance e Engenharia de Testes Ágeis.

---

## 🚀 Principais Funcionalidades Testadas

* **Autenticação de Usuários**: Registro de novas contas, login com credenciais válidas/inválidas, exclusão de conta e logout.
* **Catálogo de Produtos**: Navegação por categorias, listagem de produtos e visualização de detalhes.
* **Busca de Produtos**: Pesquisa dinâmica e validação de resultados correspondentes.
* **Carrinho de Compras**: Adição de produtos, gerenciamento de itens e validação de preços, quantidades e subtotais.
* **Formulários e Suporte**: Envio de formulário de contato (`Contact Us`) com upload de arquivos.
* **Testes de API**: Validação de endpoints da aplicação.

---

## 🏛️ Arquitetura e Padrões de Projeto

O projeto foi estruturado para garantir **alta manutenibilidade, legibilidade e reusabilidade**:

* **Behavior-Driven Development (BDD)**: Especificações de teste escritas em linguagem natural (Gherkin) facilitando a colaboração entre QA, Desenvolvedores e Product Owners.
* **Page Object Model (POM)**: Separação clara entre a lógica dos testes (steps/features) e o mapeamento dos elementos de tela (page objects), facilitando a manutenção em caso de alterações na interface.
* **Resiliência e Sincronismo**: Uso de comandos assíncronos nativos do Cypress e tratamento tolerante de elementos dinâmicos (modais e overlays), eliminando falhas esporádicas (*flakiness*).

---

## 🛠️ Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/)** — Framework moderno de testes E2E.
* **[@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)** — Integração nativa do Cucumber/Gherkin com o Cypress.
* **[@faker-js/faker](https://github.com/faker-js/faker)** — Geração de dados dinâmicos para testes de cadastro.
* **[ESBuild](https://esbuild.github.io/)** — Pré-processador de alta performance para compilação rápida dos testes.

---

## 📋 Pré-requisitos

Antes de clonar e executar o projeto, certifique-se de ter instalado em sua máquina:
* **Node.js** (versão 18 ou superior recomendada)
* **npm** (gerenciador de pacotes do Node.js)

---

## ⚙️ Como Rodar o Projeto Localmente

1. **Clone o repositório**:
   ```bash
   git clone <https://github.com/MatheusRodrigues-pg/Repos.git>
   cd cypress-project
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Executar os testes em modo Headless (Linha de Comando)**:
   ```bash
   npx cypress run
   ```

4. **Executar os testes em modo Interativo (Cypress Test Runner)**:
   ```bash
   npx cypress open
   ```
   *Com o painel aberto, selecione **E2E Testing**, escolha o navegador de sua preferência e clique na feature desejada para acompanhar a execução em tempo real.*

