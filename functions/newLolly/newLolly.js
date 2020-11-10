const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb")
q = faunadb.query

require("dotenv").config()

const client = new faunadb.Client({
  secret: process.env.DB_SECRET,
})

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
      return "Hello, world!"
    },
  },
  Mutation: {
    createLolly: async(_, args) => {
      try {
        const result = await client.query(
          q.Create(q.Collection("lolly"), {
            data: args,
          })
        )
        console.log(result.ref.id)
        return result.data
      } catch (error) {
        return error.toString()
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
