const neo4j = require('neo4j-driver')
const { inferSchema } = require('neo4j-graphql-js')
const fs = require('fs')

const uri = process.env.NEO4J_URI || 'bolt://localhost:7687'
const user = process.env.NEO4J_USER || 'neo4j'
const password = process.env.NEO4J_PASSWORD || 'letmein'

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))

const schemaInferenceOptions = {
  alwaysIncludeRelationships: true,
}

inferSchema(driver, schemaInferenceOptions).then((result) => {
  fs.writeFile('infer_schema.graphql', result.typeDefs, (err) => {
    if (err) throw err
    console.log('Updated schema.graphql')
    process.exit(0)
  })
})
