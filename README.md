# Node-TS API Template.

## Purpose.
* A simple Typescript API written in Node that can be used as a starter in multiple API application usecase scenarios. We will be using:
1. Express - For API SetUp
1. TypeORM - For our PostgreSQL ORM interfacing with our app.
1. Docker Compose - To spin up our PostgreSQL and pgAdmin4 containers.

### SetUp.

```sh

npm init

npm i -S express
npm install -D typescript @types/express

tsc --init

```

* Setup package.json with your start scripts in dev env.

```sh
npm install -D ts-node-dev

* Dev environment running and watching script.
"dev": "node_modules/.bin/ts-node-dev --respawn --notify false --prefer-ts --ignore-watch node_modules -- src/app.ts "

```

* SetUp TypeOrm.
```sh

npm install -S typeorm reflect-metadata pg

npm install -D @types/node

```

** ormconfig.json

* This file contains metadata information needed by `TypeORM` before running the application. It contains database configuration information, and credentials, logging, entity and migration information.


# Running the application.

* Before running the app, ensure the containers are up and running, in order for you to create the `node_sample` DB over pgAdmin4 interface.

```sh
docker-compose up
```

* In order to login to the pgAdmin4 console, use the credentials provided in the docker-compose pgadmin container environment configs, to login and check your IP Address(on Linux using `ip a`), before proceeding as you will use this as a HostName to create a connection between pgAdmin4 container and PostgreSQL Container.

* After creating `node_sample` database or the database name in the ormconfig.json, start your application by running:


```sh
npm run dev
```
















