import { makeAugmentedSchema, inferSchema } from "neo4j-graphql-js";
import neo4j from 'neo4j-driver';
import fs from 'fs'
import path from 'path'

const uri = process.env.NEO4J_URI || 'bolt://localhost:7687',
const user = process.env.NEO4J_USER || 'neo4j',
const password = process.env.NEO4J_PASSWORD || 'letmein'

const driver = neo4j.driver(uri,neo4j.auth.basic(user, password));

const schemaInferenceOptions = {
  alwaysIncludeRelationships: true
};

inferSchema(driver, schemaInferenceOptions).then(result => {
  fs.writeFile('infer_schema.graphql', result.typeDefs, err => {
    if (err) throw err;
    console.log("Updated schema.graphql");
    process.exit(0);
  });
});