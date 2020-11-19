import express from 'express'
import {join} from 'path'
import {graphqlHTTP} from 'express-graphql'
import {addResolversToSchema} from '@graphql-tools/schema'
import {loadSchemaSync} from '@graphql-tools/load'
import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader'

import resolvers from './src/resolvers'

const uuid = require('uuid')
const session = require('express-session')

const schema = loadSchemaSync(join(__dirname, './schema.graphql'), {loaders: [new GraphQLFileLoader()]})
const app = express()

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'hello..is..it..me..you..are..looking..for',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true},
  genid: uuid.v4
}))

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers
})

app.use(
  '/graphql',
  graphqlHTTP(req => ({
    schema: schemaWithResolvers,
    context: {req: req},
    graphiql: true,
  }))
)

const host = process.env.host || 'localhost'
const port = process.env.port || 8000

app.listen(port, host, () => {
  console.debug(`Server is running at http://${host}:${port}`)
})

export default app
