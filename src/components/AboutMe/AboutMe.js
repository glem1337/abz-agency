import React from 'react';
import ManLaptopSvg from './ManLaptop/ManLaptopSvg';
import {Col, Container, Row} from "react-bootstrap";

const AboutMe = () => (
    <section id="about-me" className="about-me">
        <Container>
            <h2 className="about-me__title h1 text-center">Let's get acquainted</h2>
            <Row>
                <Col md={'5'}>
                    <ManLaptopSvg/>
                </Col>
                <Col className="about-me__wrapper-content"
                     md={'7'}
                     data-aos="fade-right"
                     data-aos-duration="800"
                >
                    <h3 className="about-me__subtitle h2">I am cool frontend developer</h3>
                    <p
                        className="about-me__text"
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        We will evaluate how clean your approach to writing CSS and Javascript code is. You can use
                        any CSS and Javascript 3rd party libraries without any restriction.
                    </p>
                    <p
                        className="about-me__text"
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will
                        get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as
                        well. Slice service directory page P​SD mockup​ into HTML5/CSS3.
                    </p>
                    <a className="about-me__button" href="#register">
                        Sign up now
                    </a>
                </Col>
            </Row>
        </Container>
        <div className="about-me__wrapper-img-content">


        </div>
    </section>
);

export default AboutMe;
