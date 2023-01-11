import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../Loading/Loading";
import List from "./List";
const url = "https://jsonplaceholder.typicode.com/comments";

const Tour = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <h1>
      <List tours={tours} />
    </h1>
  );
};

export default Tour;
