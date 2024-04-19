import Styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the food name"
        className={Styles.foodInput}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default FoodInput;
