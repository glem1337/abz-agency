import React from 'react';
import ManLaptopSvg from './components/ManLaptopSvg';
import {Col, Container, Row} from "react-bootstrap";

const AboutMe = () => (
    <section id="about-me" className="about-me container">

        <h2 className="about-me__title h1 text-center">Let's get acquainted</h2>
        <Container>
            <Row>
                <Col md={'5'}>
                    <ManLaptopSvg/>
                </Col>
                <Col md={'7'}>
                    <div className="about-me__wrapper-content"
                         data-aos="fade-right"
                         data-aos-duration="800">
                        <h3 className="about-me__subtitle h2">I am cool frontend developer</h3>
                        <p
                            className="about-me__text"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            When real users have a slow experience on mobile, they&apos;re much
                            less likely to find what they are looking for or purchase from you in
                            the future. For many sites this equates to a huge missed opportunity,
                            especially when more than half of visits are abandoned if a mobile
                            page takes over 3 seconds to load.
                        </p>
                        <p
                            className="about-me__text"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            Last week, Google Search and Ads teams announced two new speed
                            initiatives to help improve user-experience on the web.
                        </p>
                        <a className="about-me__button" href="#register">
                            Sign up now
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className="about-me__wrapper-img-content">


        </div>
    </section>
);

export default AboutMe;
