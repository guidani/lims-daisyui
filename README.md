# Site LIMS

## Como configurar o projeto (localmente)

- Requisitos: `NodeJS 18+`

- Instalar dependencias: `$ pnpm` ou `$ npm install` ou `$ yarn`

- Rodar o projeto: `$ pnpm dev` ou `$ yarn dev` ou `npm run dev`

## Como configurar o CMS (Hygraph)

- Criar um arquivo `.env.local` e copiar o conteúdo do arquivo `.env.local.example` para ele.

- Criar uma conta no site `https://app.hygraph.com/` e criar um novo projeto com o nome que quiser.

- Ao entrar no projeto clique em `project settings` no menu lateral esquerdo, depois em `Public Content API` no menu que vai abrir. Após isso clique no botão `Yes, initialize defaults`. Após isso clique em `Permanent auth tokens` no menu lateral esquerdo e depois clique no botão `+ add token`, dê um nome para o token, clique na opção `Published` e depois em `add & configure permissions`, na nova página que aparecer clique em `Yes, initialize defaults` nas caixas de `Content Permissions` e `Management API Permissions`.

- Agora clique em `API Access` no menu lateral esquerdo e copie o conteúdo do item `Content API` e atribua o valor da variável de ambiente `NEXT_PUBLIC_HYGRAPH_URL` no arquivo `.env.local` para ele.

### Configurando os 'Schemas' no Hygraph

- Clique em `Schema` no menu lateral e depois em `+add` ao lado de `Models` e dê um nome para o schema, importante que ele fique no singular, e depois clique em `ADD`.

- Para configurar o Schema, arraste os items do menu lateral direito para o meio. Abaixo tem a descrição de quais Schemas precisam ser criados e as configurações de cada campo.

---

Nome do schema: Evento

Campos: 

1. title
- display name: title
- Field option: marcar `use title as field`
- Em `Validations`: marcar `Make field required`, `Limit character count` e selecione `Not more then` e atribua o valor de `100`, em `Custom error message` adicione a mensagem de erro que quiser.
2. slug
- Display name: slug
- Marcar a opção `Generate slug from template`, no campo `Slug template` digitle `title`.
- Marcar a opção `Lowercase`
- Em `Validations`, marcar as opções: `Make field required`, `Set field as unique` e `Match a specific pattern`
3. imagem
- Display name: imagem
4. resumo
- Display name: Resumo
- Em `Validations`, `Limit character count` e selecione `Not more then` e atribua o valor de `999`, em `Custom error message` adicione a mensagem de erro que quiser.
5. conteudo
- Display Name: conteudo
- Embeds: após criar todos os Schemas, edite esse schema para adicionar os demais models neste campo.

---

Nome do schema: postagem

Campos: 

1. title
- display name: title
- Field option: marcar `use title as field`
- Em `Validations`: marcar `Make field required`, `Limit character count` e selecione `Not more then` e atribua o valor de `100`, em `Custom error message` adicione a mensagem de erro que quiser.
2. slug
- Display name: slug
- Marcar a opção `Generate slug from template`, no campo `Slug template` digitle `title`.
- Marcar a opção `Lowercase`
- Em `Validations`, marcar as opções: `Make field required`, `Set field as unique` e `Match a specific pattern`
3. imagem
- Display name: imagem
4. resumo
- Display name: Resumo
- Em `Validations`, `Limit character count` e selecione `Not more then` e atribua o valor de `999`, em `Custom error message` adicione a mensagem de erro que quiser.
5. conteudo
- Display Name: conteudo
- Embeds: após criar todos os Schemas, edite esse schema para adicionar os demais models neste campo.

---

Nome do schema: Limsimagens

Campos: 

1. title
- display name: title
- Marcar a opção: `Use as title field`
- Em `Validations`: marcar `Make field required`, `Limit character count` e selecione `Not more then` e atribua o valor de `100`, em `Custom error message` adicione a mensagem de erro que quiser.
3. imagem
- Display name: imagem
- Em `Validations`, marcar a opção `make field required`

## Configuração Vercel

- Após subir o projeto na Vercel, ir na página do projeto, clicar e, `Settings` > `Environment Variables` e adicionar as variáveis de ambiente necessárias.