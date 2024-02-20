import React, { useState } from "react";

const Laskuri = () => {
  const [laskurinArvo, setLaskurinArvo] = useState(0);

  const kasvataLaskuria = () => {
    setLaskurinArvo(laskurinArvo + 1);
  };
  const NollaaLaskuri = () => {
    setLaskurinArvo(0);
  };
  const tekstiVarivari = laskurinArvo > 10 ? "red" : "black";

  return (
    <div>
      <button onClick={kasvataLaskuria}>Kasvata</button>
      <button onClick={NollaaLaskuri}>Nollaa</button>
      <Arvo arvo={laskurinArvo} />
    </div>
  );
};

const Arvo = ({ arvo }) => {
  const tekstiVari = arvo > 10 ? "red" : "black";

  return <h1 style={{ color: tekstiVari }}>Laskuri on {arvo}</h1>;
};

export { Laskuri };
