import { useState } from "react";

const Rivi = ({ etunimi, sukunimi, aloitusvuosi }) => (
  <li>
    <span>{etunimi},</span>
    <span>{" " + sukunimi},</span>
    <span>{" " + aloitusvuosi}</span>
  </li>
);

const Lista = () => {
  const opiskelijat = [
    { nimi: "Maija", osoite: "Microkatu 1", aloitusvuosi: 2001 },
    { nimi: "Liisa", osoite: "Opistotie 2", aloitusvuosi: 1999 },
    { nimi: "Leena", osoite: "Kauppakatu 7 a 2", aloitusvuosi: 1997 },
    { nimi: "Kaisa", osoite: "Wilman polku 9", aloitusvuosi: 2012 },
  ];

  return (
    <ul>
      {opiskelijat.map((opiskelija, index) => (
        <Rivi key={index} {...opiskelija} />
      ))}
    </ul>
  );
};

const TauluRivi = ({ rivit }) => (
  <tbody>
    {rivit.map((rivi, index) => (
      <tr key={index}>
        <td>{rivi.nimi}</td>
        <td>{rivi.osoite}</td>
        <td>{rivi.aloitusvuosi}</td>
      </tr>
    ))}
  </tbody>
);

const Otsikko = ({ nimi, osoite, aloitusvuosi }) => (
  <thead>
    <tr>
      <th>{nimi}</th>
      <th>{osoite}</th>
      <th>{aloitusvuosi}</th>
    </tr>
  </thead>
);

const Taulukko = ({ data, otsikot }) => (
  <table>
    <Otsikko {...otsikot} />
    <TauluRivi rivit={data} />
  </table>
);

const Teht6 = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const otsikot = {
    nimi: "Etunimi",
    osoite: "Lähiosoite",
    aloitusvuosi: "Aloitusvuosi",
  };
  const data = [
    { nimi: "Maija", osoite: "Microkatu 1", aloitusvuosi: 2001 },
    { nimi: "Liisa", osoite: "Opistotie 2", aloitusvuosi: 1999 },
    { nimi: "Leena", osoite: "Kauppakatu 7 a 2", aloitusvuosi: 1997 },
    { nimi: "Kaisa", osoite: "Wilman polku 9", aloitusvuosi: 2012 },
    { nimi: "Sirpa", osoite: "Kotipolku 8", aloitusvuosi: 2021 },
  ];

  return (
    <div>
      {isVisible && <Taulukko data={data} otsikot={otsikot} />}
      {isVisible && <Taulukko data={data} otsikot={otsikot} />}
      <button onClick={toggleVisibility}>
        {isVisible ? "Piilota" : "Näytä"}
      </button>
    </div>
  );
};

export { Lista, Rivi, Taulukko, TauluRivi, Otsikko, Teht6 };
