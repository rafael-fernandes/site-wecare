import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const Ebook = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className="Ebook"
        size="lg"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          Buscando novas maneiras de engajar o time
          <div className="d-md-block d-none"></div> e aumentar a performance do
          seu negócio?
          <div className="Ebook__subtitle">E-book</div>
          <div className="Ebook__title">
            5 PASSOS PARA CRIAR SUA ESTRATÉGIA
            <div className="d-md-block d-none"></div> DE GAMIFICAÇÃO E
            ENGAJAMENTO
          </div>
          Baixe o e-book e descubra como a
          <div className="d-md-block d-none"></div> Gamificação pode te ajudar
          nesses desafios!
          <Form className="Ebook__form form-inline justify-content-center pb-3">
            <Form.Group>
              <Form.Control type="email" name="email" placeholder="Digite seu email" className="Ebook__input" required></Form.Control>
            </Form.Group>

            <Button type="submit" variant="warning" className="Ebook__submit">
              Baixar e-book
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Ebook;
