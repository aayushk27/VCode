import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Header'

export default function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
        </>

    )
}
