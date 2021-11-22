import React from "react";
import { useEffectRequester } from "../hooks/useEffectRequester";
import { CrimeByData } from "./CrimeByData";

type TResponse = {
  LOGRADOURO: string;
  AMOUNT: number;
}[];

type TData = {
  Logradouro: string;
  Quantidade: number;
}[];

const CrimeByStreet = () => {
  const { mappedData } = useEffectRequester<TResponse, TData>(
    "/get_street_crime",
    (data) =>
      data.map((x) => ({ Quantidade: x.AMOUNT, Logradouro: x.LOGRADOURO }))
  );

  return (
    <CrimeByData
      data={mappedData}
      xField="Logradouro"
      yField="Quantidade"
      title="Top ruas com a maior quantidade de registros de roubos"
    />
  );
};

export { CrimeByStreet };
