import React from 'react';
import {Form} from "react-bootstrap";

export const Input = ({meta: {touched, error}, ...props}) => {
    return (
        <>
            <Form.Control
                {...props.input}
                id={props.id}
                className={props.className}
                type={props.type}
                placeholder={props.placeholder}
                isInvalid={touched && error && true}
            />
            {(!touched || !error) && props.text && (
            <Form.Text className="form__text">
                {props.text}
            </Form.Text>
            )}
            {touched && error && (
                <Form.Text className="form__error form__text">
                    {error}
                </Form.Text>
            )}
        </>
    )
}