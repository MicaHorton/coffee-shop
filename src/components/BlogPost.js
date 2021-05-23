import React from 'react';
import Card from '../styles/Card.js';

const BlogPost = ({ title, date, excerpt }) => {
    return (
        <Card>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{excerpt}</p>
        </Card>
    );
}

export default BlogPost;