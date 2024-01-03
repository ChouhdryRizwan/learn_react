import { useState } from "react";

function App() {
  let a = 2 + 2;
  const myarr = useState<number>(10);
  let myValue = myarr[0];
  let setValue = myarr[1];
  return (
    <div>
      <p>number: {myValue}</p>
      {/* <p>number: {a}</p> */}
      <button onClick={() => a++}>click me</button>
      <button onClick={() => console.log(a)}>log value</button>
    </div>
  );
}

export default App;
