const { ApolloServer, gql } = require('apollo-server-lambda')
const faunadb = require('faunadb')
q = faunadb.query

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Lolly {
    recipientName: String!
    sendersName: String!
    message: String!
    flavorTop: String!
    flavorMid: String!
    flavorBot: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly(
      recipientName: String!
      sendersName: String!
      message: String!
      flavorTop: String!
      flavorMid: String!
      flavorBot: String!
      lollyPath: String!
    ): Lolly
  }
`

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello, world!'
    },
  },
  Mutation : {
    createLolly : (_ , args) => {
      console.log(args);
    } 
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
