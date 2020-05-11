import React, {Component} from 'react';
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
                    custom
                    key={`position-${position.value}`}
                    id={`position-${position.value}`}
                    {...props.input}
                    className={props.className}
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


export class FileInput extends Component {

    onChange = e => {
        e.preventDefault();
        const {input: {onChange}} = this.props;
        let imageFile = e.target.files[0];
        if (imageFile) {
            const localImageUrl = URL.createObjectURL(imageFile);
            const imageObject = new window.Image();
            imageObject.onload = () => {
                imageFile.width = imageObject.naturalWidth;
                imageFile.height = imageObject.naturalHeight;
                onChange(imageFile);
                URL.revokeObjectURL(imageFile);
            };
            imageObject.src = localImageUrl;
        } else {
            onChange(imageFile);
        }
    };

    render() {

        let {meta: {touched, dirty, error}, input: {value}, ...props} = this.props;

        return (
            <>
                <Form.File
                    custom
                    {...props.input}
                    id={props.id}
                    className={props.className}
                    label={props.label}
                    onChange={this.onChange}
                    type={props.type}
                    accept={props.accept}
                    isInvalid={(dirty || touched) && error && true}
                />
                {(dirty || touched) && error && (
                    <Form.Text className="form__error form__text">
                        {error}
                    </Form.Text>
                )}
            </>
        )
    }
};
