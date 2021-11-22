import { useMemo } from "react";

export type CrimeType =
  | "morning"
  | "afternoon"
  | "night"
  | "dawn"
  | "unknow"
  | "uncertain";

const CrimeByDayTime = ({
  dayTime,
  crimeCount,
  percentage,
  period,
}: {
  period: string;
  dayTime: CrimeType;
  crimeCount: number;
  percentage: number;
}) => {
  const getCrimeIcon = useMemo(() => {
    if (dayTime === "morning") {
      return "bi bi-sun";
    }

    if (dayTime === "afternoon") {
      return "bi bi-sunset";
    }

    if (dayTime === "dawn") {
      return "bi bi-sunrise";
    }

    if (dayTime === "uncertain") {
      return "bi bi-slash-circle";
    }

    if (dayTime === "unknow") {
      return "bi bi-arrow-clockwise";
    }

    return "bi bi-moon";
  }, [dayTime]);

  return (
    <div
      title={period}
      className="crime-bydaytime crime-pos-flex crime-pos-center-center crime-pos-column"
    >
      <i className={getCrimeIcon} />
      <span className="crime-daytime-period">{period}</span>
      <span>{crimeCount}</span>
      <span>{`${percentage}%`}</span>
    </div>
  );
};

export { CrimeByDayTime };
