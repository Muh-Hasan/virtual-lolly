const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
  query MyQuery {
    lollies {
      getAllLollies {
      lollyPath
      }
    }
  }
  `)

  console.log(data)
  data.lollies.getAllLollies.forEach(({ lollyPath }) => {
    actions.createPage({
      path: `lollies/${lollyPath}`,
      component: path.resolve(`./src/components/dynamicPage/index.tsx`),
      context: {
        lollyPath: lollyPath,
      },
    })
  })
}
