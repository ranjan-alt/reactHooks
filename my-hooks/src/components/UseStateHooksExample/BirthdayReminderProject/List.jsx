const List = ({ people }) => {
  return (
    <>
      <h1>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div>
              <p>{id}</p>
              <h3>{name}</h3>
            </div>
          );
        })}
      </h1>
    </>
  );
};

export default List;
