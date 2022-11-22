/* eslint-disable */
import React, { useState } from "react";
import { Row, Col, Container, Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/blog/blog-home/01.jpg";
import img2 from "../../../assets/images/blog/blog-home/img17.jpg";

const BlogComponent = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div id="blog">
      <div className="blog-home2 spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="text-center">
              <h2 className="title">Artículos</h2>
            </Col>
          </Row>
          <Row className="m-t-40 justify-content-center">
            <Col lg="4" md="6">
              <Card>
                <a onClick={() => setToggle(true)}>
                  <Image
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                  />
                </a>
                <h5 className="font-medium m-t-30">
                  <a onClick={() => setToggle(true)} className="link">
                    Quistes en los ovarios                   </a>
                </h5>
                <p className="m-t-20">
                  Lo bueno, lo malo y lo feo
                </p>
                <a onClick={() => setToggle(true)} className="linking text-themecolor m-t-10">
                  Leer <i className="ti-arrow-right"></i>
                </a>
              </Card>
            </Col>
            <Modal isOpen={toggle} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
              toggle={() => setToggle(false)} >
              <ModalHeader toggle={() => setToggle(false)}>
                <h3>Quistes en los ovarios</h3>
                <p>Lo bueno, lo malo y lo feo</p>
              </ModalHeader>
              <ModalBody className="text-dark">
                <p><strong>El diagnóstico</strong></p>
                <p>Cuando el ginecólogo , en consulta, menciona la palabra quiste con frecuencia la paciente asume que se trata de un diagnóstico, el cual toma con ansiedad . Se generan preguntas, expresadas o no , ¿afectará mi fertilidad?, ¿me tendran que operar , ¿es maligno?.</p>
                <p>Pero ¿que es un quiste?</p>
                <p>En términois médicos, se define como una masa de contenido líquido cuyo diagnóstico generalmente es hecho  a través de la ecografía. Pueden existir en cualquier órgano pero los del ovario son los más frecuentes.</p>
                <p>Para entender el significado de este diagnóstico debemos  primero comprender algunos conceptos sobre la fisiología del ovario y algunas definiciones que para los médicos son de uso común pero no así  para la paciente.</p>
                <p>En el ovario de toda mujer existe un gran número de  pequeñas estructuras llamadas folículos  dentro de las cuales existen lo óvulos . Un grupo de ellos son estimulados producto de las hormonas de cada ciclo menstrual.  Este estimulo permite que crezcan llenándose de líquido a la vez que van madurando. Uno de ellos va a crecer más y se le llama folículo dominante, éste  a mitad del ciclo  va a liberar el óvulo.</p>
                <p>Si a lo largo de la fase preovulatoria del ciclo realizamos una ecografía vamos a ver estos folículos llenos de líquidos y darán la imagen de quistes de diversos tamaños.</p>
                <p>En condiciones normales el ovario de la mujer en edad reproductiva tienen estas imágenes y son <i>normales</i>.</p>
                <p>Luego de ovular  el folículo roto que liberó el ovulo hace un proceso de regresión  y conforma el cuerpo amarillo que también lo podemos ver como una masa en ecografía  y que en algunas ocasiones se  hace quístico con contenido de sangre.</p>
                <p><strong>Al hacer la ecografía el médico toma en cuenta el día del ciclo menstrual  para interpretar adecuadamente lo que observa . La mayoría de las imágenes quísticas que se aprecian son de tipo funcional y no requieren ni tratamiento ni seguimiento ecográfico </strong></p>
                <p><strong>Lo malo</strong></p>
                <p>Cuando lo que vemos es normal , pero no tanto.</p>
                <p>En ciertas ocasiones y por causas no conocidas uno de los folículos continúa creciendo más allá de los 3 cm y persiste en los ciclos ovulatorios siguientes. En esta ocasión si su médico realiza una ecografía diagnosticaría de forma acertada un quiste de ovario, típicamente estos quistes tienen contenido exclusivamente líquido que en ecografía se visualiza como negro y son denominados quistes funcionales. Su pronóstico en general es bueno y solo necesitan ser observados.</p>
                <p>Indicar anticonceptivos orales no ha demostrado que cambie la evolución de estos quistes. Con ellos pueden ocurrir tres eventos.</p>
                <ul>
                  <li>Que desaparezcan solos. Problema resuelto.</li>
                  <li>Que persistan con iguales características. Vigilarlos anualmente es prudente.</li>
                  <li>Que crezcan hasta superar los 10 cm y/o causen dolor. En este caso su médico discutirá con Ud. La posibilidad de una cirugía.</li>
                </ul>
                <p>También existen casos que que independientemente del tamaño los quistes tienen patrones interior que sugieren contenidos de mayor densidad como lo son:  los quistes NO simples, quistes dermoides y endometriomas. En general, se puede decir que NO son malignos pero requieren tratamientos y conductas más específicas,cuyo detalle exceden a la intención de este post.</p>
                <div className="text-center">
                  <Image
                    src={img2}
                    alt="wrappixel kit"
                  />
                </div>
                <p><strong>Lo feo</strong></p>
                <p>Aquí actuar rápido es importante </p>
                <p>En un minoritario número de casos la masa ovárica va a presentar no solo contenido líquido sino que puedo tener componentes sólidos, crecimiento rápido, superficie irregular y/o va a presentar vasos sanguíneos en una cantidad tal que hagan sospechar que se trate de una neoplasia. En ésta particular situación se requiere de la participación de un gineco-oncólogo para definir la conducta a seguir, que en muchos casos si va a ser realizar una cirugía.</p>
                <p><strong>Los ovarios poliquísticos:</strong></p>
                <p>A pesar de que pertenecen a un capítulo aparte de la ginecología, merecen mención  en este artículo dado la relativa frecuencia en la población, el sobrediagnóstico que se hace de ellos y la confusión que se genera en el público general.</p>
                <p>El síndrome de ovario poliquístico es una patología que tiene un patrón de herencia familiar y que se caracteriza porque la paciente presenta aumento de las hormonas masculinas (andrógenos) que concatenado con otras series de eventos ocasiona, disminución de la fertilidad alteraciones metabólicas y cambios en los ovarios dados por presencia de múltiples pequeños quistes que llenan la superficie del ovario. Siempre es de manejo médico y actualmente nunca son susceptibles de cirugía. Se dedicará un post a parte a este tema.</p>
              </ModalBody>
              <ModalFooter>
                Dr. Julio Rojas
              </ModalFooter>
            </Modal>
            {/* <Col lg="4" md="6">
              <Card>
                <a href="#">
                  <Image
                    className="card-img-top"
                    src={img2}
                    alt="wrappixel kit"
                  />
                </a>
                <h5 className="font-medium m-t-30">
                  <a href="#" className="link">
                    Artículo segundo
                  </a>
                </h5>
                <p className="m-t-20">
                  Idea principal del artículo...
                </p>
                <a href="#" className="linking text-themecolor m-t-10">
                  Leer <i className="ti-arrow-right"></i>
                </a>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card>
                <a href="#">
                  <Image
                    className="card-img-top"
                    src={img3}
                    alt="wrappixel kit"
                  />
                </a>
                <h5 className="font-medium m-t-30">
                  <a href="#" className="link">
                    Artículo tercero
                  </a>
                </h5>
                <p className="m-t-20">
                  Idea principal del artículo...
                </p>
                <a href="#" className="linking text-themecolor m-t-10">
                  Leer <i className="ti-arrow-right"></i>
                </a>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BlogComponent;
