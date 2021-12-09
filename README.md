# Node-TS API Template.

## Purpose.
* A simple Typescript API written in Node that can be used as a starter in multiple API application usecase scenarios.

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


















