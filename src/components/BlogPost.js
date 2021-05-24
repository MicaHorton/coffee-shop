import React from 'react'
import Card from '../styles/Card.js'
import { Link } from 'gatsby'

const BlogPost = ({ title, date, excerpt, slug }) => {
    return (
        <Card>
            <h2>
                <Link to={slug}>{title}</Link>
            </h2>
            <h3>{date}</h3>
            <p>{excerpt}</p>
        </Card>
    )
}

export default BlogPost
