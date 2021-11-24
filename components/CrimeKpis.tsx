import Skeleton from "antd/lib/skeleton";
import { useEffectRequester } from "../hooks/useEffectRequester";
import { DataCircle } from "./DataCircle";
import { useFilterContext } from "./FilterProvider";
import { CrimeEnum } from "./Filters";

type TResponse = {
  TYPE: CrimeEnum;
  AMOUNT: number;
};

const CrimeKpis = () => {
  const { city } = useFilterContext();
  const { data, loading } =
    useEffectRequester<TResponse[]>("/get_amount_crime");

  function getCircle(x: TResponse) {
    let name = "";
    switch (x.TYPE) {
      case CrimeEnum.btnFurtoCelular:
        name = "Furtos de celulares";
        break;
      case CrimeEnum.btnFurtoVeiculo:
        name = "Furtos de veiculos";
        break;
      case CrimeEnum.btnRouboCelular:
        name = "Roubos de celulares";
        break;
      case CrimeEnum.btnRouboVeiculo:
        name = "Roubos de veiculos";
        break;
    }

    return <DataCircle key={name} value={x.AMOUNT} text={name} />;
  }

  return (
    <div className="crime-kpi-container crime-card-only-desktop">
      <h1 className="crime-title-with-subtitle crime-only-desktop">
        {`Acumulado de roubos e furtos${city ? ` em ${city}` : ""}`}
      </h1>
      <div className="crime-kpi-itens crime-pos-flex crime-pos-center-around">
        {Array.isArray(data) && !loading && data.map(getCircle)}
        {loading &&
          [1, 2, 3, 4].map(() => (
            <Skeleton.Button
              style={{ height: "115px", width: "115px", margin: "6px 0" }}
              active
              shape="round"
            />
          ))}
      </div>
    </div>
  );
};

export { CrimeKpis };
