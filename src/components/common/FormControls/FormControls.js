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
};

export const RadioGroup = ({meta: {touched, error}, ...props}) => {
    return (
        <>
            {props.fields.map(position => (
                <Form.Check
                    key={`position-${position.value}`}
                    id={position.value}
                    {...props.input}
                    className={props.className}
                    custom
                    type={props.type}
                    label={position.label}
                    value={position.value}
                    checked={+position.value === +props.selected}
                />
            ))}
            {touched && error && (
                <Form.Text className="form__error form__text">
                    {error}
                </Form.Text>
            )}
        </>
    )
};