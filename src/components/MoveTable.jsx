import { useState } from "react";

export default function MoveTable({
  name,
  image,
  imageAlt,
  hitbox,
  hitboxAlt,
  damage,
  guard,
  startup,
  active,
  recovery,
  onBlock,
}) {
  const [images, setImages] = useState(false);

  function handleImages(selectedButton) {
    setImages(selectedButton);
  }

  return (
    <div className="movetable">
      <h2>{name}</h2>
      <div className="buttons">
        <button onClick={() => handleImages(false)}>Image</button>
        <button onClick={() => handleImages(true)}>Hitbox</button>
      </div>
      {images ? <img src={hitbox} alt={hitboxAlt}></img> : <img src={image} alt={imageAlt}></img>}
      <div>
        <p>Damage: {damage} </p>
        <p>Guard: {guard} </p>
        <p>Startup Frames: {startup}</p>
        <p>Active Frames: {active} </p>
        <p>Recovery Frames: {recovery} </p>
        <p>on Block: {onBlock} </p>
      </div>
    </div>
  );
}
