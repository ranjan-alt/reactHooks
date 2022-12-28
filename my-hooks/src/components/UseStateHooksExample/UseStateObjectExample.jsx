import { useState } from "react";

const UseStateObjExample = () => {
  const [person, setPerson] = useState({
    name: "ranjan",
    age: 29,
    message: "random message",
  });

  const changeMessage = () => {
    // how to change the message
    //    1st scenario we cannot do this  // setPerson("hello world") rest of the data is wiped out

    // 2nd sceanario setPerson({ message: "hello world" }); this will change the message but it will wipe out other two

    // to get rid of these two scenarios we have to use spread operator
    setPerson({ ...person, message: "hello world" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObjExample;

// question
// why do we use spread operator ?
