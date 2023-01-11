import List from "./List";
import { useState } from "react";
import data from "../../../data";
const Birthday = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>Clear all</button>
    </>
  );
};

export default Birthday;
