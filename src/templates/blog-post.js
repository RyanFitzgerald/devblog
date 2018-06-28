import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'

import Container from '../components/Container';
import Card from '../components/Card';
import Article from '../components/Article';
import ArticleHeader from '../components/ArticleHeader';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    console.log(post);
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <Container>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Card>
          <ArticleHeader>
            {post.frontmatter.featuredImage &&
              <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes}/>
            }
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <span></span>
          </ArticleHeader>
          <Article>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Article>
        </Card>
        
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}

        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </Container>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp{
            sizes(maxWidth: 850) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
