import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { ConfigurationSidebar } from "./ConfigurationSidebar.js";

class SensorConfiguration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col md="3" className="mb-3">
            <ConfigurationSidebar />
          </Col>
          <Col md="9" className="mb-3">
            <ContentHeaderH1>Sensor Configuration</ContentHeaderH1>
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT</CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SensorConfiguration;
