/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/testimonial/1.jpg";
import img2 from "../../../assets/images/testimonial/2.jpg";
import img3 from "../../../assets/images/testimonial/3.jpg";

const TestimonialComponent = () => {
  return (
    <div>
      <div className="testimonial3 spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Testimonios</h1>
              <h6 className="subtitle">
                Conoce la perspectiva de nuestras pacientes.
              </h6>
            </Col>
          </Row>
          <Row className="testi3 m-t-40 justify-content-center">
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “Doctor muy profesional, atento y muy claro en sus explicaciones. Puntual en la atención, y dedica el tiempo necesario a explicar.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <Image src={img1} alt="wrapkit" className="circle" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Daniela</h6>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “Buen médico amable y explica muy bien cual quier duda. Volvería de nuevo hasta lograr mi objetivo lo recomiendo.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <Image src={img2} alt="wrapkit" className="circle" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Oshun</h6>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “Excelente Dr y profesional, lo recomiendo siempre, habla y explica con claridad el tratamiento a seguir.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <Image src={img3} alt="wrapkit" className="circle" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Gabriela Martinez</h6>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TestimonialComponent;
