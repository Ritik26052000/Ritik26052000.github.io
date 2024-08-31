import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    message: "",
    attachment: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_rz9kqny";
    const templateID = "template_q97qldd";
    const userID = "5pdbzgABPNCokUfO7";

    const formDataWithAttachment = new FormData();
    formDataWithAttachment.append("companyName", formData.companyName);
    formDataWithAttachment.append("email", formData.email);
    formDataWithAttachment.append("message", formData.message);
    formDataWithAttachment.append("attachment", formData.attachment);

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        alert("Message sent successfully!");
        setFormData({
          companyName: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.error("Error:", error.text);
        alert("Failed to send the message, please try again.");
      }
    );
  };

  return (
    <>
      <Container fluid className="contact-section" id="contact">
        <Col xs={12} md={6} className="contact-animation">
          <img
            src={
              "https://static.wixstatic.com/media/fa1267_8d5e4df280eb42f496d1c6544a8eee8b~mv2.gif"
            }
            alt="Contact Animation"
          />
        </Col>
        <Col xs={12} md={6} className="contact-form">
          <h1>Contact Me</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCompanyName">
              <Form.Label className="form-label">Company Name</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                placeholder="Enter company name"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="form-label">Email address</Form.Label>
              <Form.Control
                className="form-control"
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label className="form-label">Message</Form.Label>
              <Form.Control
                className="form-control"
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              <FaPaperPlane style={{ marginBottom: "2px" }} /> Send Message
            </Button>
          </Form>
        </Col>
      </Container>
    </>
  );
}

export default Contact;
