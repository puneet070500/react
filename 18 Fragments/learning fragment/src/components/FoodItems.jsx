const FoodItems = ({ items }) => {
  return (
    <div>
      <ul className="list-group">
        {items.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
