
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import "./Chatcmmc.css";

const Chatcmmc = () => {
  return (
    <Row>
      <Col >
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card id="card1">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Welcome to ChatCMMC new!
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <df-messenger
                oauth-client-id="1079201260163-u0g7e4rk60hhqirkpf7q4vrisse9uqjh.apps.googleusercontent.com"
                project-id="businessbot-400413"
                agent-id="1ef6dee0-7b84-43a0-a79a-f16620cdcef8"
                language-code="en"
                max-query-length="-1">
                <df-messenger-chat
                  chat-title="ChatCMMC Agent">
                </df-messenger-chat>
              </df-messenger>
            </Row>
            <center>ChatCMMC is AI and may make mistakes.</center>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Chatcmmc;

