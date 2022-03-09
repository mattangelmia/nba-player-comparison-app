import React from "react";

export default function SelectedPlayer(props) {
  return (
    <div style={{ display: props.selectedDisplay }}>
      <h3>{props.player.name}</h3>
      <ul>
        <li style={{ backgroundColor: props.pointsBackground }}>
          Points : {props.player.points}
        </li>
        <li style={{ backgroundColor: props.reboundsBackground }}>
          {" "}
          Rebounds : {props.player.rebounds}
        </li>
        <li style={{ backgroundColor: props.assistsBackground }}>
          Assists : {props.player.assists}
        </li>
      </ul>
    </div>
  );
}
