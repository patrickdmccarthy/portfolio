module.exports = {
  siteMetadata: {
    title: "Patrick McCarthy",
    titleTemplate: "%s · Freelance Software Developer",
    description:
      "Freelance Software Developer in Berlin",
    author: `Patrick McCarthy`,
    url: "https://patrickmccarthy.io", // No trailing slash allowed!
    image: "./static/monogram.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@p8rickmccarthy",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-139561909-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patrick McCarthy`,
        short_name: `PM`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#342e1e`,
        display: `minimal-ui`,
        icon: `src/images/circle.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
