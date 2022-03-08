import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SubmitPlayer from "./SubmitPlayer";
import ShowPlayer from "./ShowPlayer";

export default function SearchPlayer(props) {
  return (
    <div style={{ margin: "10%" }}>
      <Form style={{ width: "100%", margin: "20%" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search Player</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter player name"
            onChange={props.filterPlayer}
          />
        </Form.Group>
        <ShowPlayer
          bgColor={props.bgColor}
          mouseOverColorChange={props.mouseOverColorChange}
          players={props.players}
          dropdownDisplay={props.dropdownDisplay}
          addPlayer={props.addPlayer}
        />
        <SubmitPlayer />
      </Form>
    </div>
  );
}
