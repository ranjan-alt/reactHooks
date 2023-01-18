import { useState } from "react";
import List from "./List";
import Alert from "./Alert";
const Grocery = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: true, msg: "hello world", type: "success" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("heelo");
    if (!name) {
      //display alert
    } else if (name && isEditing) {
      //deal with edit
    } else {
      //showalert
      const  newItem  = { id:Math.random(), title:name };
      setList([...list, newItem]);
      setName("");
      console.log("ji")
    }
    
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>Grocery bud</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">{isEditing ? "edit" : "submit"}</button>
      </form>
      {list.length >0 && (
        <div>
        <List items={list}/>
        <button>Clear item</button>
      </div>
      )
      
}
    </div>
  );
};

export default Grocery;
