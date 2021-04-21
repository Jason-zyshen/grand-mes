const neo4j = require('neo4j-driver')
const { inferSchema } = require('neo4j-graphql-js')
const fs = require('fs')

const driver = neo4j.driver(
  process.env.NEO4J_URI || 'bolt://localhost:7687',
  neo4j.auth.basic(
    process.env.NEO4J_USER || 'neo4j',
    process.env.NEO4J_PASSWORD || 'neo4j'
  )
)

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
