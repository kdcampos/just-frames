import { useState } from "react";
import React from "react";

import { CHARACTER } from "./data";
import "./App.css";

import CharSelect from "./components/CharSelect";
import CharDataMap from "./components/CharDataMap";

function App() {
  const [character, setCharacter] = useState();

  let characterData = (
    <div>
      <img
        id="game"
        src="https://www.dustloop.com/wiki/images/5/55/GGST_Logo.png"
        alt="guilty gear strive logo"
      />
      <div id="portraits">
        {CHARACTER.map((character) => {
          return (
            <CharSelect
              key={character}
              onSelect={() => handleSelect(character.name)}
            >
              <img src={character.portrait} alt={character.alt} />{" "}
            </CharSelect>
          );
        })}
      </div>
    </div>
  );

  if (character) {
    characterData = (
      <div>
        <button onClick={() => handleSelect("")}>
          <p>return to charcter select</p>
        </button>
        <CharDataMap name={character} />
      </div>
    );
  }

  function handleSelect(selectedButton) {
    setCharacter(selectedButton);
    console.log(character);
  }

  return (
    <div>
      <header>
        <img src="src\assets\JF logo.png" alt="Just Frames logo" />
      </header>

      <div>{characterData}</div>
    </div>
  );
}
export default App;
