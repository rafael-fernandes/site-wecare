import React from 'react';
import { Container, Button } from 'react-bootstrap';
import SolutionStep from './SolutionStep.js';
import step1 from './../images/step-1.svg';
import step2 from './../images/step-2.svg';
import step3 from './../images/step-3.svg';
import plataforma from './../images/plataforma.png';

const Solution = () => {
  const steps = [
    {
      icon: step1,
      text: [
        "Entendemos a estratégia, cultura",
        <br />,
        "e desafios da empresa"
      ]
    },
    {
      icon: step2,
      text: [
        "Unimos conhecimento estratégico em RH",
        <br />,
        "e gamificação para criar soluções."
      ]
    },
    {
      icon: step3,
      text: [
        "Entregamos um catálogo de ofertas",
        <br />,
        "alinhado ao perfil e necessidades",
        <br />,
        "do público."
      ]
    }
  ]

  const listSolutionSteps = steps.map((step, index) => <SolutionStep key={index} icon={step.icon} text={step.text} />)

  return (
    <>
      <div className="Solution">
        <Container>
          <h2 className="Solution__title">
            Apoiamos sua empresa criando soluções
            <br />
            únicas de engajamento de colaboradores
          </h2>

          <div className="Solution__steps">
            { listSolutionSteps }
          </div>

          <Button href="/demo" variant="outline-success" className="Solution__cta">Quero saber mais</Button>
        </Container>

        <img src={plataforma} alt="Plataforma WeCare" className="Solution__platform" />
      </div>
    </>
  );
}

export default Solution;
