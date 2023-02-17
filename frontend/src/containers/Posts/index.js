import React, { useEffect } from 'react'
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllposts } from '../../actions';
import Layout from '../../components/Layout'

export default function Posts() {

  const allThePost = useSelector(state => state.allPost);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllposts());
  }, []);

  const renderPost = () => {

    let c = allThePost.allPosts.posts;

    console.log(c.length);
  }


  return (

    !allThePost.allPosts.posts ?
      <h1>Add posts</h1>
      :
      (

        <div>
          <Layout>
            <Container>

              <Row style={{ marginTop: '80px' }}>

                <Col md={{ span: 6, offset: 3 }}>


                  {allThePost.allPosts.posts.map((post) => (

                    <Card style={{ width: '35rem', margin: '20px' }}>
                      <Card.Body>
                        <Card.Title> {post.title} </Card.Title>
                        <Card.Text>
                          {post.message}
                        </Card.Text>
                        {/* <Button variant="primary"> LINK </Button> */}
                      </Card.Body>
                    </Card>
                    
                  ))}

                  <br />
                  <Card style={{ width: '35rem', margin: '20px' }}>
                    <Card.Body>
                      <Card.Title>Binary Search Question</Card.Title>
                      <Card.Text>
                        Find whether an element is present or not in the sorted array !!
                      </Card.Text>
                      {/* <Button variant="primary"> LINK </Button> */}
                    </Card.Body>
                  </Card>


                </Col>
              </Row>

            </Container>
          </Layout>

        </div>
      )
  )
}
