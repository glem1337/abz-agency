import React from 'react';
import Header from '../Header/HeaderContainer';
import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Users from "../Users/UsersContainer";
import Register from "../Register/RegisterContainer";
import Footer from "../Footer/Footer";

export default class App extends React.Component {
    state = {};

    componentDidMount() {
        AOS.init({offset: 80});
    }

    render() {
        return (
            <>
                <Header/>
                <main>
                    <Banner/>
                    <AboutMe/>
                    <Users/>
                    <Register/>
                </main>
                <Footer/>
            </>
        );
    }
}
