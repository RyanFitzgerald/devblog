# gatsby-starter-blog-no-styles
[Gatsby](https://www.gatsbyjs.org/) starter for creating a blog, without the CSS and typography included in the official [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog).

The gatsby-starter-blog makes some decisions about styling that you might not want (inline css, react-responsive-grid, gatsby-plugin-typography/compass-vertical-rhythm). 

In my case, I want to use [Styled Components](https://www.styled-components.com/) (which Gatsby also has a [plugin](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-styled-components) for), so I ousted the aforementioned libraries and styles first and thought this no-styles starter could be useful to others.

## Get Blogging

1) Install Gatsby-CLI

    `npm install --global gatsby-cli`

2) Create new Gatsby project using this starter

    `gatsby new my-gatsby-blog https://github.com/noahg/gatsby-starter-blog-no-styles`

3) Run Development Server

    `gatsby develop`

4) Add Posts
    
    See the example posts in the folder `src/pages` and use the same naming convention. e.g. `/2017-09-13-post-title/index.md`

5) Deploy

    Follow [the Gatsby docs](https://www.gatsbyjs.org/tutorial/part-one/#deploying-gatsbyjs-websites-on-the-web) for a super easy way to deploy using surge.sh  




