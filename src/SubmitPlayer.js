import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SubmitPlayer(props) {
  return (
    <div>
      <Button variant="primary" size="lg" active onClick={props.submitPlayer}>
        Submit Player
      </Button>
    </div>
  );
}
