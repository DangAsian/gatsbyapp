import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import './display.css'
import plant from '../images/plant.jpg'

class BlogPostTemplate extends React.Component {
  render() {
    const {
      title,
      body
    } = this.props.data.contentfulBlogPost
    return (
      <div className="container">
        <div className="picture-container">
          <img className="plant-image" src={plant}/>
        </div>
        <div className="content">
          <h1 className="blog-title">  { title } </h1>
          <div dangerouslySetInnerHTML = {{__html: body.childMarkdownRemark.html}} />
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
