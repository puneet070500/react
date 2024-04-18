import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "24/04/2025",
    },
    {
      name: "Sand",
      dueDate: "24/04/2025",
    },
  ];
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </div>
  );
}

export default App;
