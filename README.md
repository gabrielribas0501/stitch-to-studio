# Stitch to Studio

Contexto

Estou trabalhando em um projeto existente no Antigravity.

Dentro deste projeto existe uma pasta que foi exportada do Stitch. Essa pasta contém o material visual/interface que deverá servir como referência para a implementação do frontend.

Quero transformar esse projeto em uma aplicação completa, organizada e escalável, utilizando:

Frontend: React + TypeScript

Backend: NestJS + TypeScript

Arquitetura: Clean Architecture

Frontend e Backend desacoplados

Código profissional, modular, testável e preparado para evolução.

OBJETIVO PRINCIPAL

Analise primeiro toda a estrutura atual do projeto e a pasta exportada do Stitch.

Não comece simplesmente criando arquivos.

Primeiro:

Entenda a estrutura existente.

Identifique a pasta exportada pelo Stitch.

Analise os componentes, páginas, estilos, assets, imagens, ícones e demais elementos existentes.

Identifique quais partes representam apenas protótipo/visual e quais podem ser reutilizadas.

Entenda o fluxo da aplicação.

Identifique as entidades e regras de negócio necessárias.

Só então defina a arquitetura e comece a implementação.

A implementação final deve preservar fielmente o design criado no Stitch, mas transformá-lo em uma aplicação real e funcional.

REGRA IMPORTANTE SOBRE O STITCH

A pasta exportada do Stitch deve ser tratada como referência visual e funcional do frontend.

Não quero simplesmente copiar código desorganizado do Stitch.

Quero:

reutilizar assets quando fizer sentido;

reproduzir fielmente o layout;

manter espaçamentos;

manter tipografia;

manter cores;

manter responsividade;

manter componentes visuais;

manter estados visuais;

manter navegação;

manter hierarquia das páginas.

Porém, o código final deve ser refatorado para uma arquitetura React profissional.

Se o código exportado estiver desorganizado, duplicado ou acoplado, reorganize-o.

Não sacrifique qualidade arquitetural apenas para reaproveitar o código exportado.

ARQUITETURA GERAL

Estruture o projeto de forma semelhante a:

project/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── infrastructure/
│   │   ├── domain/
│   │   ├── shared/
│   │   ├── routes/
│   │   └── main.tsx
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── domain/
│   │   ├── application/
│   │   ├── infrastructure/
│   │   ├── presentation/
│   │   ├── shared/
│   │   ├── config/
│   │   └── main.ts
│   ├── test/
│   ├── package.json
│   └── ...
│
├── README.md
└── ...


Adapte essa estrutura à complexidade real do projeto.

Não crie pastas ou abstrações sem necessidade.

CLEAN ARCHITECTURE — BACKEND

O backend deve utilizar Clean Architecture, mantendo separação clara entre:

Domain

Responsável pelas regras de negócio.

Exemplos:

domain/
├── entities/
├── value-objects/
├── repositories/
├── services/
└── errors/


As entidades de domínio não devem depender de NestJS, banco de dados, HTTP ou frameworks externos.

Application

Responsável pelos casos de uso da aplicação.

Exemplo:

application/
├── use-cases/
├── dtos/
├── services/
└── ports/


Cada caso de uso deve possuir uma responsabilidade clara.

Exemplo:

CreateUserUseCase
GetUserUseCase
UpdateUserUseCase
DeleteUserUseCase


Os use cases não devem conhecer detalhes de implementação do banco de dados.

Infrastructure

Responsável pelas implementações concretas.

Exemplo:

infrastructure/
├── database/
├── repositories/
├── orm/
├── http/
├── external-services/
└── config/


Interfaces definidas no domínio/application devem ser implementadas aqui.

Presentation

Responsável pelo NestJS e exposição da API.

Exemplo:

presentation/
├── controllers/
├── http/
├── guards/
├── pipes/
├── interceptors/
└── modules/


Controllers devem ser finos.

A regra de negócio não deve ficar dentro dos controllers.

NESTJS

Utilize os recursos do NestJS de maneira profissional.

Utilizar quando fizer sentido:

Modules

Controllers

Providers

Dependency Injection

Guards

Pipes

Interceptors

Exception Filters

DTOs

Validation

ConfigModule

Swagger/OpenAPI

Evite colocar lógica de negócio diretamente nos controllers.

Use Dependency Injection para conectar interfaces às implementações concretas.

BANCO DE DADOS

Primeiro analise o domínio e determine quais dados realmente precisam ser persistidos.

Se o projeto já possuir uma tecnologia de banco/ORM configurada, preserve-a quando fizer sentido.

Caso ainda não exista uma definição, utilize uma solução moderna e bem integrada ao NestJS, preferencialmente:

PostgreSQL

Prisma

A camada de domínio não deve depender diretamente do Prisma.

A implementação do Prisma deve ficar na infraestrutura.

API

Crie uma API REST organizada.

Utilize:

HTTP methods corretamente;

status codes apropriados;

DTOs;

validação;

tratamento consistente de erros;

paginação quando necessário;

filtros quando necessário;

respostas previsíveis.

Exemplo conceitual:

GET    /api/resource
GET    /api/resource/:id
POST   /api/resource
PATCH  /api/resource/:id
DELETE /api/resource/:id


Não crie endpoints desnecessários.

FRONTEND

O frontend deve ser construído em:

React

TypeScript

componentes reutilizáveis

arquitetura modular

código tipado

separação entre UI, domínio e infraestrutura.

Utilize uma estrutura baseada em features quando isso fizer sentido.

Exemplo:

features/
├── auth/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── domain/
│   └── types/
│
├── users/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   └── types/


Componentes genéricos devem ficar separados dos componentes específicos de uma feature.

COMPONENTES

Crie componentes reutilizáveis.

Evite:

componentes gigantes;

arquivos com centenas de linhas;

lógica de negócio dentro de componentes visuais;

duplicação de código;

prop drilling excessivo;

lógica de API espalhada pela aplicação.

Prefira:

Button
Input
Modal
Card
Table
Dropdown
Form
Layout
Sidebar
Header


e componentes específicos das features quando necessário.

ESTADO

Escolha a estratégia de gerenciamento de estado de acordo com a necessidade real da aplicação.

Não introduza Redux ou outra solução global apenas. crie esse sistema com base nesse prompt que eu ja tenho, use as imagens que esta no zip como referencia

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1998009b-38a7-4a37-9345-a4bf8da6a9e9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
