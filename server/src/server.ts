import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express() // Instância do Express

app.use(cors())
app.use(express.json()) // Uso do formato 'json'
app.use(routes)

app.listen(3333)

/*  Métodos HTTP:
        GET: Buscar ou listar uma informação
        POST: Criar alguma nova informação
        PUT: Atualizar uma informação existente
        DELETE: Deletar uma informação existente
*/

/*  Query Params:
        Corpo (Request Body): Dados para criação ou atualização de um registro
        Route Params: Identificar qual recurso eu quero atualizar ou deletar
        Query Params: Paginação, filtros e ordenaçã
*/