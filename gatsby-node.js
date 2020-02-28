/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  console.log(
    "page.context.intl.language,",
    "/".concat(page.context.intl.language).concat("/")
  )
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: "/".concat(page.context.intl.language).concat("/"),
    },
  })
}

exports.createPages = async function({ graphql, actions }) {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      items: allContentfulCoffeeItem {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.items.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve("./src/templates/items.js"),
      context: { slug: node.slug },
    })
  })
}
