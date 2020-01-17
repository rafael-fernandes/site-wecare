import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <>
      <div className="ContactForm">
        <Form action="https://formspree.io/myyenkgz" method="POST">
          <input type="hidden" name="tipo_de_contato" value="Contato geral" />

          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" name="nome" required></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" required></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" name="telefone" required></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Telefone</Form.Label>
            <Form.Control as="textarea" rows="5" name="mensagem" required></Form.Control>
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
