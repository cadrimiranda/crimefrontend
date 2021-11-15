import React from "react";
import { CrimeByData } from "./CrimeByData";

const fakeData = [
  {
    name: "Rua Itália (Prudente)",
    crimes: 1600,
  },
  {
    name: "Rua Paulista (Dracena)",
    crimes: 1500,
  },
  {
    name: "Rua Maria (Prudente)",
    crimes: 1400,
  },
  {
    name: "Rua João (Dracena)",
    crimes: 1300,
  },
  {
    name: "Rua Luvia (Dracena)",
    crimes: 1200,
  },
  {
    name: "Rua Josias (Prudente)",
    crimes: 1100,
  },
  {
    name: "Rua Jeremias (Prudente)",
    crimes: 1000,
  },
  {
    name: "Rua Santo (Prudente)",
    crimes: 900,
  },
  {
    name: "Rua Jeremias (Dracena)",
    crimes: 1000,
  },
  {
    name: "Rua Santo (Prudente)",
    crimes: 900,
  },
];

const CrimeByStreet = () => {
  return (
    <CrimeByData
      data={fakeData}
      xField="name"
      yField="crimes"
      title="Top 10 ruas com a maior quantidade de registros de roubos"
    />
  );
};

export { CrimeByStreet };
