import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlogList from '../components/BlogList'
import Layout from '../components/Layout'
import styles from './index.module.css'

export default function IndexPage() {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <Layout>
            <BlogList />
        </Layout>
    )
}
