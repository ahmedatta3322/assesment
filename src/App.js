import "./App.css";
import List from "./components/List";
import React, { useState } from "react";
import data from "./data.json";
import DataRow from "./components/DataRow";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles/styles.css";
import TicketModal from "./modals/TicketModal";

function App() {
  //Data mock file can be found in data.json in the main directory
  const [items, setItems] = useState(data);
  const [isOpen, openModal] = useState(false);

  //A callback Used to Render visible part of the list using styling
  const renderItems = ({ index, style }) => {
    const i = items[index];
    return (
      <DataRow
        ticketData={{
          id: i.id,
          description: i.description,
          priority: i.priority,
          status: i.status,
          subject: i.subject,
        }}
        style={style}
      />
    );
  };
  // A callback to handle model closing and data adding
  const handleClose = (data, isEdit) => {
    setItems([...items, data]);
    openModal(false);
  };
  return (
    <Container fluid className="data-container ">
      <Row className={"data-header"}>
        <Col xs={1} className={"header-column"}>
          <h4>ID</h4>
        </Col>
        <Col xs={1} className={"header-column"}>
          <h4>Status</h4>
        </Col>
        <Col xs={1} className={"header-column"}>
          <h4>Priority</h4>
        </Col>
        <Col xs={3} className={"header-column"}>
          <h4>Subject</h4>
        </Col>
        <Col className={"header-column"}>
          <Row>
            <Col>
              <h4>Description</h4>
            </Col>
            <Col>
              <Button
                data-toggle="modal"
                data-target="#create-ticket"
                onClick={() => {
                  openModal(true);
                }}
                size="lg"
              >
                Create new Ticket
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <List
        numItems={items.length}
        itemHeight={150}
        windowHeight={window.innerHeight}
        renderItem={renderItems}
      />
      <TicketModal
        show={isOpen}
        handleClose={handleClose}
        count={items.length + 1}
      ></TicketModal>
    </Container>
  );
}

export default App;
