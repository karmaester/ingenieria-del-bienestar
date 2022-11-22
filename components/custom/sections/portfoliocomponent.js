/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import OtherServices from "./otherServices";
import Image from "next/image";
import img3 from "../../../assets/images/portfolio/n1.png";
import img5 from "../../../assets/images/portfolio/n13.jpg";
import img10 from "../../../assets/images/portfolio/n2.png";
import img11 from "../../../assets/images/portfolio/n9.png";
import img12 from "../../../assets/images/portfolio/n10.png";
import img16 from "../../../assets/images/portfolio/n3.png";

const PortfolioComponent = () => {
  return (
    <>
      <div>
        <div className="spacer bg-light" id="mission">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">Misión</h1>
                <h6 className="subtitle">
                  Prestar servicio  de salud femenina con un enfoque humano, integralista  y preventivo, tomando herramientas  de la medicina de los estilos de vida y de la medicina de la longevidad, sin abandonar las raíces de la ginecología clásica y con el sustento de la mejor evidencia .
                </h6>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="spacer" id="services">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h2 className="title">Servicios</h2>
              </Col>
            </Row>
            <Row className="m-t-40">
              <Col md="4">
                <Card className="card-shadow">
                  <a href="#" className="img-ho">
                    <Image
                      className="card-img-top"
                      src={img12}
                      alt="wrappixel kit"
                    />
                  </a>
                  <CardBody>
                    <h5 className="font-medium m-b-0">Ecografía obstétrica - Doppler obstétrico</h5>
                    <p className="m-b-0 font-14">Ecografía temprana del embarazo , screening semana 11-13 (Doppler) , ecografía anatómica fetal semana 22-24 con Doppler de
                      arterias uterinas , ecografías volumétricas (3D) , cervicometría</p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-shadow">
                  <a href="#" className="img-ho">
                    <Image
                      className="card-img-top"
                      src={img3}
                      alt="wrappixel kit"
                    />
                  </a>
                  <CardBody>
                    <h5 className="font-medium m-b-0">
                      Consulta ginecológica
                    </h5>
                    <p className="m-b-0 font-14">Examen físico general. Examen ginecológico. Toma de citología cervicouterina (PAP). Solicitud de exámenes pertinentes. Prescripción de acuerdo a necesidades específicas.</p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-shadow">
                  <a href="#" className="img-ho">
                    <Image
                      className="card-img-top"
                      src={img10}
                      alt="wrappixel kit"
                    />
                  </a>
                  <CardBody>
                    <h5 className="font-medium m-b-0">Consulta de control prenatal</h5>
                    <p className="m-b-0 font-14">Control rutinario de embarazo. Exámenes de laboratorio. Recomendaciones de acuerdo a las necesidades en cada trimestre. Ecografia básica mensual en cada control. Detección de embarazos de alto riesgo. Recomendaciones para el parto.</p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-shadow">
                  <a href="#" className="img-ho">
                    <Image
                      className="card-img-top"
                      src={img16}
                      alt="wrappixel kit"
                    />
                  </a>
                  <CardBody>
                    <h5 className="font-medium m-b-0">Climaterio y menopausia</h5>
                    <p className="m-b-0 font-14">Atención de los síntomas relacionados con el climaterio. Recomendaciones de estilo de vida.  Pesquisa y prevención de enfermedades prevalentes. Terapia de reemplazo hormonal.</p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-shadow">
                  <a href="#" className="img-ho">
                    <Image
                      className="card-img-top"
                      src={img11}
                      alt="wrappixel kit"
                    />
                  </a>
                  <CardBody>
                    <h5 className="font-medium m-b-0">Cirugía ginecólogica</h5>
                    <p className="m-b-0 font-14">Histerectomía , cirugía de prolapsos , esterilización quirúrgica, laparotomía. Ninfoplastia , rejuvenecimiento vaginal, vaporización
                      de verrugas</p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-shadow">
                  <a href="#" className="img-ho">
                    <Image
                      className="card-img-top"
                      src={img5}
                      alt="wrappixel kit"
                    />
                  </a>
                  <CardBody>
                    <h5 className="font-medium m-b-0">Ecografía Ginecológica,</h5>
                    <p className="m-b-0 font-14">Ecografia Transvaginal y pélvica trans abdominal.</p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <OtherServices />
    </>
  );
};

export default PortfolioComponent;
