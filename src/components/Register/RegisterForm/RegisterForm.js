import React from "react";
import {Form} from "react-bootstrap";
import {Field, reduxForm} from 'redux-form'
import {Input, RadioGroup, FileInput} from "../../common/FormControls/FormControls";
import validator from '../../../utils/validators/validators';
import Loading from "../../common/Loading/Loading";

const RegisterForm = ({
                          handleSubmit,
                          positions,
                          onRadioInputChange,
                          onFileInputChange,
                          positionId,
                          photoFileName,
                      }) => (
    <Form className={'form'} onSubmit={handleSubmit}>

        <Form.Group className={'form__group'}>
            <Form.Label htmlFor={'form__name'}>Name</Form.Label>
            <Field
                id={'form__name'}
                className={'form__name form__control'}
                name={'name'}
                type={'text'}
                placeholder={'Your name'}
                validate={validator.name}
                component={Input}
            />
        </Form.Group>

        <Form.Group className={'form__group'}>
            <Form.Label htmlFor={'form__email'}>Email</Form.Label>
            <Field
                id={'form__email'}
                className={'form__email form__control'}
                name={'email'}
                type={'email'}
                placeholder={'Your email'}
                validate={validator.email}
                component={Input}
            />
        </Form.Group>

        <Form.Group className={'form__group'}>
            <Form.Label htmlFor={'form__phone'}>Phone number</Form.Label>
            <Field
                id={'form__phone'}
                className={'form__phone form__control'}
                name={'phone'}
                type={'phone'}
                placeholder={'+380 XX XXX XX XX'}
                text={'Еnter phone number in open format'}
                validate={validator.phone}
                component={Input}
            />
        </Form.Group>

        <Form.Group className={'form__group'}>
            <Form.Label>Select your position</Form.Label>
            {positions.length === 0 && <Loading/>}
            {positions.length > 0 && (
                <Field
                    className={'form__checkbox'}
                    name={'position'}
                    type={'radio'}
                    validate={validator.position}
                    fields={positions}
                    onChange={onRadioInputChange}
                    component={RadioGroup}
                    selected={positionId}
                />
            )}
        </Form.Group>

        <Form.Group className={'form__group form__group--photo'}>
            <Form.Label htmlFor={'form__file'}>Photo</Form.Label>
            <Field
                id={'form__file'}
                className={'form__file form__control'}
                name={'photo'}
                type={'file'}
                label={photoFileName}
                accept={'image/jpeg,image/jpg'}
                component={FileInput}
                onChange={onFileInputChange}
                validate={validator.photo}
            />
        </Form.Group>

        <Form.Group className={'text-center'}>
            <button className={'form__button button'} type="submit">
                Sing up now
            </button>
        </Form.Group>
    </Form>
);

export default reduxForm({
    form: 'register'
})(RegisterForm);