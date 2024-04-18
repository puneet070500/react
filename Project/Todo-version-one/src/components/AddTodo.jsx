const AddTodo = () => {
  return (
    <div>
      <div className="container">
        <div className="row r-row">
          <div className="col-6">
            <input type="text" placeholder="Enter ToDo List here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button className="bt-button btn btn-success ">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
