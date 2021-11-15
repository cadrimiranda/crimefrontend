import { CrimeByDayTime } from "./CrimeByDayTime";

const CrimeByDayPeriod = () => {
  return (
    <div className="crime-card">
      <h1 className="crime-title">
        Infrações ocorridas em cada periodo do dia
      </h1>
      <div className="crime-day-period crime-pos-flex crime-pos-center-around">
        <CrimeByDayTime percentage={10} dayTime="dawn" crimeCount={800} />
        <CrimeByDayTime percentage={20} dayTime="morning" crimeCount={800} />
        <CrimeByDayTime percentage={60} dayTime="afternoon" crimeCount={800} />
        <CrimeByDayTime percentage={10} dayTime="night" crimeCount={800} />
      </div>
    </div>
  );
};

export { CrimeByDayPeriod };
