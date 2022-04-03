import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function TicketModal({ show, handleClose, count, item }) {
  const [state, setState] = useState({
    id: count,
    description: item ? item.description : "",
    subject: item ? item.subject : "",
    priority: item ? item.priority : "High",
    status: item ? item.status : "Fulfilled",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      id: count + 1,
    });
    return handleClose(state);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Subject"
              name="subject"
              value={state.subject}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              placeholder="Enter Description"
              value={state.description}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="priority"
              value={state.priority}
              onChange={handleChange}
              required
            >
              <option value="High">High</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="status"
              value={state.status}
              onChange={handleChange}
              required
            >
              <option value="Fulfilled">Fulfilled</option>
              <option value="Pending">Pending</option>
              <option value="Escalated">Escalated</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Ticket
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
