module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "Lolly",
        // This is the field under which it's accessible
        fieldName: "Lollies",
        // URL to query from
        url: "http://localhost:8888/.netlify/functions/newLolly",
      },
    },
  ],
}
