module.exports = {
    siteMetadata: {
        title: "Serif",
        description: "my theme",
        contact: {
            phone: "XXX XXX XXX",
            email: "zerostaticthemes@gmail.com"
        }
    },
    plugins: [
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`
            }
        },
        `gatsby-plugin-sass`
    ]
}