import {useState} from "react";

export const Cards = () => {
    const [deck, setDeck] = useState([
        {id: 1, name: "ao", stat: ""},
        {id: 1, name: "ao", stat: ""},
        {id: 2, name: "aka", stat: ""},
        {id: 2, name: "aka", stat: ""},
        {id: 3, name: "midori", stat: ""},
        {id: 3, name: "midori", stat: ""},
        {id: 4, name: "chairo", stat: ""},
        {id: 4, name: "chairo", stat: ""},
        {id: 5, name: "kiiro", stat: ""},
        {id: 5, name: "kiiro", stat: ""},
        {id: 6, name: "shiro", stat: ""},
        {id: 6, name: "shiro", stat: ""},
        {id: 7, name: "kuro", stat: ""},
        {id: 7, name: "kuro", stat: ""},
        {id: 8, name: "haiiro", stat: ""},
        {id: 8, name: "haiiro", stat: ""},
    ])
  return <p>Cards</p>;
};
