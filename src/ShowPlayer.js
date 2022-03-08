import React from "react";
import { Form, Button, ListGroup, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SubmitPlayer from "./SubmitPlayer";

export default function ShowPlayer(props) {
  return (
    <div
      style={{
        position: "relative",
        bottom: "1.7vh",
        border: "1px solid grey",
        borderRadius: "3px",
        display: props.dropdownDisplay,
      }}
    >
      {props.players.map((player, index) => (
        <div className="box" key={index}>
          <Dropdown>
            <Dropdown.Item
              href="#/action-1"
              style={{ borderBottom: "1px solid lightGray" }}
              onClick={() => props.addPlayer(player)}
            >
              {player.name}
            </Dropdown.Item>
          </Dropdown>
        </div>
      ))}
    </div>
  );
}
