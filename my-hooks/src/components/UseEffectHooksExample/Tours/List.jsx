import { useState } from "react";

const List = ({ tours }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section>
      <div> our tours</div>
      {tours.map((tour) => {
        const { body, id } = tour;
        return (
          <>
            <div>{id}</div>
            <div>{readMore ? body : `${body.substring(0, 20)}...`}</div>
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "show More"}
            </button>
            <button>delete</button>
          </>
        );
      })}
    </section>
  );
};

export default List;
