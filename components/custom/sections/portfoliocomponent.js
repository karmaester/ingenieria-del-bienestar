/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/portfolio/1.png";
import img2 from "../../../assets/images/portfolio/7.png";
import img3 from "../../../assets/images/portfolio/19.png";
import img4 from "../../../assets/images/portfolio/35.png";
import img5 from "../../../assets/images/portfolio/39.png";
import img6 from "../../../assets/images/portfolio/46.png";
import img7 from "../../../assets/images/portfolio/55.png";
import img8 from "../../../assets/images/portfolio/56.png";
import img9 from "../../../assets/images/portfolio/60.png";
import img10 from "../../../assets/images/portfolio/61.png";
import img11 from "../../../assets/images/portfolio/welcome_01.jpg";
import img12 from "../../../assets/images/portfolio/welcome_01.jpg";
import img13 from "../../../assets/images/portfolio/woman-holding-prescription.jpg";

const PortfolioComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Misión</h1>
              <h6 className="subtitle">
                ME APROXIMO A LA ESPECIALIDAD DESDE UN ENFOQUE HUMANO INTEGRAL Y PREVENTIVO CON HERRAMIENTAS DE LA MEDICINA DE
                LOS ESTILOS DE VIDA Y MEDICINA DE LA LONGEVIDAD, SIN ABANDONAR LAS RAÍCES DE LA GINECOLÓGICA CLÁSICA Y EL SUSTENTO
                DE LA EVIDENCIA.
                <br />
                <br />
                A LO LARGO DE MI PRACTICA HE PROCURADO REALIZAR CURSOS DE ACTUALIZACIÓN CON ESPECIAL INTERÉS EN LOS TEMA DE:
                ULTRASONOGRAFÍA GINECOLÓGICA Y OBSTÉTRICA , CIRUGÍA DE PISO PÉLVICO , MENOPAUSIA, GINECOESTÉTICA Y MEDICINA DEL
                ENVEJECIMIENTO Y LONGEVIDAD.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer">
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
                    src={img5}
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
                    src={img6}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">
                    Consulta ginecológica
                  </h5>
                  <p className="m-b-0 font-14">Digital Marketing</p>
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
                  <p className="m-b-0 font-14">Search Engine</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img2}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Climaterio y menopausia</h5>
                  <p className="m-b-0 font-14">Atención integral a la mujer en todas sus etapas</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img4}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Fertilidad</h5>
                  <p className="m-b-0 font-14">Estudio de pareja infértil de baja complejidad</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img8}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Trastornos del ciclo menstrual</h5>
                  <p className="m-b-0 font-14">Wll Mockup</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img6}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Síndrome de ovario poliquístico</h5>
                  <p className="m-b-0 font-14">Book Covers</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img7}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Endometriosis</h5>
                  <p className="m-b-0 font-14">Book Covers</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img8}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Miomas uterinos</h5>
                  <p className="m-b-0 font-14">Book Covers</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img9}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Pesquisa de enfermedades de transmisión sexual</h5>
                  <p className="m-b-0 font-14">Clamidia , gonorrea, Virus del apiloma humano, sifilis, herpes, ureaplasma , micoplasma, hepatitis B,
                    VIH</p>
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
                  <h5 className="font-medium m-b-0">Asesoría anticonceptiva de acuerdo a necesidades especiales</h5>
                  <p className="m-b-0 font-14">Anticoncepción oral , Intramuscular , parches Dispositivos subdérmicos (implanon)
                    dispositivos intrauterinos (Mirena) . Anticoncepción de emergencia</p>
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
                    src={img13}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Ecografía Ginecológica,</h5>
                  <p className="m-b-0 font-14">Histerosonografia</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img13}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Toma de pap</h5>
                  <p className="m-b-0 font-14">Citología cervical uterina</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img13}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Telemedicina</h5>
                  <p className="m-b-0 font-14">2das opiniones</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioComponent;
