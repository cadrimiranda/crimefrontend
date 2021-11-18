import { useEffect, useState } from "react";
import { useEffectRequester } from "../hooks/useEffectRequester";
import { CrimeByDayTime, CrimeType } from "./CrimeByDayTime";

type TResponse = {
  PERIDOOCORRENCIA: string;
  AMOUNT: number;
}[];

type itemDefault = {
  percentage: number;
  crimeCount: number;
  dayTime: CrimeType;
};

const CrimeByDayPeriod = () => {
  const getDayTime = (
    period: string
  ): { dayTime: CrimeType; order: number } => {
    switch (period) {
      case "A NOITE":
        return { order: 4, dayTime: "night" };
      case "A TARDE":
        return { order: 3, dayTime: "afternoon" };
      case "DE MADRUGADA":
        return { order: 1, dayTime: "dawn" };
      case "PELA MANHÃ":
        return { order: 2, dayTime: "morning" };
      default:
        return { order: 5, dayTime: "uncertain" };
    }
  };
  const mapData = (data: TResponse) => {
    const sum = data.reduce((acc, next) => acc + next.AMOUNT, 0);
    const final = data.map((x) => ({
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

  const { mappedData } = useEffectRequester<TResponse, itemDefault[]>(
    "/get_amount_crime_period",
    mapData
  );

  return (
    <div className="crime-card">
      <h1 className="crime-title">
        Infrações ocorridas em cada periodo do dia
      </h1>
      <div className="crime-day-period crime-pos-flex crime-pos-center-around">
        {mappedData.map((x) => (
          <CrimeByDayTime {...x} />
        ))}
      </div>
    </div>
  );
};

export { CrimeByDayPeriod };
