import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout'
import Post from '../components/Post'
import { graphql } from 'gatsby'

export default ({ data }) => {
    console.log('data', data)
    return (
      <PrimaryLayout>
            {data.allWordpressPost.nodes.map(node => {
                return (
                    <Post
                        image={node.jetpack_featured_media_url}
                        title={node.title}
                        excerpt={node.excerpt}
                        readMore={node.slug}
                  />
                )
            })}
      </PrimaryLayout>
    )
}

export const query = graphql`
         {
  allWordpressPost {
    nodes {
      jetpack_featured_media_url
      slug
      title
      excerpt
    }
  }
}

       `