# ALFA TASK BOARD 🚀

Este projeto desenvolvi utilizando o Angular CLI versão 17.3.14. Ele apresenta um site com páginas de login e cadastro para acesso a um Board de Tarefas, ajudando os usuários a organizar e gerenciar suas atividades de forma eficiente.

## 🌟 Recursos

Página de Login: 🔑 Permite que os usuários façam login no sistema com suas credenciais.

Página de Cadastro: 📝 Oferece um formulário para criar uma conta com validações personalizadas.

Board de Tarefas: 🗂️ Exibe tarefas organizadas em categorias, com opções para adicionar 🟢 e excluir 🔴 tarefas.

## 📋 Estrutura do Projeto

### 📁 Páginas

login: Página de autenticação do usuário.

signup: Página de registro de novos usuários.

user: Board principal para gerenciamento de tarefas.

### 🛠️ Componentes

AddTaskComponent: 📝 Responsável por exibir o formulário de tarefas.

ButtonComponent: 🟢 Envia novas tarefas para serem listadas no Board.

DefautLoginLayoutComponent: 📐 Layout padrão para as páginas de login e cadastro.

PrimaryInputsComponent: 🖍️ Componentes reutilizáveis para inputs do formulário.

HeaderComponent: ✨ Exibe o título da página principal (user).

TaskItemComponent: ✅ Responsável por marcar tarefas como concluídas ou excluir tarefas.

TasksComponent: 📂 Responsável por exibir todas as tarefas.

### 🔒 Serviços

AuthGuardService: 🚨 Protege rotas e verifica se os usuários possuem autenticação para acessar o Board de Tarefas.

LoginService: 🔑 Gerencia a autenticação de usuários e realiza integração com APIs.

TaskService: 📤 Envia novas tarefas para o banco de dados simulado (db.json) e organiza as tarefas listadas.




## 📂 Imagens do Projeto
<p>
  
  **Página de Login**  
  
  <img src="src/assets/img/Captura de Tela (72).png" alt="Página Login" width="350"/> 
  
  **Erro: Usuário não autenticado** 
  
  <img src="src/assets/img/Captura de Tela (73).png" alt="Erro de usuario não autentificado" width="350"/>
  
  **Página de Cadastro**  
  
  <img src="src/assets/img/Captura de Tela (74).png" alt="Página de Cadastro" width="350"/>

 **Mensagem de Sucesso: Cadastro Concluído** 
    
  <img src="src/assets/img/Captura de Tela (75).png" alt="Mensagem de Usuario cadastrado" width="350"/>

  **Página User: Painel Principal**  
  
  <img src="src/assets/img/Captura de Tela (76).png" alt="Página User / usuario já autentificado" width="350"/>
  
   **Listagem de Tarefas**  
   
  <img src="src/assets/img/Captura de Tela (77).png" alt="Listagem de Tarefas" width="350"/>
  
  **Erro: Falha ao Adicionar Tarefa**  
  
  <img src="src/assets/img/Captura de Tela (80).png" alt="Erro ao tentar adicionar uma tarefa sem informa-la no formulario." width="350"/>

  **Mensagem de Sucesso: Tarefa Adicionada**  
  
  <img src="src/assets/img/Captura de Tela (81).png" alt="Mensagem de sucesso ao adicionar uma tarefa." width="350"/>
    
</p>

### Site figma de inspiração para o meu projeto

   <img src="src/assets/img/Captura de Tela (78).png" alt="Site figma de inspiração para o meu projeto" width="500"/>
    
