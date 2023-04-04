import React from 'react';
import { UserCard } from "../component";
import './index.scss'
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='home'>
      <h1>Список пользователей</h1>
      <Container style={{ marginTop: 50 }}>
        <Row>
          <Col><UserCard/></Col>
          <Col><UserCard/></Col>
          <Col><UserCard/></Col>
          <Col><UserCard/></Col>
          <Col><UserCard/></Col>
        </Row>
        <Link to='/add-user'>
          <Button variant='outline-primary' style={{ marginTop: 25 }}>Добавить пользователя</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Home;