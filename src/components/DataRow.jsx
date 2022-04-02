import React from "react";
import { Row, Col } from "react-bootstrap";
export default function DataRow({
  ticketData: { id, description, priority, status, subject },
  style,
}) {
  return (
    <Row key={id} style={style} className={"data-row"}>
      <Col xs={1} className={"data-column"}>
        {id}
      </Col>
      <Col xs={1} className={"data-column"}>
        {status}
      </Col>
      <Col xs={1} className={"data-column"}>
        {priority}
      </Col>
      <Col xs={3} className={"data-column"}>
        {subject}
      </Col>
      <Col className={"data-column"}>{description}</Col>
    </Row>
  );
}
