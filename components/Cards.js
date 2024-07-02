import { useState } from "react";
import { Card } from "./Card.js";

export const Cards = () => {
  const [deck, setDeck] = useState(
    [
      { id: 1, name: "ao", stat: "" },
      { id: 1, name: "ao", stat: "" },
      { id: 2, name: "aka", stat: "" },
      { id: 2, name: "aka", stat: "" },
      { id: 3, name: "midori", stat: "" },
      { id: 3, name: "midori", stat: "" },
      { id: 4, name: "chairo", stat: "" },
      { id: 4, name: "chairo", stat: "" },
      { id: 5, name: "kiiro", stat: "" },
      { id: 5, name: "kiiro", stat: "" },
      { id: 6, name: "shiro", stat: "" },
      { id: 6, name: "shiro", stat: "" },
      { id: 7, name: "kuro", stat: "" },
      { id: 7, name: "kuro", stat: "" },
      { id: 8, name: "haiiro", stat: "" },
      { id: 8, name: "haiiro", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  const handleClick = (id) => {
    deck[id].stat = "flipped";
    setDeck([...deck]);
  };

  return (
    <div className="container">
      {deck.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
};
