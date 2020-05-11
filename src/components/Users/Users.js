import React from 'react';
import Loading from '../common/Loading/Loading';
import User from "./User/User";
import {Col, Container, Row} from "react-bootstrap";

const Users = ({usersList, nextUrl, handleNextUsersList, isFetching, error}) => (
    <section id="users" className="users">
        <Container>
            <h2 className="users__title h1">Our cheerful users</h2>
            <p className="users__subtitle">
                Attention! Sorting users by registration date
            </p>
            <Row>
                {usersList &&
                usersList.map(user => (
                    <Col key={`user-item-${user.id}`} md={'4'}>
                        <User user={user}/>
                    </Col>
                ))}
            </Row>
            {isFetching && <Loading/>}
            {error && <div className="users__error">{error}</div>}
            {nextUrl && (
                <button
                    type="button"
                    className={`users__button button ${isFetching && 'button--disabled'}`}
                    disabled={isFetching && true}
                    onClick={handleNextUsersList}
                >
                    Show more
                </button>
            )}
        </Container>
    </section>
);

export default Users;
