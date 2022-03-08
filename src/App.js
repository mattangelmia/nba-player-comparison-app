import logo from "./logo.svg";
import { useState } from "react";
import SearchPlayer from "./SearchPlayer";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ShowPlayer from "./ShowPlayer";

function App() {
  const [searchValue1, setSearchValue1] = useState("");
  const [searchValue2, setSearchValue2] = useState("");
  const [selectedPlayer1, setSelectedPlayer1] = useState([]);
  const [dropdownDisplay, setDropdownDisplay] = useState("none");
  const [dropdownDisplay2, setDropdownDisplay2] = useState("none");
  const [background, setBackground] = useState("white");
  const [players, setPlayers] = useState([
    {
      name: "Lebron James",
      points: 28.5,
      assists: 7.5,
      rebounds: 8.3,
    },

    {
      name: "Luka Doncic",
      points: 26.5,
      assists: 8.4,
      rebounds: 7.2,
    },

    {
      name: "Jimmy Butler",
      points: 21.3,
      assists: 6.6,
      rebounds: 7.1,
    },

    {
      name: "Demar Derozan",
      points: 28.7,
      assists: 6.8,
      rebounds: 6.4,
    },
  ]);

  const [filteredPlayers, setFilteredPlayers] = useState([]);

  function filterPlayer1(e) {
    console.log(e.target.value);
    setSearchValue1(e.target.value);
    if (e.target.value === "") {
      setDropdownDisplay("none");
      console.log("empty");
    } else {
      setDropdownDisplay("block");
    }
  }

  function filterPlayer2(e) {
    console.log(e.target.value);
    setSearchValue2(e.target.value);
    if (e.target.value === "") {
      setDropdownDisplay2("none");
      console.log("empty");
    } else {
      setDropdownDisplay2("block");
    }
  }

  const showingPlayers =
    searchValue1 === ""
      ? players
      : players.filter((player) =>
          player.name.toLowerCase().includes(searchValue1.toLowerCase())
        );

  const showingPlayers2 =
    searchValue2 === ""
      ? players
      : players.filter((player) =>
          player.name.toLowerCase().includes(searchValue2.toLowerCase())
        );

  function mouseOverColorChange() {
    console.log("color is changing");
    setBackground("lightGray");
  }

  function addPlayer(player) {
    console.log(player);
  }

  return (
    <div className="App">
      <h1>Nba Player Comparison App</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SearchPlayer
          filterPlayer={filterPlayer1}
          addPlayer={addPlayer}
          players={showingPlayers}
          dropdownDisplay={dropdownDisplay}
        />

        <SearchPlayer
          filterPlayer={filterPlayer2}
          players={showingPlayers2}
          dropdownDisplay={dropdownDisplay2}
        />
      </div>
    </div>
  );
}

export default App;
