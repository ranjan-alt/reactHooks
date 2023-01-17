// To overcome prop drilling we will now use useContext hook

import React, { useContext, useState } from "react";
import data from "../../../data";

//ques- how to fix prop drilling ?
// we can fix it by using useContext api and redux for complex cases

const PersonContext = React.createContext();

const ContextApi = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      {/* <h1>Prop Drilling</h1>
      <List people={people} removePerson={removePerson} /> */}
      <PersonContext.Provider value={{ people, removePerson }}>
        <h1>Prop Drilling</h1>
        <List />
      </PersonContext.Provider>
    </>
  );
};

const List = ({ people }) => {
  const mainData = useContext(PersonContext)
  return (
    <>
      <h1>List</h1>
      {mainData.people.map((person) => {
        return (
          // <>{person.id}</>
          <>
            <SinglePerson {...person} />
          </>
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => removePerson(id)}>Delete</button>
    </div>
  );
};
export default ContextApi;
