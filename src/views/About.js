import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import "./about.css";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card id="card1">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            About ChatCMMC
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content-center id="row1">
              <Col lg="12">
                <h2 className="mt-4">About ChatCMMC</h2>
                <h5 className=" mb-4">
                  ChatCMMC, designed by Jun Cyber, represents a cutting-edge solution in the realm of cybersecurity compliance and certification. Specifically crafted to assist organizations in navigating the complexities of the Cybersecurity Maturity Model Certification (CMMC), this bot leverages advanced technologies to deliver intelligent, context-aware interactions.
                </h5>
                <div id="img1"></div>
                {/** 
                <img src="https://drive.google.com/thumbnail?id=1EZaBcC_Ld5ptPppEj3gcdZnySN73T-qb&amp;sz=w1070" alt="" />
                <br />
                <Button
                  className="mt-3"
                  color="primary"
                  href="https://www.wrappixel.com/templates/adminpro-react-redux-admin/?ref=33"
                  target="_blank"
                >
                  Check Pro Version
                </Button>
                */}
              </Col>
            </Row>
            
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
