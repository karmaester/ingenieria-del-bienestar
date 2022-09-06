/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/blog/blog-home/1.png";
import img2 from "../../../assets/images/blog/blog-home/7.png";
import img3 from "../../../assets/images/blog/blog-home/19.png";

const BlogComponent = () => {
  return (
    <div>
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
                <a href="#">
                  <Image
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                  />
                </a>
                <h5 className="font-medium m-t-30">
                  <a href="#" className="link">
                    Artículo Primero
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BlogComponent;
