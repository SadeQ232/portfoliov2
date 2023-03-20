module.exports = {
  siteMetadata: {
    title: `Septian Librianto - Portfolio`,
    description: `Septian Librianto is a Google Associate Cloud Engineer Certified As a Devops Engineer Job Role with 2 year of hands-on experience supporting, optimizing, and automating mission-critical deployments in automated services. Leveraged configuration management, CI/CD, and critical DevOps processes. Specialized Build monitoring system infrastructure, System Logs using Prometheus, Promtail, Loki & Grafana.`,
    author: `@septian.librianto`,
    url: "https://www.septian-librianto.my.id",
    siteUrl: "https://www.septian-librianto.my.id",
    image: "/og.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
   `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Septian Librianto-Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-91344343-1",
      },
    },
  ],
}
