import React, { useState } from "react";

const ErrorMessage = ({ message }) => {
  return <p style={{ color: "red" }}>{message}</p>;
};

const ListForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [year, setYear] = useState("");
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [duplicateNameError, setDuplicateNameError] = useState(false);
  const [items, setItems] = useState([]);

  const handleAddClick = () => {
    const isDuplicateName = items.some((item) => item.split(",")[0] === name);

    const nameValid = name.length >= 4;
    const addressValid = address.length >= 4;
    const yearValid = year.length >= 4;

    setNameError(!nameValid);
    setAddressError(!addressValid);
    setYearError(!yearValid);
    setDuplicateNameError(isDuplicateName);

    if (nameValid && addressValid && yearValid && !isDuplicateName) {
      const newItem = `${name},${address},${year}`;
      setItems([...items, newItem]);

      setName("");
      setAddress("");
      setYear("");
      setNameError(false);
      setAddressError(false);
      setYearError(false);
      setDuplicateNameError(false);
    }
  };

  return (
    <div>
      <label>
        Nimi:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Osoite:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        Syntymävuosi:
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </label>
      <button onClick={handleAddClick}>Add</button>

      {duplicateNameError && (
        <ErrorMessage message={`Nimi ${name} on jo syötetty`} />
      )}
      <ErrorMessage
        message={`Virheelliset kentät: ${nameError && "nimi, "}${
          addressError && "osoite, "
        }${yearError && "vuosi"}`}
      />

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export { ListForm };
