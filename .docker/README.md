# Docker para Desenvolvimento

Esta pasta contém todos os arquivos relacionados ao Docker para o projeto.

## Arquivos

- `Dockerfile` - Imagem Docker para desenvolvimento
- `docker-compose.yml` - Orquestração do container

**Nota:** O arquivo `.dockerignore` fica no diretório raiz do projeto pois precisa estar no contexto de build do Docker.

## Como usar

### Com Docker Compose (Recomendado)

```bash
# A partir do diretório raiz do projeto
docker-compose -f .docker/docker-compose.yml up --build
```

### Com Docker apenas

```bash
# A partir do diretório raiz do projeto
docker build -t frontend-dev -f .docker/Dockerfile .
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules frontend-dev
```

## Acesso

Após iniciar, o aplicativo estará disponível em:

- <http://localhost:5173>

## Features

- Hot reload habilitado
- Volume mapping para desenvolvimento
- Otimizado com .dockerignore
- Baseado em Node.js 20 Alpine (leve)
