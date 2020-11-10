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
        url: "https://virtuallolly-serverless.netlify.app/.netlify/functions/newLolly",
      },
    },
  ],
}
