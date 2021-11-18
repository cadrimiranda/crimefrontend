import React, { useEffect, useState } from "react";
import { useEffectRequester } from "../hooks/useEffectRequester";
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
type TState = { Cidade: string; Quantidade: number };

const CrimeByCity = () => {
  const { mappedData } = useEffectRequester<
    { CIDADE: string; AMOUNT: number }[],
    TState[]
  >("/get_cities_crime", (data) =>
    data.map<TState>((x) => ({
      Cidade: x.CIDADE,
      Quantidade: x.AMOUNT,
    }))
  );

  return (
    <CrimeByData
      data={mappedData}
      xField="Cidade"
      yField="Quantidade"
      title="Top 10 cidades com a maior quantidade de registros de roubos"
    />
  );
};

export { CrimeByCity };
