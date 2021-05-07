/**
 * @type {import("@gqless/cli").GQlessConfig}
 * */

const config = {
  react: true,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    endpoint: 'http://localhost:4001/graphql',
    headers: {},
  },
  destination: 'web-react/src/gqless/index.js',
  subscriptions: false,
  javascriptOutput: true,
}

module.exports = config
