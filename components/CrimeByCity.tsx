import React from "react";
import { CrimeByData } from "./CrimeByData";

const fakeData = [
  {
    name: "Pres. Prudente",
    crimes: 1800,
  },
  {
    name: "Dracena",
    crimes: 11900,
  },
  {
    name: "Pres. Prudente1",
    crimes: 1800,
  },
  {
    name: "Dracena1",
    crimes: 11900,
  },
  {
    name: "Pres. Prudente2",
    crimes: 1800,
  },
  {
    name: "Dracena2",
    crimes: 11900,
  },
  {
    name: "Pres. Prudente11",
    crimes: 1800,
  },
  {
    name: "Dracena11",
    crimes: 11900,
  },
  {
    name: "Pres. Prudente12",
    crimes: 1800,
  },
  {
    name: "Dracena12",
    crimes: 11900,
  },
  {
    name: "Pres. Prudente21",
    crimes: 1800,
  },
  {
    name: "Dracena21",
    crimes: 11900,
  },
];

const CrimeByCity = () => {
  return (
    <CrimeByData
      data={fakeData}
      xField="name"
      yField="crimes"
      title="Top 10 cidades com a maior quantidade de registros de roubos"
    />
  );
};

export { CrimeByCity };
