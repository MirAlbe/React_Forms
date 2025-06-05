import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [printName, setPrintName] = useState("");

  function handleOnChange(event) {
    setName(event.target.value);
    console.log("here", name);
  }

  function handleClick(event) {
    setPrintName(name);
    event.preventDefault(); // Prevents default behaviour of form
  }

  return (
    <form onSubmit={handleClick}>
      <div className="container">
        <h1>Hello {printName} </h1>
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />

        <button>Submit</button>
      </div>
    </form>
  );
}

export default App;
