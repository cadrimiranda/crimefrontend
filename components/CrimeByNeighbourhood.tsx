import React from "react";
import { CrimeByData } from "./CrimeByData";

const fakeData = [
  {
    name: "Centro (Dracena)",
    crimes: 1800,
  },
  {
    name: "Centro (Prudente)",
    crimes: 1700,
  },
  {
    name: "Jardim Itália (Prudente)",
    crimes: 1600,
  },
  {
    name: "Jardim Paulista (Prudente)",
    crimes: 1500,
  },
  {
    name: "Jardim Maria (Prudente)",
    crimes: 1400,
  },
  {
    name: "Jardim João (Prudente)",
    crimes: 1300,
  },
  {
    name: "Jardim Luvia (Prudente)",
    crimes: 1200,
  },
  {
    name: "Jardim Josias (Prudente)",
    crimes: 1100,
  },
  {
    name: "Jardim Jeremias (Prudente)",
    crimes: 1000,
  },
  {
    name: "Jardim Santo (Prudente)",
    crimes: 900,
  },
];

const CrimeByNeighbourhood = () => {
  return (
    <CrimeByData
      data={fakeData}
      xField="name"
      yField="crimes"
      title="Top 10 bairros com a maior quantidade de registros de roubos"
    />
  );
};

export { CrimeByNeighbourhood };
