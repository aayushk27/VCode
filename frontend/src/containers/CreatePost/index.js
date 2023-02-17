import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/input'
import { isUserLoggedIn, login , postM } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function CreatePost() {

  
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState(''); 

    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const postMessage = (e) => { // e --> event 

        e.preventDefault();
 
        const post = {
            title,
            message
        }

        dispatch(postM(post));

    }

    

    return (
        <div>
            <Layout>
                <Container >
                    <Row style={{ marginTop: '80px' }}>

                        <Col md={{ span: 6, offset: 3 }}>
                            <h3> Enter Your Post </h3>
                            <Form>
                                <Input
                                    label="Title"
                                    placeholder="Title"
                                    value={title}
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                />

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label> Message </Form.Label>
                                    <Form.Control as="textarea" rows={3}

                                        placeholder="Enter Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}

                                    />
                                </Form.Group>


                                <Button onClick={ postMessage } variant="primary" type="submit">
                                    Submit
                                </Button>

                            </Form>


                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
