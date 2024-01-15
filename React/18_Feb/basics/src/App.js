// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
function SuperHeros() {
  const [hero, setHero] = useState([
    "Superman",
    "Spiderman",
    "Thor",
    "Captain America",
    "Ironman",
  ]);
  const [name, setName] = useState(() => "antman");
  const onAddName = () => {
    setHero([...hero, name]);
    setName("")
  };
  return (
    <div>
      <ul>
        {hero.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={onAddName}> Add value</button>
    </div>
  );
}
function Counter() {
  let [count, setCount] = useState(100);
  // const[variable ,updater fundction]=useState(10)

  function oneUp() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={oneUp}>Count : {count}</button>
    </div>
  );
}
function App() {
  return (
    <>
      <h1>Hello to React</h1>;
      <Counter />
      <SuperHeros />
    </>
  );
}

export default App;
