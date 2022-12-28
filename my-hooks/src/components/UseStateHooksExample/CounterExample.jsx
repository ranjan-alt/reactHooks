// here we will look at complex counter

import { useState } from "react";

const CounterExample = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      console.log("clicked");
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <div>
        <h1>Normal counter</h1>
        {value}
        <button onClick={() => setValue(value - 1)}>Decrease</button>
        {/* <button onClick={() => setValue(0)}>Reset</button>  */}
        {/* or */}
        <button onClick={reset}>Reset</button>
        <button onClick={() => setValue(value + 1)}>Increase</button>
      </div>
      <div>
        <h1>Complex counter</h1>
        {value}
        <button onClick={complexIncrease}>Increase Later</button>
      </div>
    </>
  );
};

export default CounterExample;
