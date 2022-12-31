import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const UseEffectUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    // setUsers(users);  no problem with this code but it will create infinite loop so the solution is to add [] in usefeect dependency list
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1>Users example</h1>
      <div>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li>
              <img src={avatar_url} alt={login} />
              <div>
                <h1>{login}</h1>
                <a href={html_url}></a>
              </div>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default UseEffectUsers;
