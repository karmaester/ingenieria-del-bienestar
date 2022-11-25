import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  FormGroup,
  Modal, ModalHeader, ModalBody
} from "reactstrap";
import emailjs from '@emailjs/browser';

const ContactComponent = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Text, setText] = useState('');

  const [NameError, setNameError] = useState({});
  const [EmailError, setEmailError] = useState({});
  const [TextError, setTextError] = useState({});

  const [toggle, setToggle] = useState(false);

  const Validate = () => {
    const NameError = {};
    const EmailError = {};
    const TextError = {};
    let isValid = true;

    if (Name.trim().length < 1) {

      NameError.errText = "*Campo requerido";
      isValid = false;
    }
    if (Text.trim().length < 1) {

      TextError.errText = "*Campo requerido";
      isValid = false;
    }
    if (Email.trim().length < 1) {

      EmailError.errText = "*Campo requerido";
      isValid = false;
      setNameError(NameError);
      setEmailError(EmailError);
      setTextError(TextError);
      return isValid;
    }
    if (!Email.includes('@') || !Email.includes('.')) {

      EmailError.errText = "*Email inválido";
      isValid = false;
    }

    setNameError(NameError);
    setEmailError(EmailError);
    setTextError(TextError);
    return isValid;
  }

  const doSubmit = (e) => {
    e.preventDefault();


    const isValid = Validate();
    if (isValid) {
      let templateParams = {
        from_name: Name,
        message: Text,
        mail: Email,
        phone: Phone
      };
      emailjs.send("service_1x7rg8r", "template_d70c6k5", templateParams, "user_0eNEICbpcRW7hebC8Y2c6")
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          setName("");
          setEmail("");
          setText("");
          setPhone("");
          setToggle(true);
        }, function (error) {
          console.log('FAILED...', error);
        });
    }
  }


  return (
    <>
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
                      <form id="MyContactForm" method="POST" onSubmit={doSubmit}>
                        <Row>
                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <input className="styled-input" type="text" name="name" id="name" placeholder="Nombre*" value={Name} onChange={(e) => setName(e.target.value)} />
                              {/* <Input type="text" placeholder="nombre" /> */}
                              <label htmlFor="name" id="nameLb">
                                <span className="error">{NameError.errText}</span>
                              </label>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <input className="styled-input" type="text" name="email" id="email" placeholder="Correo*" value={Email} onChange={(e) => setEmail(e.target.value)} />
                              <label htmlFor="email" id="emailLb">
                                <span className="error error1">{EmailError.errText}</span>
                              </label>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <input className="styled-input" type="text" name="phone" id="phone" placeholder="Teléfono" value={Phone} onChange={(e) => setPhone(e.target.value)} />
                              <label htmlFor="phone" id="phoneLb"></label>
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <FormGroup className="m-t-15">
                              <textarea className="styled-input" name="message" id="message" placeholder="Solicitud*" rows="4" value={Text} onChange={(e) => setText(e.target.value)}></textarea>
                              <label htmlFor="message" id="messageLb">
                                <span className="error">{TextError.errText}</span>
                              </label>
                            </FormGroup>
                          </Col>
                          {/* <div className="clearfix"></div> */}
                          <Col lg="12">
                            <div className="text-center">
                              <button type="submit" className="btn btn-danger-gradiant m-t-20 btn-arrow">
                                <span>
                                  {" "}
                                  Enviar <i className="ti-arrow-right"></i>
                                </span>
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </form>
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
      <Modal isOpen={toggle} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={() => setToggle(false)} >
        <ModalHeader toggle={() => setToggle(false)}>
          <h3>Solicitud enviada con éxito</h3>
        </ModalHeader>
        <ModalBody className="text-dark"><p><strong>          Te contáctaremos en un máximo de 24 hrs.
        </strong></p>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ContactComponent;
