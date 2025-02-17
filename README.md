# 🚀 API REST com Princípios SOLID em Node.js

Esta API REST foi desenvolvida utilizando **Node.js** e segue os **princípios SOLID**, garantindo um código modular, reutilizável e fácil de manter.

## 📌 O que são os Princípios SOLID? 🤔

**SOLID** é um conjunto de **cinco princípios de design de software** que tornam o código mais organizado e sustentável. Aqui está como eles foram aplicados no projeto:

1. **S - Single Responsibility Principle (SRP) - Princípio da Responsabilidade Única**
   - Cada classe e módulo tem **apenas um motivo para mudar**.
   - **Na API:**  
     - `CreateUserController.ts` **somente** trata a requisição.
     - `CreateUserUseCase.ts` **somente** contém a lógica de negócio.
     - `MailtrapMailProvider.ts` **somente** cuida do envio de e-mails.

2. **O - Open/Closed Principle (OCP) - Princípio Aberto/Fechado**
   - O código deve ser **aberto para extensão, mas fechado para modificação**.
   - **Na API:**  
     - Podemos adicionar um novo provedor de envio de e-mails (ex: AWS SES) **sem modificar código existente**, apenas criando uma nova implementação do `IMailProvider`.

3. **L - Liskov Substitution Principle (LSP) - Princípio da Substituição de Liskov**
   - Uma classe filha deve poder substituir sua classe pai **sem quebrar o código**.
   - **Na API:**  
     - Criamos a interface `IMailProvider` e permitimos que `MailtrapMailProvider` e outros provedores sejam usados **sem alterar o código do caso de uso**.

4. **I - Interface Segregation Principle (ISP) - Princípio da Segregação de Interfaces**
   - Devemos criar **interfaces específicas** para cada necessidade, em vez de uma interface genérica.
   - **Na API:**  
     - `IMailProvider.ts` para envio de e-mails e `IUsersRepository.ts` para manipulação do banco de dados.

5. **D - Dependency Inversion Principle (DIP) - Princípio da Inversão de Dependência**
   - Módulos de alto nível **não devem depender de módulos de baixo nível**, mas de **abstrações**.
   - **Na API:**  
     - `CreateUserUseCase.ts` **não depende diretamente do banco de dados**, mas de `IUsersRepository`.

---

## 🏗 **Arquitetura do Projeto**
