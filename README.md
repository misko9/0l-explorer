# 0L Blockchain Explorer

Explore 0L addresses and transactions

React webapp using next.js

## Setup

Install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)

## Launch Dev Environment

Set an active upstream node address in docker-compose.yml for `NODE_RPC_ADDRESS`

Launch Application

```bash
docker-compose up
```

Now browse to [http://localhost:3027](http://localhost:3027) in your browser

- Frontend files have hot reload.

- If changes are made to server-side files, re-launch docker container

```bash
docker-compose down
docker-compose up
```

## Re-build docker image

If node_modules are changed or Dockerfile is modified, re-build the image with:
```bash
docker-compose build
```

## Build for production

```bash
docker build --no-cache -t 0l-explorer .
```

Now distribute the `0lexplorer:latest` docker image to your desired container orchestration platform.
An example kubernetes template file is provided in [0l-explorer.yml](0l-explorer.yml).

Replace `$NODE_RPC_ADDRESS$` and `$CONTAINER_IMAGE$` in the template with valid values for the node to use for RPC calls, and the container repository URL, respectively.

It can be deployed with:

```bash
kubectl apply -f 0l-explorer.yml
```

## Donations

If you would like to contribute to this project financially, please send to one of the following addresses:

- 0L (GAS) - 4be425e5306776a0bd9e2db152b856e6
- Cosmos (ATOM) - cosmos1zq3r93gs6smvxvmflwwppe930p4wcrc7nwlcp0