# Mock

Aplicação mock desenvolvida em nodejs, para executar o projeto independente do back-end.

## Pré-requisitos

- node v20.13.1
- Certifique-se que esteja tudo certo com o arquivo .env da raiz do projeto, instruções no README principal.

## Executar

Instale as dependências:

```
npm i
```

Transforma os arquivos ts em js, minifica e gera um único arquivo bundle:

```
npm run build
```

Inícia o servidor websocket local:

```
npm run dev
```

## Docker

- Executar **npm run build** antes de criar a imagem
- Sempre fazer esse processo quando fizer alterações no mock, alterando a versão da tag manualmente

Cria a imagem docker:

```
docker build -t mock-doce-fortuna:v1.0.0 .
```

- Necessário fazer login no docker antes, usar extensão VS Code
- O push também fica mais fácil pela extensão

Deploy da imagem para o docker hub

```
docker push <image_name>:<new_tag>
```

_Adicionar na plataforma onde o projeto for hospedado a variável de ambiente:_ **WEB_SOCKET_URL=wss://0.0.0.0:8080**

_Adicionar ao .env do projeto:_ **WEB_SOCKET_URL="wss://mock-doce-fortuna-v1-0-0.onrender.com"**

Executa a imagem como um container:

```
docker run --name mock-doce-fortuna --env-file ./../../.env -p 8080:8080 mock-doce-fortuna:v1.0.0
```
