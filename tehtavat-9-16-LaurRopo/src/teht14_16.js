import React, { useState } from "react";

const Label = ({ text }) => <label>{text}</label>;

const Table = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>Nimi</th>
        <th>Ammatti</th>
        <th>Tutkinto</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.nimi}</td>
          <td>{item.ammatti.koodi}</td>
          <td>
            {item.tutkinto_suoritettu
              ? "Tutkinto suoritettu: " + item.tutkinto
              : "Ei tutkintoa"}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Professional = ({ ammatit }) => {
  const [nimi, setNimi] = useState("");
  const [selectedAmmatti, setSelectedAmmatti] = useState("");
  const [tutkintoSuoritettu, setTutkintoSuoritettu] = useState(false);
  const [tutkinto, setTutkinto] = useState("");
  const [data, setData] = useState([]);

  const handleInsertClick = () => {
    if (nimi && selectedAmmatti !== "") {
      const newItem = {
        nimi,
        ammatti: selectedAmmatti,
        tutkinto_suoritettu: tutkintoSuoritettu,
        tutkinto: tutkintoSuoritettu ? tutkinto : "",
      };
      setData([...data, newItem]);

      setNimi("");
      setSelectedAmmatti("");
      setTutkintoSuoritettu(false);
      setTutkinto("");
    }
  };

  const handleAmmattiChange = (event) => {
    setSelectedAmmatti(event.target.value);
  };

  const handleTutkintoCheckboxChange = (event) => {
    setTutkintoSuoritettu(event.target.checked);
  };

  return (
    <div>
      <label>
        Nimi:
        <input
          type="text"
          value={nimi}
          onChange={(e) => setNimi(e.target.value)}
        />
      </label>

      <br />

      <label>
        Ammatti:
        <select value={selectedAmmatti} onChange={handleAmmattiChange}>
          <option value="" disabled>
            Select
          </option>
          {ammatit.map((ammatti) => (
            <option key={ammatti.koodi} value={ammatti.koodi}>
              {ammatti.selite}
            </option>
          ))}
        </select>
      </label>

      <br />

      <Label text="Tutkinto suoritettu:" />
      <input
        type="checkbox"
        checked={tutkintoSuoritettu}
        onChange={handleTutkintoCheckboxChange}
      />

      {tutkintoSuoritettu && (
        <>
          <br />
          <label>
            Tutkinto:
            <input
              type="text"
              value={tutkinto}
              onChange={(e) => setTutkinto(e.target.value)}
            />
          </label>
        </>
      )}

      <br />

      <button onClick={handleInsertClick}>Insert</button>

      <Table data={data} />
    </div>
  );
};

const Teht14 = () => {
  const ammatit = [
    { koodi: "IT", selite: "IT-asiantuntija" },
    { koodi: "HR", selite: "Henkilöstöpäällikkö" },
    { koodi: "SA", selite: "Sairaanhoitaja" },
  ];

  return <Professional ammatit={ammatit} />;
};

export { Teht14 };
