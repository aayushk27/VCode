import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../components/Layout'

export default function Home() {
    return (
        <div>
            <Layout>
                <Container style={ {margin : '5rem'} } className='text-center'>

                    <h1>Welcome to vCode</h1>
                    <hr></hr>
                    <p>Social Media Website For COMPETITIVE PROGRAMMERS </p>
                    <p> <b>SHARE DISCUSS GROW </b></p>
                    <hr></hr>
                    <p> Read posts of other Competitive Progarmmers !! </p>
                    <p> Post the questions you solved to help others !! </p>
                    <p> Move to <b>signin/signup</b> section to post </p>
                    <hr></hr>
                </Container>
            </Layout>

        </div>
    )
}
