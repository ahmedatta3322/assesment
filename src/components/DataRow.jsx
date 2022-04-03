import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import TicketModal from "../modals/TicketModal";
export default function DataRow({ ticketData, style }) {
  const [state, setState] = useState({
    id: ticketData.id,
    description: ticketData.description,
    subject: ticketData.subject,
    priority: ticketData.priority,
    status: ticketData.status,
  });
  const [isOpen, openModal] = useState(false);

  // A callback to handle modal editing and closing
  const handleClose = (data) => {
    if (data){
      setState({
      ...data,
    });
    }
    
    openModal(false);
  };

  return (
    <Row key={ticketData.id} style={style} className={"data-row"}>
      <Col xs={1} className={"data-column"}>
        {ticketData.id}
      </Col>
      <Col xs={1} className={"data-column"}>
        {state.status}
      </Col>
      <Col xs={1} className={"data-column"}>
        {state.priority}
      </Col>
      <Col xs={3} className={"data-column"}>
        {state.subject}
      </Col>
      <Col className={"data-column"}>{state.description}</Col>
      <Col className={"data-column"}>
        
        <Button
          size="lg"
          className="edit_button "
          onClick={() => {
            openModal(true);
          }}
        >
          Edit
        </Button>
      </Col>
      <TicketModal
        show={isOpen}
        handleClose={handleClose}
        item={ticketData}
      ></TicketModal>
    </Row>
  );
}
