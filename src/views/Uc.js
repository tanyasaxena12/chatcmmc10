import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import "./Uc.css";

const Uc = () => {
  return (
    <Row>
      <Col>
        <Card id="card1">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0"></CardTitle>
          <CardBody className="card-content">
            <Row justify-content>
              <h3>
                ChatCMMC is currently undergoing exciting improvements, but in the meantime, if you require assistance with CMMC, we invite you to explore our support: <a id="aTag" href="https://www.juncyber.com/cmmc/" target="_blank" rel="noopener noreferrer">
                  https://www.juncyber.com/cmmc/
                </a>
              </h3>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Uc;
