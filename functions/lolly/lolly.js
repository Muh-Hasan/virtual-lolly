const { ApolloServer, gql } = require('apollo-server-lambda')

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
  type Mutations{
    createLolly(recipentName: String! ,message: String!,senderName: String!,flavourTop: String!,flavourMiddle: String!,flavourBottom: String!): Lolly
  }
`

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello, world!'
    },
  },
  Mutations : {
    createLolly: (_ , args) => {
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
