import { useEffectRequester } from "../hooks/useEffectRequester";
import { CrimeByIconPercentage } from "./CrimeByIconPercentage";

enum EDescrTipoVeiculo {
  moto = "Moto",
  carro = "Carro",
  caminhao = "Caminhão",
}

type TDescrTipoVeiculo =
  | EDescrTipoVeiculo.carro
  | EDescrTipoVeiculo.caminhao
  | EDescrTipoVeiculo.moto;

type TResponse = {
  DESCR_TIPO_VEICULO: TDescrTipoVeiculo;
  AMOUNT: number;
}[];

type TData = {
  type: TDescrTipoVeiculo;
  quantity: number;
  percentage: number;
}[];

type TResponseExpanded = {
  DESCR_MARCA_VEICULO: string;
  DESCR_TIPO_VEICULO: TDescrTipoVeiculo;
  TYPE: string;
  AMOUNT: number;
}[];

type TDataExpanded = {
  [p in EDescrTipoVeiculo]: {
    name: string;
    qtd: number;
    percentage: number;
  }[];
};

const CrimeByVehicle = () => {
  const { mappedData } = useEffectRequester<TResponse, TData>(
    "/get_crime_vehicles_type",
    (data) => {
      let tot = 0;
      const res = data
        .map((x) => {
          tot += x.AMOUNT;

          return {
            quantity: x.AMOUNT,
            type: x.DESCR_TIPO_VEICULO,
            percentage: 0,
          };
        })
        .map((x) => ({
          ...x,
          percentage: Math.round((x.quantity * 100) / tot),
        }));

      return res;
    }
  );

  const { mappedData: expanded } = useEffectRequester<
    TResponseExpanded,
    TDataExpanded
  >(
    "/get_crime_vehicles_models",
    (data) => {
      const moto = data.filter(
        (x) => x.DESCR_TIPO_VEICULO === EDescrTipoVeiculo.moto
      );
      let tot = moto.reduce((acc, next) => acc + next.AMOUNT, 0);
      const motoExpand = moto.map((x) => ({
        name: x.DESCR_MARCA_VEICULO,
        qtd: x.AMOUNT,
        percentage: Math.round((x.AMOUNT * 100) / tot),
      }));

      const carro = data.filter(
        (x) => x.DESCR_TIPO_VEICULO === EDescrTipoVeiculo.carro
      );
      tot = carro.reduce((acc, next) => acc + next.AMOUNT, 0);
      const carroExpand = carro.map((x) => ({
        name: x.DESCR_MARCA_VEICULO,
        qtd: x.AMOUNT,
        percentage: Math.round((x.AMOUNT * 100) / tot),
      }));

      const caminhao = data.filter(
        (x) => x.DESCR_TIPO_VEICULO === EDescrTipoVeiculo.caminhao
      );
      tot = caminhao.reduce((acc, next) => acc + next.AMOUNT, 0);
      const caminhaoExpand = caminhao.map((x) => ({
        name: x.DESCR_MARCA_VEICULO,
        qtd: x.AMOUNT,
        percentage: Math.round((x.AMOUNT * 100) / tot),
      }));

      const res = {
        [EDescrTipoVeiculo.moto]: motoExpand,
        [EDescrTipoVeiculo.carro]: carroExpand,
        [EDescrTipoVeiculo.caminhao]: caminhaoExpand,
      };

      return res;
    },
    false,
    {},
    [mappedData.length]
  );

  return (
    <div className="crime-card">
      <h1 className="crime-title-with-subtitle">
        Aqui temos a criminalidade por cada categoria de veículo
      </h1>
      <h2 className="crime-subtitle">
        Clique nos icones para exibir as marcas
      </h2>
      <div className="crime-data-expand-wrap crime-pos-flex crime-pos-mobile-column">
        <CrimeByIconPercentage
          dataExpand={expanded.Caminhão || []}
          icon="local_shipping"
          qtd={
            mappedData.find((x) => x.type === EDescrTipoVeiculo.caminhao)
              ?.percentage || 0
          }
        />
        <CrimeByIconPercentage
          dataExpand={expanded.Carro || []}
          icon="directions_car"
          qtd={
            mappedData.find((x) => x.type === EDescrTipoVeiculo.carro)
              ?.percentage || 0
          }
        />
        <CrimeByIconPercentage
          dataExpand={expanded.Moto || []}
          icon="two_wheeler"
          qtd={
            mappedData.find((x) => x.type === EDescrTipoVeiculo.moto)
              ?.percentage || 0
          }
        />
      </div>
    </div>
  );
};

export { CrimeByVehicle };
