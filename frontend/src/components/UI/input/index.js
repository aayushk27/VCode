import React from 'react';
import { Form } from 'react-bootstrap';

export default function Input(props) {
    return (
        <Form.Group className="mb-3" >
            <Form.Label> {props.label} </Form.Label>
            <Form.Control
                type={props.type}
                placeholder={`Enter ${props.placeholder}`}
                value={props.value}
                onChange={props.onChange}
            />

        </Form.Group>
    )
}
