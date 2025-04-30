import { useState } from "react";
import "./CharDataMap.css";
import "../data";
import { dizzy, ky, sol } from "../data";
import MoveTable from "./MoveTable";

export default function CharDataMap({ name }) {
  const characters = { sol: { ...sol }, ky: { ...ky }, dizzy: { ...dizzy } };

  const currentCharacter = name;

  const selectCharacter = characters[currentCharacter];

  return (
    <div>
      {Object.keys(selectCharacter)
        .slice(0, 1)
        .map((charData, index) => {
          return (
            <div key={index}>
              <h1>{selectCharacter[charData].name}</h1>

              <p>{selectCharacter[charData].overview}</p>

              <img
                className="model"
                src={selectCharacter[charData].image}
                alt="character model"
              />
            </div>
          );
        })}

      {Object.keys(selectCharacter)
        .slice(1)
        .map((movelist) => {
          return (
            <div>
              <MoveTable
                name={selectCharacter[movelist].name}
                image={selectCharacter[movelist].image}
                imageAlt={selectCharacter[movelist].imageAlt}
                hitbox={selectCharacter[movelist].hitbox}
                hitboxAlt={selectCharacter[movelist].hitboxAlt}
                damage={selectCharacter[movelist].damage}
                guard={selectCharacter[movelist].guard}
                startup={selectCharacter[movelist].startup}
                active={selectCharacter[movelist].active}
                recovery={selectCharacter[movelist].recovery}
                onBlock={selectCharacter[movelist].onBlock}
              />
            </div>
          );
        })}
    </div>
  );
}
