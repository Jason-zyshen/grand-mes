const neo4j = require('neo4j-driver')
const { inferSchema } = require('neo4j-graphql-js')
const fs = require('fs')

const driver = neo4j.driver(
  'bolt://100.24.113.107:7687',
  neo4j.auth.basic('neo4j', 'cannon-reverse-navies')
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
