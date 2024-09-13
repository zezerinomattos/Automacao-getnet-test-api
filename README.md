# Projeto de Testes de API com Cypress

## Visão Geral

Este projeto contém uma suíte de testes de API utilizando o Cypress. O Cypress é uma ferramenta moderna de teste para aplicações web, proporcionando uma abordagem poderosa e fácil de usar para realizar testes de integração e e2e (end-to-end).

### Funcionalidades

- Testes de API REST utilizando o Cypress.
- Estrutura de projeto organizada para facilitar manutenção e refatoração.
- Testes cobrem criação de usuários, validação de status codes, campos obrigatórios e contratos.

## Estrutura do Projeto

```plaintext
cypress
└── e2e
    └── api
        └── user.spec.js
    └── support
        ├── commands.js
        └── e2e.js
└── fixtures
    └── user.json
cypress.config.js
package.json
README.md
```

## Descrição dos Arquivos e Diretórios
cypress/e2e/api/user.spec.js: Contém os testes para a API de criação de usuários. Inclui validações para status code, campos obrigatórios e contratos da API.

cypress/support/commands.js: Arquivo para definir comandos personalizados do Cypress, se necessário.

cypress/support/e2e.js: Carrega o arquivo de comandos personalizados e configurações globais para os testes.

cypress/fixtures/user.json: Contém dados de teste estáticos para uso nos testes.

cypress.config.js: Configurações do Cypress, incluindo a URL base da API e padrões de busca para arquivos de teste.

package.json: Define as dependências do projeto e scripts para executar os testes.

### Configuração do Projeto
Pré-requisitos
Certifique-se de que o Node.js e o npm estão instalados em sua máquina.

### Instalação
Clone o repositório do projeto:

1 - Clone o repositório do projeto:
``` git clone git@github.com:zezerinomattos/Automacao-getnet-test-api.git ```

2 - Navegue até o diretório do projeto:
``` cd Automacao-getnet-test-api ```

3 - Instale as dependências do projeto:
``` npm install ```

### Configuração
O arquivo de configuração do Cypress (cypress.config.js) está pré-configurado com a URL base da API. Não é necessário alterar as configurações padrão, a menos que a URL da API ou o padrão de busca dos arquivos de teste precise ser modificado.

### Executando os Testes
Testes em Modo Headless
Para executar os testes em modo headless (sem interface gráfica), use o seguinte comando:
``` npm test ```

### Testes com Interface Gráfica
Para abrir o Cypress com a interface gráfica e executar os testes interativamente, use o comando:
``` npm run open ```

### Estrutura dos Testes
Os testes estão localizados em cypress/e2e/api/user.spec.js. Este arquivo contém:

Teste de Criação de Usuário: Envia uma solicitação POST para a API para criar um usuário e valida a resposta, incluindo o status code e os campos obrigatórios.

### Adicionando Novos Testes
Para adicionar novos testes:

### Crie um novo arquivo com a extensão .spec.js no diretório cypress/e2e/api/.
Escreva os testes utilizando a API do Cypress. Consulte a documentação do Cypress para mais detalhes sobre a API e as melhores práticas de teste.
