import React from "react";

function App() {
  let a = 2 + 2;
  return (
    <div>
      <p>number: {a}</p>
      <button onClick={() => a++}>click me</button>
      <button onClick={() => console.log(a)}>log value</button>
    </div>
  );
}

export default App;
