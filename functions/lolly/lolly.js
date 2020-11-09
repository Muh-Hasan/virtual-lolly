const { ApolloServer, gql } = require("apollo-server-lambda")

const faunadb = require("faunadb")
q = faunadb.query
const shortid = require("shortid")
require("dotenv").config()

const client = new faunadb.Client({
  secret: process.env.DB_SECRET,
})

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Lolly {
    recipentName: String!
    message: String!
    senderName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    path: String!
  }
  type Mutation {
    createLolly(
      recipentName: String!
      message: String!
      senderName: String!
      flavourTop: String!
      flavourMiddle: String!
      flavourBottom: String!
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
    createLolly: async (_,args) => {
      console.log(args);
      // try {
      //   const id = shortid.generate()
      //   args.path = id
      //   console.log(args);
      //   const result = await client.query(
      //     q.Create(q.Collection("lolly"), {
      //       data: args,
      //     })
      //   )
      //   console.log(result.ref.id)
      //   return result.data
      // } catch (error) {
      //   return error.toString()
      // }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
