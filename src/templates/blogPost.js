import React from 'react'
import Link from 'gatsby-link'

export default function Template({data}){
  const post = data.markdownRemark
  return (
    <div className="Blog-Content">
      <Link to="/blog">Go Back</Link>
      <h1>{post.frontmatter.title}</h1>
      <h4>Posted By: {post.frontmatter.author} on {post.frontmatter.date}</h4>
      <div
        className="Blog-Content-Main" 
        dangerouslySetInnerHTML={{__html: post.html}} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: {path: {eq: $path}}){
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`