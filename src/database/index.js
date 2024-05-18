// O index do database serve para a conexão com banco de dados
// ele pega todas as tabelas ou classes e faz uma conexão todas
// as tabelas e importa para o app.

import Sequelize from "sequelize";
import databaseConfig from '../config/database'
import Aluno from '../models/Aluno'
import User from "../models/User";


const models = [Aluno,User]

const connection = new Sequelize(databaseConfig)

models.forEach(model => model.init(connection))
