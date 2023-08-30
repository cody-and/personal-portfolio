import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import '../App.css';

const defaultMessage = { fullName: "", email: "", message: "" };

export default function ContactForm() {
  const [messageData, setMessageData] = useState(defaultMessage);
  const [fieldWarnings, setFieldWarnings] = useState({ fullName: false, email: false });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const hasEmptyField = Object.values(fieldWarnings).some(value => value);
    document.getElementById("submitBtn").disabled = hasEmptyField;
  }, [fieldWarnings]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setMessageData((prevMessageData) => ({ ...prevMessageData, [name]: value }));
    
    if (fieldWarnings[name]) {
      setFieldWarnings((prevWarnings) => ({ ...prevWarnings, [name]: false }));
      setShowAlert(false);
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    if (!value.trim()) {
      setFieldWarnings((prevWarnings) => ({ ...prevWarnings, [name]: true }));
      setShowAlert(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // add submit logic later
    console.log("Form submitted:", messageData);
  }

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit} className="custom-form">
        <h2>Contact Me</h2>
        <Form.Group controlId="fullName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            name="fullName"
            value={messageData.fullName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            isInvalid={fieldWarnings.fullName}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={messageData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            isInvalid={fieldWarnings.email}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message to me</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={messageData.message}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button id="submitBtn" variant="primary" type="submit">Submit</Button>

        {showAlert && (
          <Alert variant="danger" className="mt-2">
            Please fill out all the fields!
          </Alert>
        )}
      </Form>
    </div>
  );
}
