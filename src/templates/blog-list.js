import React from 'react'
import { graphql, Link } from 'gatsby'
import BlogPost from '../components/BlogPost'
import Layout from '../components/Layout'

export default function BlogListTemplate({ data, pageContext }) {
    // Generate the previous and next page URLs.
    const previousPage =
        pageContext.currentPage === 2
            ? '/blog'
            : `/blog/${pageContext.currentPage - 1}`

    const nextPage = `/blog/${pageContext.currentPage + 1}`
    return (
        <Layout>
            <main>
                {data.allMarkdownRemark.edges.map(node => (
                    <BlogPost
                        key={node.node.id}
                        slug={node.node.fields.slug}
                        title={node.node.frontmatter.title}
                        date={node.node.frontmatter.date}
                        excerpt={node.node.excerpt}
                    />
                ))}
            </main>
            <div>
                {pageContext.currentPage > 1 && (
                    <Link to={previousPage}>Previous Page</Link>
                )}
                {pageContext.currentPage < pageContext.pageCount && (
                    <Link to={nextPage}>Next Page</Link>
                )}
            </div>
        </Layout>
    )
}

// The page query.
export const query = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { contentKey: { eq: "blog" } } }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM D, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`
