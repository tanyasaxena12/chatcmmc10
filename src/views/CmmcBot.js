
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import "./CmmcBot.css";

const CmmcBot = () => {
  return (
    <Row>
      <Col >
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card id="card1">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Welcome to ChatCMMC!
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
             {/** 
              <df-messenger
                project-id="businessbot-400413"
                agent-id="7f933492-16a8-4c1a-9927-b98a4354a867"
                language-code="en"
                max-query-length="-1"
                allow-feedback="all">
                <df-messenger-chat
                  chat-title="Ask me a CMMC related question!">
                </df-messenger-chat>
              </df-messenger>
              */}

            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default CmmcBot;

