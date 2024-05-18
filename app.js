//app é o arquivo responsavel para especificar o que vai ser usado
//na aplicação como bibliotecas de desenvolvimento como também na
//estruturação como rotas, middlewares, conexão com bd etc..

import dotenv from 'dotenv' //serve para usar utilizar um arquivo com informações sensiveis
dotenv.config()

import './src/database'

import express from 'express'
import homeRoutes from './src/routes/homeRoutes'
import userRoutes from './src/routes/userRoutes'

class App {
  constructor() {

    this.app = express();
    this.middlewares();
    this.routes();

  }

  middlewares() {

    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())

  }

  routes(){
    this.app.use('/',homeRoutes)
    this.app.use('/users/',userRoutes)
  }
}

export default new App().app
