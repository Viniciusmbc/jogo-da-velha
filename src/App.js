import "./styles.css";
import { Grid, Square } from "./styles/styles.js";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function App() {
  const [players, setPlayers] = useState("");
  const [jogada, setJogada] = useState((atual, posterior) => atual + posterior);
  const [cores, setCores] = useState({ color: "white" });
  const [simbolo, setSimbolo] = useState("");
  const [tabuleiro, setTabuleiro] = useState([]);

  const handleClick = () => {
    if (players === "player1") {
      setCores({ color: "red" });
      setTabuleiro((tabuleiro) => [...tabuleiro, 1]);
    } else {
      setCores({ color: "green" });
      setTabuleiro((tabuleiro) => [...tabuleiro, 2]);
    }
  };

  const resetar = () => {
    setCores(null);
    setSimbolo(null);
    setTabuleiro([]);
    console.log(cores, players, tabuleiro);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          resetar();
        }}
      >
        {" "}
        Novo Jogo
      </button>
      <button onClick={() => setPlayers("player1")}>Player 1</button>
      <button onClick={() => setPlayers("player2")}> Player 02 </button>

      <Grid>
        <Square color="red"> 1 </Square>
        <Square color="blue"> 2 </Square>
        <Square color="red"> 3 </Square>
        <Square color="blue"> 4 </Square>
        <Square color="red"> 5 </Square>
        <Square color="blue"> 6 </Square>
        <Square color="red"> 7 </Square>
        <Square color="blue"> 8 </Square>
        <Square color="red"> 9 </Square>
      </Grid>
    </div>
  );
}
