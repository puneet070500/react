import styles from "./Button.module.css";

const ButtonsContainers = () => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div>
      <div className={styles.buttonContainer}>
        {buttonName.map((buttonName) => {
          return (
            <button key={buttonName} className={styles.button}>
              {buttonName}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonsContainers;
