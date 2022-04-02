import "./App.css";
import List from "./components/List";
import React, { useState } from "react";
import data from "./data.json";
import DataRow from "./components/DataRow";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles/styles.css";

function App() {
  const [items, setItems] = useState(data);

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
              <Button>Create new Ticket</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <List
        numItems={items.length}
        itemHeight={80}
        windowHeight={window.innerHeight}
        renderItem={({ index, style }) => {
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
        }}
      />
      ;
    </Container>
  );
}

export default App;
