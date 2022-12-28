import { useState } from "react";
import { data } from "../../data";
const FirstExample = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  // or using function approach //read filter method to get hold of function
  //const removeItem = (id)=>{
  // setPeople((oldPeople)=>{
  //   let newPeople = oldPeople.filter((person)=>person.id !== id);
  //   return newPeople
  // })
  // }
  return (
    <>
      <h1>useState array example</h1>
      {people.map((person) => {
        const { id, name } = person; //rather than writing person.name person.id destructure it
        return (
          <div>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove Item</button>
          </div>
        );
      })}
      {/* <button onClick={setPeople([])}>clear items </button> */}
      {/* setPeople function tabhi call ho jb hm call krnge .......dont set directly  */}
      {/* dont set state directly we dont want to get this function called automatically rather onclick it should be called  */}

      <button onClick={() => setPeople([])}>clear items </button>
    </>
  );
};

export default FirstExample;

// question
// why do we use arrow function ??
// why cant we directly call setFunction onclick of event and set the value
