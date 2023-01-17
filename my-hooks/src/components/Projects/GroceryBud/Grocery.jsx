import { useState } from "react";
import List from "./List";
import Alert from "./Alert";
const Grocery = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: true, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("heelo");
    if (!name) {
      //display alert
    } else if (name && isEditing) {
      //deal with edit
    } else {
      //showalert
      const { newItems } = { id: new Date().getTime.toString(), title: name };
      setList([...list, newItems]);
      setName("");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery bud</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">{isEditing ? "edit" : "submit"}</button>
      </form>
      <div>
        <List />
        <button>Clear item</button>
      </div>
    </div>
  );
};

export default Grocery;
