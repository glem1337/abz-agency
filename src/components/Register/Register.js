import React from "react";
import RegisterForm from "./RegisterForm/RegisterForm";
import SuccessModal from "./SuccessModal/SuccessModal";
import {Col, Container, Row} from "react-bootstrap";

const Register = ({handleSubmit, modalShow, handleCloseModal, modalTitle, modalMessage, ...props}) => (
    <section id="register" className="register">
        <h2 className="register__title h1 text-center">Register to get a work</h2>
        <Container>
            <Row className={'justify-content-md-center'}>
                <Col className={'register__form'} md={'8'} lg={'6'}>
                    <p className="register__subtitle text-center">
                        Attention! After successful registration and alert, update the list of users in the block from
                        the top
                    </p>
                    <RegisterForm
                        {...props}
                        onSubmit={handleSubmit}
                    />
                    <SuccessModal
                        modalMessage={modalMessage}
                        show={modalShow}
                        onHide={handleCloseModal}
                    />
                </Col>
            </Row>
        </Container>
    </section>
);
export default Register