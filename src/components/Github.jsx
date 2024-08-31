import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="github-calendar-container">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Ritik26052000"
        blockSize={15}
        blockMargin={5}
        color="#7048c4"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
