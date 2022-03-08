import React from "react";

export default function SelectedPlayer(props) {
  return (
    <div style={{ display: props.selectedDisplay }}>
      <h3>{props.player.name}</h3>
      <ul>
        <li> Points : {props.player.points}</li>
        <li> Rebounds : {props.player.rebounds}</li>
        <li>Assists : {props.player.assists}</li>
      </ul>
    </div>
  );
}
