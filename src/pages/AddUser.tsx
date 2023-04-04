import React from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div>
      <h1>Добавление пользователя</h1>
      <Container className="mt-5">
        <Link to="/">
          <Button variant="outline-info">Вернуться к списку</Button>
        </Link>
        <Form className="mt-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control placeholder="username"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="password"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control placeholder="first name"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control placeholder="last name"/>
          </Form.Group>
          <Form.Select className="mb-3" aria-label="Default select example">
            <option>Roles</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select className="my-3" aria-label="Default select example">
            <option></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Button variant="primary" type="submit">Добавить</Button>
        </Form>
      </Container>

    </div>
  );
};

export default AddUser;