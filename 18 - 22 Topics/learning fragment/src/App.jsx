import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["dal", "rice", "vegetable", "milk", "ghee"];
  // let foodItems = [];
  //
  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput />
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        <p>Hello From new container. I am coming as Children</p>
      </Container>
    </>
  );
}

export default App;
