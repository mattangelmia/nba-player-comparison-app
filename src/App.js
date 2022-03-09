import logo from "./logo.svg";
import { useState, useEffect } from "react";
import SearchPlayer from "./SearchPlayer";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ShowPlayer from "./ShowPlayer";
import SelectedPlayer from "./SelectedPlayer";
import ColorExplanation from "./ColorExplanation";

function App() {
  const [searchValue1, setSearchValue1] = useState("");

  const [searchValue2, setSearchValue2] = useState("");
  const [player1PointsBackground, setPlayer1PointsBackground] =
    useState("white");
  const [player2PointsBackground, setPlayer2PointsBackground] =
    useState("white");
  const [player1ReboundsBackground, setPlayer1ReboundsBackground] =
    useState("white");
  const [player2ReboundsBackground, setPlayer2ReboundsBackground] =
    useState("white");
  const [player1assistsBackground, setPlayer1AssistsBackground] =
    useState("white");
  const [player2assistsBackground, setPlayer2AssistsBackground] =
    useState("white");

  const [selectedDisplay, setSelectedDisplay] = useState("none");
  const [selectedDisplay2, setSelectedDisplay2] = useState("none");
  const [selectedPlayer1, setSelectedPlayer1] = useState([]);
  const [selectedPlayer2, setSelectedPlayer2] = useState([]);
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

  function addPlayer1(player) {
    console.log(player);
    setSelectedPlayer1(player);
    setSelectedDisplay("block");
    setDropdownDisplay("none");
    setSearchValue1(" ");
    setPlayer1PointsBackground("white");
  }

  function addPlayer2(player) {
    console.log(player);
    setSelectedPlayer2(player);
    setSelectedDisplay2("block");
    setDropdownDisplay2("none");
    setPlayer2PointsBackground("white");
  }

  useEffect(() => {
    if (selectedPlayer1.rebounds > selectedPlayer2.rebounds) {
      setPlayer1ReboundsBackground("green");
      setPlayer2ReboundsBackground("red");
    } else if (selectedPlayer2.rebounds > selectedPlayer1.rebounds) {
      setPlayer2ReboundsBackground("green");
      setPlayer1ReboundsBackground("red");
    }
  }, [selectedPlayer2]);

  useEffect(() => {
    if (selectedPlayer1.assists > selectedPlayer2.assists) {
      setPlayer1AssistsBackground("green");
      setPlayer2AssistsBackground("red");
    } else if (selectedPlayer2.assists > selectedPlayer1.assists) {
      setPlayer2AssistsBackground("green");
      setPlayer1AssistsBackground("red");
    }
  }, [selectedPlayer2]);

  useEffect(() => {
    if (selectedPlayer1.points > selectedPlayer2.points) {
      setPlayer1PointsBackground("green");
      setPlayer2PointsBackground("red");
    } else if (selectedPlayer2.points > selectedPlayer1.points) {
      setPlayer2PointsBackground("green");
      setPlayer1PointsBackground("red");
    }
  }, [selectedPlayer2]);

  if (selectedPlayer1.points > selectedPlayer2.points) {
    console.log("player1 scores more");
  }
  console.log(selectedPlayer1);

  return (
    <div className="App">
      <h1>Nba Player Comparison App</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SearchPlayer
          filterPlayer={filterPlayer1}
          addPlayer={addPlayer1}
          players={showingPlayers}
          dropdownDisplay={dropdownDisplay}
        />

        <SearchPlayer
          filterPlayer={filterPlayer2}
          players={showingPlayers2}
          addPlayer={addPlayer2}
          dropdownDisplay={dropdownDisplay2}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <ColorExplanation />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "10%",
        }}
      >
        <SelectedPlayer
          player={selectedPlayer1}
          selectedDisplay={selectedDisplay}
          pointsBackground={player1PointsBackground}
          reboundsBackground={player1ReboundsBackground}
          assistsBackground={player1assistsBackground}
        />
        <SelectedPlayer
          player={selectedPlayer2}
          selectedDisplay={selectedDisplay2}
          pointsBackground={player2PointsBackground}
          reboundsBackground={player2ReboundsBackground}
          assistsBackground={player2assistsBackground}
        />
      </div>
    </div>
  );
}

export default App;
