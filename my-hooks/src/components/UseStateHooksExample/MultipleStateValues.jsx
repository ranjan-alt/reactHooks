import { useState } from "react";

const MultipleStateValues = () => {
  const [person, setPerson] = useState({
    name: "ranjan",
    age: 29,
    message: "random message",
  });

  const [name, setName] = useState("kumar");
  const [age, setAge] = useState(29);
  const [message, setMessage] = useState("random message");
  const changeMessage = () => {
    // setPerson({ ...person, message: "hello world" });
    setMessage("hello wolrd");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default MultipleStateValues;


// instead of creating giant objects we can use many state depending on the need 