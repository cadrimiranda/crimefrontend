import React, { useEffect, useState } from "react";
import { useEffectRequester } from "../hooks/useEffectRequester";
import { CrimeByData } from "./CrimeByData";

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
