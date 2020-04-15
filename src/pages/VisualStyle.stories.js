import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Icon from "@mdi/react";
import { mdiPalette, mdiFormatText, mdiVectorSquare } from "@mdi/js";

import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";

export default {
  title: "Design System|Visual Style"
};

export const VisualStyleStory = () => (
  <div className="container">
    <ContentHeaderH1>Visual Style</ContentHeaderH1>

    <p class="lead">
      NRCS Design System is comprised of the following visual assets for
      consistent design (styles) presentation across NRCS applications. Explore
      each section for details.
    </p>

    <Row xs="1" sm="2" md="3">
      <Col className="nav-card mb-3">
        <a href="/nrcs-design-system/visual-style/color">
          <Card>
            <CardBody className="h5 mb-0">
              <Icon className="mdi mr-1" path={mdiPalette} size={1.3} />
              Color
            </CardBody>
          </Card>
        </a>
      </Col>
      <Col className="nav-card mb-3">
        <a href="/nrcs-design-system/visual-style/typography">
          <Card>
            <CardBody className="h5 mb-0">
              <Icon className="mdi mr-1" path={mdiFormatText} size={1.3} />
              Typography
            </CardBody>
          </Card>
        </a>
      </Col>
      <Col className="nav-card mb-3">
        <a href="/nrcs-design-system/visual-style/iconography">
          <Card>
            <CardBody className="h5 mb-0">
              <Icon className="mdi mr-1" path={mdiVectorSquare} size={1.3} />
              Iconography
            </CardBody>
          </Card>
        </a>
      </Col>
    </Row>
  </div>
);