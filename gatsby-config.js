/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Phil's Blog`,
    description: `Self tracking my learning`,
    keywords: `gatsby, react, gatsbyjs, bootstrap, wordpress, learning project`,
    image: `/static/gatsby.jpg`,
    url: `https://www.gatsbyjs.org/`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `philslearningblog.wordpress.com`,
        protocol: `http`,
        hostingWPCOM: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Phil's learning blog`,
        short_name: `LearningBlog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`
      }
    },
    `gatsby-plugin-offline`,
  ]
};


