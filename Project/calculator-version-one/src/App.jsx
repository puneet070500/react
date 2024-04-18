import styles from "./App.module.css";
import ButtonsContainers from "./components/ButtonsContainers";
import Display from "./components/Display";
function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display />
        <ButtonsContainers />
      </div>
    </>
  );
}

export default App;
