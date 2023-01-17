// import { useState } from "react";
import List from "./List";

const Grocery = () => {
  //   const [name, setName] = useState("");
  //   const [list, setList] = useState([]);
  //   const [isEditing, setIsEditing] = useState(false);
  //   const [editId, setEditId] = useState(null);
  //   const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("heelo");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}></form>
      <div>
        <List />
        <button>Clear item</button>
      </div>
    </div>
  );
};

export default Grocery;
