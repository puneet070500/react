const TodoItem = () => {
  let todoName = "Buy Milk";
  let todoDate = "24/10/2024";
  return (
    <div>
      <div className="container ">
        <div className="row r-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button className="btn btn-danger bt-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
