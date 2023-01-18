const List = ({items}) => {
  console.log(items)
  return (
    <>
    <h4>List Items</h4>
      {items.map((item)=>{
        const {id, title} = item
      return (
          <div>
            {title}
            <button>Edit</button>
              <button>Delete</button>
          
          </div>
)
})}
    </>
  );
};

export default List;
