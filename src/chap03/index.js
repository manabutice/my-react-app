import React from "react";
import ReactDOM from "react-dom/client";
import pokemons from "./pokemons";
import ForPokemonCardList from "./ForPokemonCardList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ForPokemonCardList src={pokemons} />);
