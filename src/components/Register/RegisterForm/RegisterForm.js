import React from "react";
import {Form} from "react-bootstrap";
import {Field, reduxForm} from 'redux-form'
import {Input, RadioGroup} from "../../common/FormControls/FormControls";
import validator from '../../../utils/validators/validators';

const RegisterForm = ({
        handleSubmit,
        positions,
        onRadioInputChange,
        positionId,
    }) => (
    <Form className={'form'} onSubmit={handleSubmit}>

        <Form.Group>
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

        <Form.Group>
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

        <Form.Group>
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

        <Form.Group>
            <Form.Label>Select your position</Form.Label>

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

        </Form.Group>

        {/*

        <Form.Group>
            <Form.Label htmlFor={'form__email'}>Email</Form.Label>
            <Form.Control
                id={'form__email'}
                className={'form__email form__control'}
                isInvalid={error.email && true}
                name={'email'}
                type={'email'}
                placeholder={'Your email'}
            />
            {error.email && (
                <Form.Text className="form__error form__text">
                    The email must be a valid email address
                </Form.Text>
            )}
        </Form.Group>

        <Form.Group>
            <Form.Label htmlFor={'form__phone'}>Phone number</Form.Label>
            <Form.Control
                id={'form__phone'}
                className={'form__phone form__control'}
                isInvalid={error.phone && true}
                name={'phone'}
                type={'phone'}
                placeholder={'+380 XX XXX XX XX'}
            />
            <Form.Text className={`form__text ${error.phone && 'form__error'}`}>
                {!error.phone && 'Еnter phone number in open format'}
                {error.phone && 'User phone number, should start with code of Ukraine +380'}
            </Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Select your position</Form.Label>
            <Form.Check
                className={'form__checkbox'}
                custom
                type={'radio'}
                defaultChecked={false}
                label={'Frontend developer'}
                value={'Frontend developer'}
                id={1}
            />
            <Form.Check
                className={'form__checkbox'}
                custom
                type={'radio'}
                defaultChecked={false}
                label={'Backend developer'}
                value={'Backend developer'}
                id={2}
            />
            <Form.Check
                className={'form__checkbox'}
                custom
                type={'radio'}
                defaultChecked={false}
                label={'Designer'}
                value={'Designer'}
                id={3}
            />
            <Form.Check
                className={'form__checkbox'}
                custom
                type={'radio'}
                defaultChecked={false}
                label={'Designer'}
                value={'QA'}
                id={4}
            />
            {error.position && (
                <Form.Text className="form__error form__text">
                    Select your position
                </Form.Text>
            )}
        </Form.Group>

        <Form.Group>
            <Form.Label>Photo</Form.Label>
            <Form.File
                className={'form__file form__control'}
                id={'form__file'}
                label="Upload your photo"
                accept="image/jpeg,image/jpg"
                isInvalid={error.file && true}
                name={'photo'}
                type={'file'}
                custom
            />
            {error.file && (
                <Form.Text className="form__error form__text">
                    File format jpg up to 5 MB, the minimum size of 70x70px
                </Form.Text>
            )}
        </Form.Group>

        */}

        <Form.Group className={'text-center'}>
            <button className={'form__button button'} type="submit">
                Sing up now
            </button>
            {/*{(messageAfterAddUser !== 'New user successfully registered') && (
                <Form.Text className="form__error form__text">

                </Form.Text>
            )}*/}
        </Form.Group>

    </Form>
);

export default reduxForm({form: 'register'})(RegisterForm);