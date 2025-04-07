# ALFA TASK BOARD 

Este projeto desenvolvi com [Angular CLI](https://github.com/angular/angular-cli) version 17.3.14. E mostra um site com páginas de login e cadastro para acesso a um Board de Tarefas, ajudando os usuários a organizar e gerenciar suas atividades de forma eficiente. 

## Recursos

Página de Login: Permite que os usuários façam login no sistema com suas credenciais.

Página de Cadastro: Oferece um formulário para criar uma conta com validações personalizadas.

Board de Tarefas: Exibe tarefas organizadas em categorias, com opções para adicionar e excluir tarefas.

## 📋 Estrutura do Projeto

### Paginas

login: Página de autenticação do usuário.

signup: Página de registro de novos usuários.

user: Board principal para gerenciamento de tarefas.

### Componentes

AddTaskComponent: Componentes do formulario de tarefas.

ButtonComponent: Resposavel por enviar novas tarefas a listagem de tarefas.

DefautLoginLayoutComponent: Layout padrão para as páginas de login e cadastro.

PrimaryInputsComponent: Componentes reutilizáveis para inputs do formulário.

HeaderComponent: Componente responvel pelo titulo da pagina user.

TaskItemComponent: Componentes responvel por excluir e marca como concluido as tarefas.

TasksComponent: Componente responvel por exibir as tarefas

### Serviços:

AuthGuardService: Serviço que verifica se os usuarios possuem autenticação para o acesso da pagina user onde encontra-se o Board de Tarefas

LoginService: Serviço para autenticação de usuários e integração com API.

TaskService: Serviço que envia as novas tarefas para o banco teste db.json.





## 📂 Imagens do Projeto
<p align ="center">
  <img src="./assets/img/Captura de Tela (72).png" alt="Página Login" width="350"/> 
  <img src="./assets/img/Captura de Tela (73).png" alt="Erro de usuario não autentificado" width="350"/>
  <img src="./assets/img/Captura de Tela (74).png" alt="Página de Cadastro" width="350"/>
  <img src="./assets/img/Captura de Tela (75).png" alt="Mensagem de Usuario cadastrado" width="350"/>
    <img src="./assets/img/Captura de Tela (76).png" alt="Página User / usuario já autentificado" width="350"/>
    <img src="./assets/img/Captura de Tela (77).png" alt="Listagem de Tarefas" width="350"/>
    <img src="./assets/img/Captura de Tela (80).png" alt="Erro ao tentar adicionar uma tarefa sem informa-la no formulario." width="350"/>
    <img src="./assets/img/Captura de Tela (81).png" alt="Mensagem de sucesso ao adicionar uma tarefa." width="350"/>
    
</p>

## Inspiração
   <img src="./assets/img/Captura de Tela (78).png" alt="Site figma de inspiração para o meu projeto" width="350"/>
    
