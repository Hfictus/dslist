# .DSList

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Hfictus/dslist/blob/main/LICENSE) 

# Sobre o projeto:

DSList é uma aplicação web Backend construída no evento Intensivão Java Spring, organizado pela DevSuperior em novembro de 2024.

No evento, abordou-se em linhas gerais relações entre Backend e Frontend num contexto de aplicações web, considerando-se conceitos e tecnologias. 

Apresentou-se três perfis básicos de desenvolvimento: testes, com H2; homologação, com PostgreSQL e aplicação de cliente opcional (como PgAdmin); e, produção, implantação em nuvem com Railway.

E apesar de não ter sido construído o Frontend, abaixo são mostradas imagens de como o DSList poderia ser desenvolvido, considerando-se o sistema no Backend.

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

## Modelo conceitual:

![domineModel](https://github.com/Hfictus/images/blob/main/DomineModelDSListApp.webp)

## Algumas tecnologias utilizadas:
Java

Spring Boot

JPA / hibernate

Maven

Postman

PostgreSQL, PgAdmin;

Docker

## Como executar o projeto:

Para a execução do projeto Backend para fins de testes, recomenda-se clonar o repositório ou fazer o download zip (descompactando-o); importar o projeto para a IDE; baixar PostgreSQL e PgAdmin ou DBeaver, ou criar uma rede de containers com docker-compose; e usar o Postman para simular requisições (pode ser necessário criar conta antes).

## Autor:

Gerson Klauck (Hfictus)


