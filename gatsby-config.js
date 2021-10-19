module.exports = {
  pathPrefix: "/shpe_gpc_react",
  siteMetadata: {
    title: "SHPE - GPC",
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `eventinfo`,
        path: `${__dirname}/eventinfo`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `board`,
        path: `${__dirname}/board`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `student_chapter_logos`,
        path: `${__dirname}/src/images/student_chapter_logos`,
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
  ],
};
