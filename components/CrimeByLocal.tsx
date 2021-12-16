import { useEffectRequester } from "../hooks/useEffectRequester";
import { CrimeByData } from "./CrimeByData";

type TResponse = {
  DESCRICAOLOCAL: string;
  AMOUNT: number;
}[];

type TData = {
  Local: string;
  Quantidade: number;
}[];

const CrimeByLocal = () => {
  const { mappedData, loading } = useEffectRequester<TResponse, TData>(
    "/get_locals_crime",
    (data) =>
      data.map((x) => ({ Quantidade: x.AMOUNT, Local: x.DESCRICAOLOCAL }))
  );

  return (
    <CrimeByData
      classes="margin-bottom"
      loading={loading}
      data={mappedData}
      xField="Local"
      yField="Quantidade"
      title="Quantidade de crimes cometidos nos locais das cidades"
    />
  );
};

export { CrimeByLocal };
