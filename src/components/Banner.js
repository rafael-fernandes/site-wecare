import React from 'react';
import { Container, Button } from 'react-bootstrap';
import illustration from '../images/ilustracao-banner.svg';

const Banner = () => {
  return (
    <>
      <div className="Banner">
        <Container className="Banner__container h-100">
          <div className="d-flex justify-content-between flex-column h-100">
            <div className="Banner__wrapper">
              <h1 className="Banner__title">
                Flexibilidade sem complexidade
                <br />
                para engajar o seu time
              </h1>

              <div className="Banner__description">
                Soluções em gamificação e incentivos corporativos<br />
                flexíveis para apoiar a sua empresa em seus desafios<br />
                de pessoas e negócios.
              </div>

              <Button href="/demo" variant="outline-success" className="Banner__cta">Quero saber mais</Button>
            </div>

            <img src={illustration} alt="Ilustração WeCare" className="Banner__illustration"/>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Banner;
