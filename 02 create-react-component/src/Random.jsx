import React from "react";

const Random = () => {
  let random = Math.random() * 100;

  return (
    <>
      <h1 style={{ backgroundColor: "#776584" }}>
        {" "}
        Random number is: {Math.round(random)}
      </h1>
    </>
  );
};

export default Random;
