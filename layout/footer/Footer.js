/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Dirección</h5>
            <p>Edificio Baquedano - esquina, Benavente, Baquedano. Puerto Montt, Chile.</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Teléfono</h5>
            <p>
              +56 9 6807 7891
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <p>
              <Link href="mailto:drjuliorojasortega@gmail.com">
                <a target="_blank" className="link">drjuliorojasortega@gmail.com</a>
              </Link>
              <br />
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <Link href="https://www.facebook.com/ginecologojuliorojas">
                <a target="_blank" className="link">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
              {/* <Link href="#">
                <a className="link">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </Link> */}
              <Link href="https://www.instagram.com/ginecologopuertomontt/">
                <a target="_blank" className="link">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link>
            </div>
            <Link href="https://www.instagram.com/ginecologopuertomontt/">
              <a target="_blank" id="zl-url" href="https://www.doctoralia.cl/julio-antonio-rojas-ortega/ginecologo/puerto-montt" >
                <button
                  className="btn btn-md m-t-30 btn-danger-gradiant font-14"
                >Doctoralia.cl
                </button></a>
            </Link>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Reserved by{" "}
                  <Link href="#">
                    <a className="link">karmaester</a>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <Link href="#">
                    <a className="p-10 p-l-0">Terms of Use</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Legal Disclaimer</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Privacy Policy</a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
