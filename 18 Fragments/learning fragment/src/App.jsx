import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["dal", "rice", "vegetable", "milk", "ghee"];
  // let foodItems = [];
  //
  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
