# Boas vindas ao repositório do projeto de WS Work Sales!

---

### Instalando:

1. Clone o repositório
 
2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto e clique no link correspondente a porta que abrir (geralmente porta 3000):
    * `npm run dev` 


---

## Sobre o projeto

Projeto trata-se de uma aplicação front-end desenvolvida em NextJs e ReactJs com o objetivo de ser um site de compras dividido em categorias, produtos mais buscados e página de login da administração para adicionar ou remover produtos numa lista de produtos. Além do mais, o sistema conta com armazenamento local para manter dados de produtos adicionados caso o usuário saia e retorne a aplicação posteriormente. 

---

### Sobre o desenvolvimento

  - Projeto desenvolvido solo.

  - Duração: 4 dias.
  

## Desenvolvimento

## APIs

### Mercado Libre API

O Mercado Libre API é um banco de dados aberto, mantido pelo Mercado Livre contendo produtos reais e seus detalhes, os mesmos contidos no site de vendas.

Os end-points são bastante ricos, podendo ser para categorias, produtos ou detalhes de produtos

### Rotas

As rotas utilizadas na aplicação foram:

* Tela princial: `/`;
* Tela de administrador: `/admPage`;

### `localStorage`

O uso de `localStorage` foi necessário para que as informações fossem mantidas caso a pessoa atualize a página.

# Funcionalidades do projeto

Nesse projeto, a pessoa que estiver utilizando o app pode escolher em as categorias disponíveis, clicar nelas e produtos são renderizados na tela, sendo um produto principal ao topo e uma listagem grande de outros produtos no carrosel alocado a baixo. Além do mais, dois produtos aleatórios são mostrados mais a baixo, também. 

## Formulário de Login

* A pessoa deve conseguir escrever seu email no input de email.

* A pessoa deve conseguir escrever sua senha no input de senha.

* O formulário só fica válido após um email válido e uma senha com mais de 1 caracterer for preenchida, para então habilitar o botão de login. 

# Tela de Administrador

* Nela a pessoa usuária administradora poderá adicionar produtos com seus espectivos preços ao banco de dados interno da aplicação, ficandos salvos no LocalStorage. 

* Caso seja necessário editar ou apagar algum produto, também é possível. 

* Há também um aside com um link de Logout que leva a pessoa usuária de volta à tela inicial. 

---

## Acesse aqui: <a href="https://sales-page-ws-work-sistemas.vercel.app/">WS Shop</a>
