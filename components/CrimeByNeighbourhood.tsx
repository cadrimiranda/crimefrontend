import React from "react";
import { useEffectRequester } from "../hooks/useEffectRequester";
import { CrimeByData } from "./CrimeByData";

type TResponse = {
  BAIRRO: string;
  AMOUNT: number;
}[];

type TData = {
  Bairro: string;
  Quantidade: number;
}[];

const CrimeByNeighbourhood = () => {
  const { mappedData, loading } = useEffectRequester<TResponse, TData>(
    "/get_neighborhood_crime",
    (data) => data.map((x) => ({ Quantidade: x.AMOUNT, Bairro: x.BAIRRO }))
  );

  return (
    <CrimeByData
      loading={loading}
      data={mappedData}
      xField="Bairro"
      yField="Quantidade"
      title="Top bairros com a maior quantidade de registros de roubos"
    />
  );
};

export { CrimeByNeighbourhood };
