import React from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const ContactComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Acerca de mí</h1>
              <h6 className="subtitle">
                MÉDICO CIRUJANO DE LA UNIVERSIDAD CENTRO OCCIDENTAL LISANDRO ALVARADO.BARQUISIMETO, ESTADO LARA VENEZUELA

                RESIDENCIA ASISTENCIAL EN GINECOLOGÍA Y OBSTETRICIA HOSPITAL PATROCINIO PEÑUELA RUIZ . SAN CRISTÓBAL , VENEZUELA .

                ESPECIALISTA EN GINECOLOGÍA Y OBSTÉTRICÍA , ILUSTRE UNIVERSIDAD DE LOS ANDES , MERIDA , ESTADO MÉRIDA , VENEZUELA

                EJERCÍ EN EL ÁMBITO DE MI ESPECIALIDAD TANTO EN MEDIO PRIVADO COMO PÚBLICO DURANTE 18 AÑOS .
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact1">
        <Row>
          <Container>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Contáctanos</h4>
                    <Form>
                      <Row>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="nombre" />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="email" />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="textarea"
                              name="text"
                              placeholder="mensaje"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              {" "}
                              Enviar <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="detail-box p-40 bg-info">
                    <h2 className="text-white">Datos de contacto</h2>
                    <p className="text-white m-t-30 op-8">
                      +56 9 6807 7891
                      <br /> drjuliorojasortega@gmail.com
                    </p>
                    <p className="text-white op-8">
                      Edificio Baquedano - esquina, Benavente, Baquedano
                      <br /> Puerto Montt, Chile
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
    </div>
  );
};

export default ContactComponent;
