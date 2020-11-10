const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    {
      getAllLollies {
        lollyPath
      }
    }
  `)

  console.log(data)
  data.getAllLollies.forEach(({ lollyPath }) => {
    actions.createPage({
      path: `lollies/${lollyPath}`,
      component: path.resolve(`./src/components/dynamicLollyPage.tsx`),
      context: {
        lollyPath: lollyPath,
      },
    })
  })
}
