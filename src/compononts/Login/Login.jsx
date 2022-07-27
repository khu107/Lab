import React from "react";
import "../Login/style.css";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <Container style={{ marginTop: "200px" }}>
        <Row>
          <Col lg={4} md={5} sm={12}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="black" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={4} md={5} sm={12}></Col>
        </Row>
      </Container>
    </>
  );
}
