import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Post = props => (
  <div className="col-lg-4 col-md-6 col-xs-12 p-3">
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
        <Card.Text>
          <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
        </Card.Text>
        <Button variant="primary" href={props.readMore}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  </div>
);

export default Post;