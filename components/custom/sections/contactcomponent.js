import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import emailjs from '@emailjs/browser';

const ContactComponent = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Text, setText] = useState('');

  const doSubmit = () => {
    // const isValid = Validate();
    // if (isValid) {
    //    ------   rady ---------
    let templateParams = {
      from_name: Name,
      message: Text,
      mail: Email,
      phone: Phone
    };
    emailjs.send("service_1x7rg8r", "template_d70c6k5", templateParams, "user_0eNEICbpcRW7hebC8Y2c6")
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        // setModalIsOpen(true);
      }, function (error) {
        console.log('FAILED...', error);
      });
    // }
  }

  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Acerca de mí</h1>
              <h6 className="subtitle">
                <p>Médico cirujano de la Universidad Centro Occidental Lisandro Alvarado. Residencia asistencial en Ginecología y Obstetricia  Hospital Patrocinio Peñuela Ruiz. Especialista en Ginecología y Obstetricia , Ilustre universidad de los Andes. Venezuela.</p>
                <p>Maestría en Medicina de antienvejecimiento y longevidad .Instituto de formación continua Unversitat de Barcelona.</p>
                He desempeñado mi especialidad desde hace 22 años tanto en ámbito público como privado.
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
                          <button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                            onClick={() => doSubmit()}
                          >
                            <span>
                              {" "}
                              Enviar <i className="ti-arrow-right"></i>
                            </span>
                          </button>
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
                      Benavente  840. ( Edificio Baquedano piso 8 oficina 808)
                      <br /> Puerto Montt. Región de Los Lagos. Chile
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
