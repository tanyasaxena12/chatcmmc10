import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import "./Cmmcsearch.css";

const Cmmcsearch = () => {
  return (
    <Row>
      <Col >
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card id="card1">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Welcome to The CMMC Search Engine!
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <gen-search-widget
                configId="7efde83c-da0a-4a70-8852-af8a277b2238"
                triggerId="searchWidgetTrigger">
              </gen-search-widget>


              <input placeholder="Search here" id="searchWidgetTrigger" />


            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Cmmcsearch;
