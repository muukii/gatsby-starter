import React from "react"
import { Link, graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO from "../components/seo"

type Props = {
  data: any
  pageContext: any
} & PageProps

export default (props: Props) => {
  const post = props.data.mdx
  const body = post.body as string
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  console.log(post)

  return (
    <div>
      <SEO title={post.frontmatter.title} /> <h1> {post.frontmatter.title} </h1>{" "}
      <MDXRenderer children={body} />
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {" "}
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              {" "}
              ←{previous.frontmatter.title}{" "}
            </Link>
          )}{" "}
        </li>{" "}
        <li>
          {" "}
          {next && (
            <Link to={next.fields.slug} rel="next">
              {" "}
              {next.frontmatter.title}→{" "}
            </Link>
          )}{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
      }
      body
    }
  }
`
