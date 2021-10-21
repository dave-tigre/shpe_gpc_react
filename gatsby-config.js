module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: "SHPE-GPC",
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
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
        name: `localchapters`,
        path: `${__dirname}/localchapters`,
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
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/images/favicon.ico',
        appName: 'SHPE-GPC',
        background: '#fff',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false
        }
      }
    }
  ],
};
