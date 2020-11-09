const { ApolloServer, gql } = require("apollo-server-lambda")

const faunadb = require("faunadb")
const { argsToArgsConfig } = require("graphql/type/definition")
q = faunadb.query
const shortid = require("shortid")
require("dotenv").config()

const client = new faunadb.Client({
  secret: process.env.DB_SECRET,
})

const typeDefs = gql`
  type Query {
    hello: String
    allAuthors: [Author!]
    author(id: Int!): Author
    authorByName(name: String!): Author
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
      path: String!
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
      try {
        const id = shortid.generate()
        args.path = id
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
