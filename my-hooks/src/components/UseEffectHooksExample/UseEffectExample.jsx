//question what is useEffect?
//BY DEFAULT RUNS AFTER EVERY RENDER

//what is dependency list?

//question what is second parameter

//we cannot call hooks conditionally like inisde if(){}
// we can call the conditions within the callback as demonstrated

import { useEffect } from "react";
import { useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
    //this condition will only run after the condition however useEffect will render as per rule
    if (value > 2) {
      document.title = `useEffect${value}`;
    }
  },[value]);
  return (
    <>
      <div>
        <h1>{value}</h1>
        <button onClick={() => setValue(value + 1)}>Click me </button>
      </div>
    </>
  );
};

export default UseEffectBasics;
