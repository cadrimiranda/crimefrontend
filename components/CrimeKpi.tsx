import { useEffectRequester } from "../hooks/useEffectRequester";
import { useFilterContext } from "./FilterProvider";
import { CrimeEnum } from "./FiltersForm";
import { PieConfig } from "@ant-design/charts";
import dynamic from "next/dynamic";
import { useCallback } from "react";
import Skeleton from "antd/lib/skeleton";

const Pie = dynamic<PieConfig>(
  () => import("@ant-design/charts").then((mod) => mod.Pie) as any,
  { ssr: false }
);

type TResponse = {
  TYPE: CrimeEnum;
  AMOUNT: number;
};

type TData = {
  [key in CrimeEnum]: string;
};

const CrimeKpi = () => {
  const getItem = useCallback((x: TResponse) => {
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

    return { type: x.TYPE, amount: x.AMOUNT.toLocaleString("pt-BR") };
  }, []);

  const { city } = useFilterContext();
  const { loading, mappedData } = useEffectRequester<TResponse[], TData>(
    "/get_amount_crime",
    (res) =>
      res.reduce(
        (acc, next) => ({
          ...acc,
          [next.TYPE]: next.AMOUNT.toLocaleString("pt-BR"),
        }),
        {} as TData
      )
  );

  return (
    <div className="crime-kpi-container crime-card">
      <h1
        style={{
          textAlign: "center",
        }}
        className="crime-title-with-subtitle"
      >
        {`Acumulados ${city ? ` em ${city}` : ""}`}
      </h1>
      <div className="crime-kpi-itens crime-pos-flex crime-pos-center-around">
        <table>
          <colgroup>
            <col style={{ width: "35%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "35%" }} />
          </colgroup>
          <thead>
            <tr>
              <td className="td-data-left">Furtos</td>
              <td></td>
              <td>Roubos</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td-data td-data-left">
                {mappedData[CrimeEnum.btnFurtoVeiculo] || (
                  <Skeleton.Button
                    active
                    style={{ width: "80px" }}
                    shape="round"
                  />
                )}
              </td>
              <td className="td-icon">
                <span className="material-icons icon-car">directions_car</span>
              </td>
              <td className="td-data td-data-right">
                {mappedData[CrimeEnum.btnRouboVeiculo] || (
                  <Skeleton.Button
                    active
                    style={{ width: "80px" }}
                    shape="round"
                  />
                )}
              </td>
            </tr>
            <tr>
              <td className="td-data td-data-left">
                {mappedData[CrimeEnum.btnFurtoCelular] || (
                  <Skeleton.Button
                    active
                    style={{ width: "80px" }}
                    shape="round"
                  />
                )}
              </td>
              <td className="td-icon">
                <span className="material-icons icon-wheel">two_wheeler</span>
              </td>
              <td className="td-data td-data-right">
                {mappedData[CrimeEnum.btnRouboCelular] || (
                  <Skeleton.Button
                    active
                    style={{ width: "80px" }}
                    shape="round"
                  />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { CrimeKpi };
