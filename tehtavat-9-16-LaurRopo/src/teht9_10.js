import React, { useState } from "react";

const Cars = () => {
  const [carInput, setCarInput] = useState("");
  const [carList, setCarList] = useState([]);

  const handleInputChange = (event) => {
    setCarInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (carInput.trim() !== "") {
      setCarList([...carList, carInput]);
      setCarInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={carInput} onChange={handleInputChange} />
        <button type="submit">Save</button>
      </form>
      <ul>
        {carList.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
      <Info count={carList.length} />
    </div>
  );
};
const Info = (props) => {
  return (
    <div>
      <h2>{props.count >= 5 ? "Ainakin 5 nimeä on jo syötetty" : ""}</h2>
    </div>
  );
};

export { Cars, Info };
