/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((items) => (
          <TodoItem
            key={items.name}
            todoDate={items.dueDate}
            todoName={items.name}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
