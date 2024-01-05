import { useState } from "react";

function Display() {
  let a = 2 + 2;

  const myarr = useState<number>(0);
  let myValue = myarr[0];
  let setValue = myarr[1];
  return (
    <div>
      <p>number: - {myValue}</p>
      {/* <p>number: {a}</p> */}
      {/* <button onClick={() => a++}>click me</button> */}
      <button onClick={() => setValue(myValue + 1)}>log value</button>
    </div>
  );
}

export default Display;
