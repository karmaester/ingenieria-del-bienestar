import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const CallToAction = () => {
  return (
    <div className="coming-soon" id="coming">
      <Container className="py-5 mt-5">
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center">
              <div>
                <h2 className="title text-white font-weight-bold">
                  Llamado a la acción
                </h2>
                <h6 className="subtitle font-light text-white">
                  Puede ir aquí otra invitación para contactarse
                </h6>
                <Button
                  href="/#coming"
                  className="btn btn-dark m-r-20 btn-md m-t-30"
                >
                  Haz click aquí
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;
