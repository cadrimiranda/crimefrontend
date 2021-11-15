import { useMemo } from "react";

type CrimeType = "morning" | "afternoon" | "night" | "dawn";

const CrimeByDayTime = ({
  dayTime,
  crimeCount,
  percentage
}: {
  dayTime: CrimeType;
  crimeCount: number;
  percentage: number
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

    return "bi bi-moon";
  }, [dayTime]);

  return (
    <div className="crime-bydaytime crime-pos-flex crime-pos-center-center crime-pos-column">
      <i className={getCrimeIcon} />
      <span>{crimeCount}</span>
      <span>{`${percentage}%`}</span>
    </div>
  );
};

export { CrimeByDayTime };
