import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../styles/Card'

export default function BlogTemplate({ data }) {
    return (
        <Layout>
            <Card>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html
                    }}
                />
            </Card>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`
