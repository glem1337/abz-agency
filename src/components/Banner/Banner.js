import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Banner = () => (
    <section id={'banner'} className="banner">
        <Container>
            <Row>
                <Col md={'7'} className={'banner__inner'}>
                    <h1 className="banner__title">
                        Test assignment for Frontend Developer position
                    </h1>
                    <p className="banner__text">
                        We kindly remind you that your test assignment should be submitted as a link to github/bitbucket
                        repository. Please be patient, we consider and respond to every application that meets minimum
                        requirements. We look forward to your submission. Good luck! The photo has to scale in the
                        banner
                        area
                        on the different screens
                    </p>
                    <a className="banner__button button" href="#register">
                        Sign up now
                    </a>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Banner;
