import { useReducer } from "react";
import { useState } from "react";
import { data } from "../../data";
import Modal from "../Modal/Modal";

//reducer function

const reducer = (state, action) => {
  console.log(state, action);
  if ((action.type = "ADD_ITEM")) {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if ((action.type = "NO_VALUE")) {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "please add value",
    };
  }

  throw new Error("no matching action type");
};

const defaultState = {
  people: [],
  //   people: data,//or
  isModalOpen: true,
  modalContent: "hello world",
};

const UseReducerHook = () => {
  const [name, setName] = useState("");
  console.log(name)
  //   const [people, setPeople] = useState(data);
  //   const [showModal, setShowModal] = useState(false);  // we dont need these two we will use useReducer

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      //   setShowModal(true);
      //   setPeople([...people, { id: new Date().getTime().toString(), name }]);
      //   setName("");
      // const newItem = { id: Math.random(), name };
      const newItem = { name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      //   setShowModal(true);
      dispatch({ type: "NO_VALUE" });
    }
  };
  return (
    <>
      {/* {showModal && <Modal />} */}
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <h1>Use reducer hook example </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div>
            <p>
              {person.id}--
              {person.name}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default UseReducerHook;
