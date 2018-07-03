import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data}) => (
  <div className="Blog">
    <h1 className="Blog-Welcome">Welcome to the blog page</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div className="Blog-Test" key={post.node.id}>
        <h3 className="Blog-Title">{post.node.frontmatter.title}</h3>
        <small>
          Posted by: {post.node.frontmatter.author} on {post.node.frontmatter.date}
        </small>
        <br/>
        <br/>
        <Link
          to={post.node.frontmatter.path}>Read More</Link>
        <br/>
        <br/>
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage