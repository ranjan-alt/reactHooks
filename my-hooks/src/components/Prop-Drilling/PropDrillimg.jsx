import { useContext, useState } from "react";
import data from "../../data";

//ques- how to fix prop drilling ?
// we can fix it by using useContext api and redux for complex cases 

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <h1>Prop Drilling</h1>
      <List people={people} removePerson={removePerson} />
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      <h1>List</h1>
      {people.map((person) => {
        return (
          // <>{person.id}</>
          <>
            <SinglePerson {...person} removePerson={removePerson} />
          </>
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => removePerson(id)}>Delete</button>
    </div>
  );
};
export default PropDrilling;
