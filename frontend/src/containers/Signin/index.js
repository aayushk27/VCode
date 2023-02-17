import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/input'
import { isUserLoggedIn, login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Signin() {

    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');

    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();


    const userLogin = (e) => { // e --> event 

        e.preventDefault();
 
        const user = {
            email,
            password
        }

        dispatch(login(user));

    }


    return (
        <div>

            <Layout>
                <Container >
                    <Row style={{ marginTop: '80px' }}>

                        <Col md={{ span: 6, offset: 3 }}>
                            {
                                !auth.authenticate ? 
                            
                            <Form   >
                                <Input
                                    label="Email"
                                    placeholder="Email"
                                    value={email}
                                    type="email"
                                    onChange={ (e) => setEmail(e.target.value) }
                                />

                                <Input
                                    label="Password"
                                    placeholder="Password"
                                    value={password}
                                    type="password"
                                    onChange={ (e) => setPassword(e.target.value) }
                                />


                                <Button onClick={userLogin} variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                            : 
                            
                            <div>
                                <h1>
                                Log in sucessful!! 
                                </h1>
                                <hr />
                                <p>Move to <b>Create-Post</b> to create posts !!</p>
                                <p>Move to <b>Posts</b> to view posts !!</p>
                            </div>


                            }
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
