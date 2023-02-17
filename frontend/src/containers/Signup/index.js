import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { signup } from '../../actions';
import Layout from '../../components/Layout'
import Input from '../../components/UI/input'

import { isUserLoggedIn, login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Signup() {

    const [ firstName , setFirstName ] = useState('');
    const [ lastName , setLastName ] = useState('');
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');

    const auth = useSelector(state => state.auth);

    const user = useSelector(state => state.user);


    const dispatch = useDispatch();

    const userRegister = (e) => {

        e.preventDefault();

        const user = {
            firstName,
            lastName,
            email,
            password
        }

        dispatch(signup(user));
        
    }

    if (auth.authenticate) {
        return <h1> User Already Logged In !! </h1>
    }

    return (
        <div>
            <Layout>
                <Container >

                    <Row style={{ marginTop: '80px' }}>

                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>

                                <Row>
                                    <Col md='6'>
                                        <Input
                                            label="First Name"
                                            placeholder="First Name"
                                            value={firstName}
                                            type="text"
                                            onChange={ (e) => setFirstName(e.target.value) }
                                        />
                                    </Col>

                                    <Col md='6'>
                                        <Input
                                            label="Last Name"
                                            placeholder="Last Name"
                                            value={lastName}
                                            type="text"
                                            onChange={ (e) => setLastName(e.target.value) }
                                        />
                                    </Col>
                                </Row>

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
                                <Button  onClick={userRegister}  variant="primary" type="submit">
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
