import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.png";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
              Dr. Julio Rojas
            </h1>
            <h4 className="subtitle font-light">
              Ginecología & Obstetricia
            </h4>
            {/* <a
              href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
              Download Free
            </a> */}
            <Link href="https://wa.link/wstbjf">
              <a className="btn btn-md m-t-30  btn-outline-danger ">
                Agendar cita
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
