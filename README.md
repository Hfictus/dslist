# DSList-Monorepo

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Hfictus/dslist/blob/main/LICENSE) 

# Sobre o projeto:

DSList-Monorepo é uma aplicação web Full-Stack construída a partir de projeto de Back-end, dsllist, anteriormente criado no evento Intensivão Java Spring, organizado pela DevSuperior em novembro de 2024. O DSList-Monorepo é um exercício de criação do projeto de Front-end e integração entre ele e o de Back-end em 2026.

No evento de 2024, abordou-se em linhas gerais relações entre Back-end e Front-end num contexto de aplicações web, considerando-se conceitos e tecnologias. 

Apresentou-se três perfis básicos de desenvolvimento: testes, com H2; homologação local, com PostgreSQL e aplicação de cliente opcional (como PgAdmin); e, produção, implantação em nuvem com Railway.
E apesar de não ter sido construído o Front-end, foram mostradas imagens de como o DSList poderia ser implementado em página web, considerando-se o sistema no Back-end.
No DSList-Monorepo, busca-se implementação do Front-end a partir de Mobile First, sendo feitas modificações no código e no layout.

## Stack
### Back-end
* Java
* Spring Boot

### Front-end
* React + Vite
* TypeScript
* Tailwind

### Banco de dados & infraestrutura
* H2 (test)
* PostgreSQL + PgAdmin (dev)
* Docker (ambiente de banco de dados)
* Node.js + Yarn (ambiente de desenvolvimento)

## Layout Mobile:
a ser feito

## Layout web:

A página inicial da aplicação permite acessar um conjunto de listas de jogos:
![Web 1]( https://github.com/Hfictus/images/blob/main/initialPageDSListApp.webp)

Clicando-se em Iniciar, acessa-se a página de menu de coleções de jogos:
![Web 2]( https://github.com/Hfictus/images/blob/main/collectionsPageDSListApp.webp)

Clicando-se sobre uma das listas, pode-se acessá-la:

![Web 3]( https://github.com/Hfictus/images/blob/main/gameListPageDSListApp.webp)

No projeto, implementa-se uma lógica que permite trocar os jogos de posição ao se clicar sobre um deles e arrastar sobre a posição de outro.

Clicando-se sobre um dos jogos, pode-se ver detalhes sobre ele:

![Web 4]( https://github.com/Hfictus/images/blob/main/exampleGameDSListApp.webp)

## Modelo conceitual (Back-end):

![domineModel]( https://github.com/Hfictus/images/blob/main/ModelDomainDSList.webp
)


## Como executar o projeto backend:

Para a execução do projeto backend para fins de testes, recomenda-se clonar o repositório ou fazer o download zip (descompactando-o); importar o projeto para a IDE; baixar PostgreSQL e PgAdmin ou DBeaver, ou criar uma rede de containers com docker-compose; e usar o Postman para simular requisições (pode ser necessário criar conta antes).

## Autor:

Gerson Klauck (Hfictus)


