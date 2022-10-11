import React from "react";
import Select from "react-select";
import "./App.css";

function App() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <header>Wikipharma</header>
      <main>
        <Select
          classNamePrefix="react-select"
          options={options}
          isMulti
          label="teste"
        />
        <button className="confirm-button">buscar remédio</button>
      </main>
    </>
  );
}

export default App;
