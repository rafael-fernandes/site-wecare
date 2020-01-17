import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <>
      <div className="ContactForm">
        <Form>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Telefone</Form.Label>
            <Form.Control as="textarea" rows="5"></Form.Control>
          </Form.Group>

          <Button type="submit" variant="success">
            Enviar mensagem
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
