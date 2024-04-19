import styles from "./FoodItems.module.css";
const FoodItems = ({ items }) => {
  const handleClicked = (e) => {
    console.log(e);
    console.log(`Items being buying ${e.items}`);
  };
  return (
    <div>
      <ul className="list-group">
        {items.map((items) => (
          <li key={items} className="list-group-item">
            {items}
            <button
              className={`${styles.button} btn btn-primary`}
              onClick={(e) => handleClicked(e)}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
