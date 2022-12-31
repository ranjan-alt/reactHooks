// useEffect cleanup function

import { useEffect } from "react";
import { useState } from "react";
const Cleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  },[]);
  return (
    <>
      <h1>UseEffect cleanup function</h1>
      <h2>{size}</h2>
    </>
  );
};

export default Cleanup;
