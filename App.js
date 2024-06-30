import "./styles.css";
import {Cards} from "./components/Cards.js";

export default function App() {
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Cards />
      {/*<div className="container"></div>*/}
    </div>
  );
}
