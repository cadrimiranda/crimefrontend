import { useEffectRequester } from "../hooks/useEffectRequester";
import { CrimeByDayTime, CrimeType } from "./CrimeByDayTime";
import { PeriodoOcorrenciaEnum } from "./Filters";

type TResponse = {
  PERIDOOCORRENCIA: PeriodoOcorrenciaEnum;
  AMOUNT: number;
}[];

type itemDefault = {
  percentage: number;
  crimeCount: number;
  dayTime: CrimeType;
  period: PeriodoOcorrenciaEnum;
};

const CrimeByDayPeriod = () => {
  const getDayTime = (
    period: string
  ): { dayTime: CrimeType; order: number } => {
    switch (period) {
      case PeriodoOcorrenciaEnum.aNoite:
        return { order: 4, dayTime: "night" };
      case PeriodoOcorrenciaEnum.aTarde:
        return { order: 3, dayTime: "afternoon" };
      case PeriodoOcorrenciaEnum.deMadrugada:
        return { order: 1, dayTime: "dawn" };
      case PeriodoOcorrenciaEnum.pelaManha:
        return { order: 2, dayTime: "morning" };
      default:
        return { order: 5, dayTime: "uncertain" };
    }
  };

  const mapData = (data: TResponse) => {
    const sum = data.reduce((acc, next) => acc + next.AMOUNT, 0);
    const final = data.map((x) => ({
      period: x.PERIDOOCORRENCIA,
      crimeCount: x.AMOUNT,
      percentage: Math.round((x.AMOUNT * 100) / sum),
      ...getDayTime(x.PERIDOOCORRENCIA),
    }));

    final.sort((a, b) => a.order - b.order);
    return final.map((x) => {
      // @ts-ignore
      delete x.order;
      return x;
    });
  };

  const { mappedData, loading } = useEffectRequester<TResponse, itemDefault[]>(
    "/get_amount_crime_period",
    mapData,
    false,
    [{}, {}, {}, {}, {}]
  );

  return (
    <div className="crime-card">
      <h1 className="crime-title">
        Infrações ocorridas em cada periodo do dia
      </h1>
      <div className="crime-day-period crime-pos-flex crime-pos-center-around">
        {mappedData.map((x) => (
          <CrimeByDayTime key={x.dayTime} loading={loading} {...x} />
        ))}
      </div>
    </div>
  );
};

export { CrimeByDayPeriod };
